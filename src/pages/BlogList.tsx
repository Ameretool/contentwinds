import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import { blogPosts } from "@/content/blog/posts";
import { TagList } from "@/components/Tags";
import { Pagination } from "@/components/Pagination";
import { usePagination } from "@/hooks/usePagination";

const BlogList = () => {
  const { page, perPage, totalPages, start, end, setPerPage } = usePagination(blogPosts.length, 5);
  const items = blogPosts.slice(start, end);

  return (
    <Layout>
      <h1 className="text-3xl font-bold">Blog</h1>
      <p className="text-muted-foreground mt-2">{blogPosts.length} posts</p>

      <ul className="mt-8 space-y-6">
        {items.map((p) => (
          <li key={p.slug} className="pb-6 border-b border-border/40 last:border-0">
            <Link to={`/blog/${p.slug}`} className="group block">
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-lg font-semibold group-hover:text-accent transition-colors">{p.title}</h2>
                <time className="text-xs text-muted-foreground tabular-nums shrink-0">{p.date}</time>
              </div>
              <p className="text-sm text-muted-foreground mt-1">{p.description}</p>
            </Link>
            <div className="mt-3"><TagList slugs={p.tags} /></div>
          </li>
        ))}
      </ul>

      <Pagination page={page} totalPages={totalPages} basePath="/blog" perPage={perPage} onPerPageChange={setPerPage} />
    </Layout>
  );
};

export default BlogList;
