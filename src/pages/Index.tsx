import { Layout } from "@/components/Layout";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { parseFrontmatter } from "@/lib/frontmatter";
// 主页内容来源 —— 直接编辑 src/content/home.md 即可更新主页
import homeRaw from "@/content/home.md?raw";

const Index = () => {
  const { data, content } = parseFrontmatter(homeRaw);
  const title = (data.title as string) ?? "";
  const subtitle = (data.subtitle as string) ?? "";

  return (
    <Layout>
      {title && <h1 className="text-4xl font-bold tracking-tight">{title}</h1>}
      {subtitle && <p className="text-muted-foreground mt-3">{subtitle}</p>}
      <div className="prose-content mt-6">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>
    </Layout>
  );
};

export default Index;
