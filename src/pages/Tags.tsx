import { Layout } from "@/components/Layout";
import { AllTagsCloud, TagList } from "@/components/Tags";
import { Link, useParams } from "react-router-dom";
import { blogPosts } from "@/content/blog/posts";
import { microPosts } from "@/content/microblog/posts";
import { getTag, tags } from "@/data/tags";
import { Pagination } from "@/components/Pagination";
import { usePagination } from "@/hooks/usePagination";

export const TagsIndex = () => (
  <Layout>
    <h1 className="text-3xl font-bold">Tags</h1>
    <p className="text-muted-foreground mt-2">{tags.length} colorful tags. Pick one.</p>
    <div className="mt-8"><AllTagsCloud /></div>
  </Layout>
);

export const TagPage = () => {
  const { slug = "" } = useParams();
  const tag = getTag(slug);
  const blogs = blogPosts.filter((p) => p.tags.includes(slug));
  const micros = microPosts.filter((p) => p.tags.includes(slug));
  const all = [
    ...blogs.map((b) => ({ kind: "blog" as const, date: b.date, title: b.title, slug: b.slug, content: b.description })),
    ...micros.map((m) => ({ kind: "micro" as const, date: m.date, title: m.content, slug: m.id, content: "" })),
  ].sort((a, b) => b.date.localeCompare(a.date));

  const { page, perPage, totalPages, start, end, setPerPage } = usePagination(all.length, 10);
  const items = all.slice(start, end);

  if (!tag) return <Layout><p>Unknown tag.</p></Layout>;

  return (
    <Layout>
      <Link to="/tags" className="text-sm text-muted-foreground hover:text-foreground">← All tags</Link>
      <h1 className="text-3xl font-bold mt-3" style={{ color: tag.color }}>#{tag.name}</h1>
      <p className="text-muted-foreground mt-2">{all.length} entries</p>

      <ul className="mt-8 space-y-4">
        {items.map((it) => (
          <li key={`${it.kind}-${it.slug}`} className="flex items-baseline gap-3">
            <time className="text-xs text-muted-foreground tabular-nums shrink-0 w-24">{it.date}</time>
            <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-muted text-muted-foreground">
              {it.kind}
            </span>
            {it.kind === "blog" ? (
              <Link to={`/blog/${it.slug}`} className="hover:text-accent transition-colors">{it.title}</Link>
            ) : (
              <span className="text-sm">{it.title}</span>
            )}
          </li>
        ))}
      </ul>

      <Pagination page={page} totalPages={totalPages} basePath={`/tags/${slug}`} perPage={perPage} onPerPageChange={setPerPage} />

      <div className="mt-10 pt-6 border-t border-border/60">
        <h3 className="text-sm font-semibold text-muted-foreground mb-3">Other tags</h3>
        <TagList slugs={tags.filter((t) => t.slug !== slug).slice(0, 20).map((t) => t.slug)} />
      </div>
    </Layout>
  );
};
