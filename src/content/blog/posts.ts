export interface BlogPost {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  description: string;
  tags: string[]; // tag slugs
  content: string; // markdown
}

const lorem = (title: string) => `# ${title}

Welcome to this article. This post explores ideas, patterns and thoughts on the topic.

## Introduction

Writing is thinking. The web is a place to share what we learn — small notes, long essays, half-finished ideas.

## Main Section

- Point one with **bold** emphasis
- Point two with \`inline code\`
- Point three with a [link](https://example.com)

\`\`\`js
function hello() {
  console.log("hello, world");
}
\`\`\`

> A quote that captures the essence of the post.

## Closing

Thanks for reading. Subscribe via RSS or follow on social to get the next one.
`;

const titles = [
  "Building a Personal Site in 2026",
  "Why I Switched to Vite",
  "The Quiet Power of Plain Text",
  "Tailwind: Three Years In",
  "Designing for Calm",
  "Notes on Reading More",
  "The Joy of Small Tools",
  "From Markdown to Magic",
  "Server Components, A Year Later",
  "How I Take Notes",
  "On Owning Your Content",
  "The Art of the Microblog",
  "What Makes a Good Tag",
  "Less JavaScript, Please",
  "Color Systems That Scale",
  "Typography for Reading",
  "Dark Mode Done Right",
  "Static Sites Are Underrated",
  "AI as a Writing Partner",
  "Shipping Slowly",
];

const tagPool = [
  ["react","typescript","tailwind"],
  ["vite","javascript","performance"],
  ["notes","thoughts","life"],
  ["tailwind","css","design"],
  ["design","ux","calm" as string].slice(0,2),
  ["reading","book","life"],
  ["productivity","tutorial"],
  ["html","css","tutorial"],
  ["react","next-js"],
  ["notes","productivity"],
  ["open-source","thoughts"],
  ["life","thoughts"],
  ["design","ui"],
  ["javascript","performance"],
  ["color","design","ui"],
  ["typography","design"],
  ["css","ui","accessibility"],
  ["devops","cloud","vercel"],
  ["ai","llm","prompt"],
  ["career","life"],
];

export const blogPosts: BlogPost[] = titles.map((title, i) => {
  const year = 2024 + (i % 3);
  const month = ((i * 3) % 12) + 1;
  const day = ((i * 5) % 27) + 1;
  const date = `${year}-${String(month).padStart(2,"0")}-${String(day).padStart(2,"0")}`;
  return {
    slug: title.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""),
    title,
    date,
    description: `A short post about ${title.toLowerCase()}.`,
    tags: tagPool[i] ?? ["thoughts"],
    content: lorem(title),
  };
}).sort((a,b) => b.date.localeCompare(a.date));

export const getBlogPost = (slug: string) => blogPosts.find(p => p.slug === slug);
