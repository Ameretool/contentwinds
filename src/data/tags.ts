// 60 colorful tags. Color is a tailwind-friendly hex used inline as a soft chip.
export interface Tag {
  slug: string;
  name: string;
  color: string; // hex
}

const palette = [
  "#ef4444","#f97316","#f59e0b","#eab308","#84cc16","#22c55e",
  "#10b981","#14b8a6","#06b6d4","#0ea5e9","#3b82f6","#6366f1",
  "#8b5cf6","#a855f7","#d946ef","#ec4899","#f43f5e","#64748b",
  "#0f766e","#7c3aed",
];

const names = [
  "JavaScript","TypeScript","React","Vue","Svelte","Nuxt",
  "Next.js","Vite","Tailwind","CSS","HTML","Node.js",
  "Deno","Bun","Python","Rust","Go","Java",
  "Kotlin","Swift","AI","LLM","Prompt","Design",
  "UX","UI","Figma","Color","Typography","Animation",
  "Performance","SEO","Accessibility","Testing","DevOps","Docker",
  "Kubernetes","Cloud","AWS","Vercel","Supabase","Database",
  "PostgreSQL","Redis","GraphQL","REST","API","Security",
  "Open Source","Career","Productivity","Notes","Reading","Music",
  "Travel","Photo","Life","Thoughts","Book","Tutorial",
];

export const tags: Tag[] = names.map((name, i) => ({
  slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
  name,
  color: palette[i % palette.length],
}));

export const getTag = (slug: string) => tags.find(t => t.slug === slug);
