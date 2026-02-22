import { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const defaults = (size = 24): SVGProps<SVGSVGElement> => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
});

/* ─── Home: minimal house silhouette ─── */
export const IconHome = ({ size = 24, ...props }: IconProps) => (
  <svg {...defaults(size)} {...props}>
    <path
      d="M4 11L12 4L20 11V20H15V15H9V20H4V11Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ─── Fast-forward: double chevron ─── */
export const IconFastForward = ({ size = 24, ...props }: IconProps) => (
  <svg {...defaults(size)} {...props}>
    <path
      d="M6 5L13 12L6 19"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13 5L20 12L13 19"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ─── Stacks: two rectangles side by side ─── */
export const IconStacks = ({ size = 24, ...props }: IconProps) => (
  <svg {...defaults(size)} {...props}>
    <rect
      x="3"
      y="6"
      width="8"
      height="12"
      rx="1.5"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <rect
      x="13"
      y="6"
      width="8"
      height="12"
      rx="1.5"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

/* ─── Identity: two circles, big + small, no overlap ─── */
export const IconIdentity = ({ size = 24, ...props }: IconProps) => (
  <svg {...defaults(size)} {...props}>
    <circle
      cx="10"
      cy="12"
      r="7"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <circle
      cx="19"
      cy="8"
      r="3.5"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

/* ─── Closing: arrow-right-to-line ─── */
export const IconClosing = ({ size = 24, ...props }: IconProps) => (
  <svg {...defaults(size)} {...props}>
    <path d="M5 12H17M17 12L12 7M17 12L12 17M20 5V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ─── Article: open book ─── */
export const IconArticle = ({ size = 24, ...props }: IconProps) => (
  <svg {...defaults(size)} {...props}>
    <path d="M4 19V5C4 4 5 3 6 3H18C19 3 20 4 20 5V19C20 20 19 21 18 21H6C5 21 4 20 4 19Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 7H16M8 11H16M8 15H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const SECTION_ICONS = [IconHome, IconFastForward, IconStacks, IconIdentity, IconClosing, IconArticle] as const;
export const SECTION_LABELS = ["Home", "Instant", "Human Value", "Identity", "Summary", "Article"] as const;
