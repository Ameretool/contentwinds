import { parseFrontmatter } from "@/lib/frontmatter";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  content: string;
}

// Vite glob：自动加载 src/content/blog/ 下所有 .md 为原始字符串
// 新增文章 = 在该目录下新建一个 .md 文件即可
const modules = import.meta.glob("./*.md", { query: "?raw", import: "default", eager: true }) as Record<string, string>;

export const blogPosts: BlogPost[] = Object.entries(modules)
  .map(([path, raw]) => {
    const { data, content } = parseFrontmatter(raw);
    // 文件名（不含扩展名）作为 slug
    const slug = path.split("/").pop()!.replace(/\.md$/, "");
    return {
      slug,
      title: (data.title as string) ?? slug,
      date: (data.date as string) ?? "1970-01-01",
      description: (data.description as string) ?? "",
      tags: (data.tags as string[]) ?? [],
      content,
    };
  })
  .sort((a, b) => b.date.localeCompare(a.date));

export const getBlogPost = (slug: string) => blogPosts.find((p) => p.slug === slug);
