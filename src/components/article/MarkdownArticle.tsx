import { useState, useMemo, Fragment } from "react";
import ReactMarkdown, { Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { parseFrontmatter } from "./frontmatter";
import { Download } from "lucide-react";
import bbLogoHorizontal from "@/assets/bb-logo-horizontal-white.svg";
import {
  IconStacks,
  IconIdentity,
  IconOrgChart,
  IconAgent,
  IconTarget,
  IconFastForward,
  IconRocket,
} from "@/components/SectionIcons";

const ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  stacks: IconStacks,
  identity: IconIdentity,
  "org-chart": IconOrgChart,
  agent: IconAgent,
  target: IconTarget,
  "fast-forward": IconFastForward,
  rocket: IconRocket,
};

type SectionMeta = { heading: string; icon: string };

type Frontmatter = {
  title: string;
  subtitle?: string;
  pdfFilename?: string;
  sections?: SectionMeta[];
};

const SectionDivider = ({
  icon: Icon,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
}) => (
  <div className="flex items-center gap-6 my-20 md:my-28">
    <div className="flex-shrink-0 w-16 h-16 rounded-sm bg-brand-green/10 flex items-center justify-center">
      <Icon size={36} className="text-brand-green" />
    </div>
    <div className="flex-1">
      <div className="h-px bg-gray-200" />
    </div>
  </div>
);

// Normalize heading strings for matching (strip trailing periods, collapse whitespace)
const norm = (s: string) => s.trim().replace(/\s+/g, " ").replace(/[.]+$/, "").toLowerCase();

type Props = {
  source: string;
  onDownloadPdf?: () => Promise<void> | void;
  isGeneratingPdf?: boolean;
};

export const MarkdownArticle = ({ source, onDownloadPdf, isGeneratingPdf }: Props) => {
  const { data, content } = useMemo(() => {
    const parsed = parseFrontmatter(source);
    return { data: parsed.data as Frontmatter, content: parsed.content };
  }, [source]);

  const iconFor = useMemo(() => {
    const map = new Map<string, string>();
    (data.sections ?? []).forEach((s) => map.set(norm(s.heading), s.icon));
    return (heading: string) => map.get(norm(heading));
  }, [data.sections]);

  const components: Components = {
    h2: ({ children }) => {
      const text = String(children);
      const iconKey = iconFor(text);
      const Icon = iconKey ? ICONS[iconKey] : undefined;
      return (
        <>
          {Icon && <SectionDivider icon={Icon} />}
          <h2 className="font-serif text-3xl md:text-4xl leading-tight text-gray-900 mb-10">
            {children}
          </h2>
        </>
      );
    },
    h3: ({ children }) => (
      <h3 className="font-display text-sm uppercase tracking-[0.3em] text-gray-500 mb-5 mt-14">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-lg leading-[1.8] text-gray-700 mb-5">{children}</p>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-900 underline decoration-brand-green/60 decoration-1 underline-offset-4 hover:decoration-brand-green transition-colors"
      >
        {children}
      </a>
    ),
    strong: ({ children }) => <span className="text-gray-900 font-normal">{children}</span>,
    // Unordered lists: `-` bullets → bordered BB-green; `*` bullets → disc
    ul: ({ children, ...props }) => {
      const isDisc = isListDisc(props, content);
      if (isDisc) {
        return (
          <ul className="list-disc pl-8 space-y-2 text-lg text-gray-700 mb-5">{children}</ul>
        );
      }
      return <ul className="space-y-4 mb-10">{children}</ul>;
    },
    li: ({ children, ...props }) => {
      const isDisc = isItemDisc(props, content);
      if (isDisc) {
        return <li className="text-lg text-gray-700">{children}</li>;
      }
      return (
        <li className="text-lg leading-[1.8] text-gray-700 pl-6 border-l-2 border-brand-green/40">
          {children}
        </li>
      );
    },
    blockquote: ({ children }) => {
      // Split last child paragraph starting with — as the citation
      const items = Array.isArray(children) ? children : [children];
      const paragraphs = items.filter(
        (c): c is React.ReactElement => !!c && typeof c === "object" && "props" in (c as object)
      );
      // last paragraph text
      const lastIdx = paragraphs.length - 1;
      const last = paragraphs[lastIdx];
      const lastText = last ? extractText(last) : "";
      const isCited = /^\s*[—-]\s/.test(lastText);
      const body = isCited ? paragraphs.slice(0, lastIdx) : paragraphs;
      const cite = isCited ? lastText.replace(/^\s*[—-]\s/, "") : null;
      return (
        <blockquote className="border-l-2 border-brand-green/40 pl-6 text-lg italic text-gray-600 leading-[1.8] mb-6">
          {body.map((p, i) => (
            <Fragment key={i}>{p}</Fragment>
          ))}
          {cite && <footer className="not-italic text-sm text-gray-500 mt-2">- {cite}</footer>}
        </blockquote>
      );
    },
    hr: () => <div className="h-px bg-gray-300 my-14" />,
  };

  return (
    <article className="bg-white text-gray-900 min-h-screen">
      <div className="max-w-[680px] mx-auto px-6 md:px-8 py-20 md:py-32">
        <header className="mb-16 md:mb-24">
          <div className="flex items-center justify-between mb-10">
            <img src={bbLogoHorizontal} alt="BrandBlvd" className="h-6 invert opacity-40" />
            {onDownloadPdf && (
              <button
                onClick={onDownloadPdf}
                disabled={isGeneratingPdf}
                className="hidden md:flex items-center gap-2 px-4 py-2 text-sm text-gray-500 hover:text-gray-900 border border-gray-200 rounded-md hover:border-gray-400 transition-colors disabled:opacity-50"
              >
                <Download size={16} />
                {isGeneratingPdf ? "Generating..." : "Download PDF"}
              </button>
            )}
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.15] tracking-tight text-gray-900 mb-6">
            {data.title}
          </h1>
          {data.subtitle && (
            <p className="text-lg leading-[1.8] text-gray-500 mb-6">{data.subtitle}</p>
          )}
          <div className="w-16 h-1 bg-brand-green" />
        </header>

        <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
          {content}
        </ReactMarkdown>

        <div className="flex items-center gap-4 mt-20 md:mt-28 mb-8">
          <div className="flex-1 h-px bg-gray-200" />
          <div className="w-2 h-2 bg-brand-green rounded-full" />
          <div className="flex-1 h-px bg-gray-200" />
        </div>
        <div className="text-center">
          <img src={bbLogoHorizontal} alt="BrandBlvd" className="h-5 mx-auto invert opacity-30" />
        </div>
      </div>
    </article>
  );
};

type NodeProps = { node?: { position?: { start?: { offset?: number } } } };

function isListDisc(props: unknown, content: string): boolean {
  const node = (props as NodeProps).node;
  const offset = node?.position?.start?.offset;
  if (typeof offset !== "number") return false;
  const ch = content[offset];
  if (ch === "*") return true;
  if (ch === "-") return false;
  return false;
}

function isItemDisc(props: unknown, content: string): boolean {
  const node = (props as NodeProps).node;
  const offset = node?.position?.start?.offset;
  if (typeof offset !== "number") return false;
  return content[offset] === "*";
}

function extractText(node: React.ReactNode): string {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(extractText).join("");
  if (typeof node === "object" && "props" in (node as object)) {
    return extractText((node as React.ReactElement).props.children);
  }
  return "";
}

export default MarkdownArticle;
