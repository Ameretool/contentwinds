export interface MicroPost {
  id: string;
  date: string; // YYYY-MM-DD
  content: string;
  tags: string[];
}

const snippets = [
  "Just discovered a tiny CSS trick: `text-wrap: balance` on headings. Game changer.",
  "Reading *A Pattern Language* again. Always finds new things to teach me.",
  "Shipped a small refactor today. Removed 200 lines, added clarity.",
  "Coffee + cold morning + empty editor = the best way to start.",
  "TIL: you can `Ctrl+Click` a function in VSCode to peek its definition inline.",
  "Bookmarking is underrated. Tags + search > endless scroll.",
  "The web feels small again when you write your own site.",
  "Switched my note app to plain markdown files. Future-proof, portable, mine.",
  "Rule: every dependency you add is a dependency you must maintain.",
  "Designing for one reader at a time. That reader is usually future me.",
  "RSS isn't dead. It's quiet. That's the point.",
  "Just a microblog post about microblog posts.",
  "Built a 60-tag colorful tag wall. It's surprisingly satisfying to look at.",
  "Old web aesthetic > new web fatigue.",
  "The best tool is the one you'll actually use tomorrow.",
  "Pagination beats infinite scroll for anything you want to remember.",
  "A good archive page is a love letter to your past self.",
  "Static site, dynamic mind.",
  "Try writing 100 words. Then stop. Repeat tomorrow.",
  "Hello from a tiny corner of the internet.",
  "Refactor: same behavior, less surprise.",
  "Light mode in the morning, dark mode at night. Simple as.",
  "If a feature can be a link, make it a link.",
  "Tags are folksonomy. Folders are taxonomy. Use both.",
  "Owning your URLs is the original creator economy.",
];

export const microPosts: MicroPost[] = snippets.map((content, i) => {
  const year = 2025 + (i % 2);
  const month = ((i * 2) % 12) + 1;
  const day = ((i * 3) % 27) + 1;
  return {
    id: `m-${i+1}`,
    date: `${year}-${String(month).padStart(2,"0")}-${String(day).padStart(2,"0")}`,
    content,
    tags: [["thoughts","notes","life","design","tutorial"][i % 5]],
  };
}).sort((a,b) => b.date.localeCompare(a.date));
