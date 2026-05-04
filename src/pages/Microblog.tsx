import { Layout } from "@/components/Layout";
import { microPosts } from "@/content/microblog/posts";
import { TagList } from "@/components/Tags";
import { Pagination } from "@/components/Pagination";
import { usePagination } from "@/hooks/usePagination";

const Microblog = () => {
  const { page, perPage, totalPages, start, end, setPerPage } = usePagination(microPosts.length, 10);
  const items = microPosts.slice(start, end);

  return (
    <Layout>
      <h1 className="text-3xl font-bold">Microblog</h1>
      <p className="text-muted-foreground mt-2">Short thoughts, often. {microPosts.length} notes.</p>

      <ul className="mt-8 space-y-5">
        {items.map((m) => (
          <li key={m.id} className="border-l-2 border-accent/50 pl-4 py-1">
            <p className="leading-relaxed">{m.content}</p>
            <div className="flex items-center gap-3 mt-2">
              <time className="text-xs text-muted-foreground tabular-nums">{m.date}</time>
              <TagList slugs={m.tags} />
            </div>
          </li>
        ))}
      </ul>

      <Pagination page={page} totalPages={totalPages} basePath="/microblog" perPage={perPage} onPerPageChange={setPerPage} />
    </Layout>
  );
};

export default Microblog;
