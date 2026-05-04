import { parseFrontmatter } from "@/lib/frontmatter";

export interface MicroPost {
  id: string;
  date: string;
  content: string;
  tags: string[];
}

// 新增微博 = 在 src/content/microblog/ 下新建一个 .md 文件
const modules = import.meta.glob("./*.md", { query: "?raw", import: "default", eager: true }) as Record<string, string>;

export const microPosts: MicroPost[] = Object.entries(modules)
  .map(([path, raw]) => {
    const { data, content } = parseFrontmatter(raw);
    const id = path.split("/").pop()!.replace(/\.md$/, "");
    return {
      id,
      date: (data.date as string) ?? "1970-01-01",
      content: content.trim(),
      tags: (data.tags as string[]) ?? [],
    };
  })
  .sort((a, b) => b.date.localeCompare(a.date));
