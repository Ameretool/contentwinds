import { useMemo, useState } from "react";
import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import { blogPosts } from "@/content/blog/posts";
import { microPosts } from "@/content/microblog/posts";
import { Pagination } from "@/components/Pagination";
import { usePagination } from "@/hooks/usePagination";

type Entry = { kind: "blog" | "micro"; date: string; title: string; slug: string };

const Archive = () => {
  const all: Entry[] = useMemo(() => [
    ...blogPosts.map((b) => ({ kind: "blog" as const, date: b.date, title: b.title, slug: b.slug })),
    ...microPosts.map((m) => ({ kind: "micro" as const, date: m.date, title: m.content, slug: m.id })),
  ].sort((a, b) => b.date.localeCompare(a.date)), []);

  const years = useMemo(() => {
    const set = new Set(all.map((e) => e.date.slice(0, 4)));
    return Array.from(set).sort((a, b) => b.localeCompare(a));
  }, [all]);

  const [year, setYear] = useState<string>("all");
  const [month, setMonth] = useState<string>("all");

  const filtered = useMemo(() => all.filter((e) => {
    if (year !== "all" && e.date.slice(0, 4) !== year) return false;
    if (month !== "all" && e.date.slice(5, 7) !== month) return false;
    return true;
  }), [all, year, month]);

  const { page, perPage, totalPages, start, end, setPerPage } = usePagination(filtered.length, 20);
  const items = filtered.slice(start, end);

  // Group by year-month for display
  const grouped = items.reduce<Record<string, Entry[]>>((acc, e) => {
    const k = e.date.slice(0, 7);
    (acc[k] ||= []).push(e);
    return acc;
  }, {});

  return (
    <Layout>
      <h1 className="text-3xl font-bold">Archive</h1>
      <p className="text-muted-foreground mt-2">Browse {all.length} entries by year and month.</p>

      <div className="mt-6 flex flex-wrap gap-3">
        <label className="flex items-center gap-2 text-sm">
          <span className="text-muted-foreground">Year</span>
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="bg-background border border-border rounded-md px-2 py-1 text-sm"
          >
            <option value="all">All</option>
            {years.map((y) => <option key={y} value={y}>{y}</option>)}
          </select>
        </label>
        <label className="flex items-center gap-2 text-sm">
          <span className="text-muted-foreground">Month</span>
          <select
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="bg-background border border-border rounded-md px-2 py-1 text-sm"
          >
            <option value="all">All</option>
            {Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, "0")).map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-8 space-y-8">
        {Object.entries(grouped).map(([ym, entries]) => (
          <section key={ym}>
            <h2 className="text-sm font-semibold text-muted-foreground mb-3 tabular-nums">{ym}</h2>
            <ul className="space-y-2">
              {entries.map((e) => (
                <li key={`${e.kind}-${e.slug}`} className="flex items-baseline gap-3">
                  <time className="text-xs text-muted-foreground tabular-nums shrink-0 w-20">{e.date}</time>
                  <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-muted text-muted-foreground shrink-0">
                    {e.kind}
                  </span>
                  {e.kind === "blog" ? (
                    <Link to={`/blog/${e.slug}`} className="hover:text-accent transition-colors truncate">{e.title}</Link>
                  ) : (
                    <span className="text-sm truncate">{e.title}</span>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}
        {items.length === 0 && <p className="text-muted-foreground text-sm">No entries match.</p>}
      </div>

      <Pagination page={page} totalPages={totalPages} basePath="/archive" perPage={perPage} onPerPageChange={setPerPage} />
    </Layout>
  );
};

export default Archive;
