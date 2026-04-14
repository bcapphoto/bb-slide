import { useState } from "react";
import MarkdownArticle from "@/components/article/MarkdownArticle";
import articleSource from "./article.md?raw";
import { parseFrontmatter } from "@/components/article/frontmatter";

const { data: frontmatter } = parseFrontmatter(articleSource);
const pdfFilename = (frontmatter.pdfFilename as string | undefined) ?? "article.pdf";

const ArticleSection = () => {
  const [showPdf, setShowPdf] = useState(false);

  const handleDownload = async () => {
    setShowPdf(true);
    const { pdf } = await import("@react-pdf/renderer");
    const { default: ArticlePDF } = await import("./ArticlePDF");
    const blob = await pdf(<ArticlePDF />).toBlob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = pdfFilename;
    a.click();
    URL.revokeObjectURL(url);
    setShowPdf(false);
  };

  return (
    <MarkdownArticle
      source={articleSource}
      onDownloadPdf={handleDownload}
      isGeneratingPdf={showPdf}
    />
  );
};

export default ArticleSection;
