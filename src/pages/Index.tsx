import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import { blogPosts } from "@/content/blog/posts";
import { microPosts } from "@/content/microblog/posts";
import { TagList } from "@/components/Tags";

const Index = () => {
  const recentBlogs = blogPosts.slice(0, 3);
  const recentMicros = microPosts.slice(0, 3);

  return (
    <Layout>
      <h1 className="text-4xl font-bold tracking-tight">Content Wind</h1>
      <p className="text-muted-foreground mt-3">
        A small place on the web for blog posts, microblogs and ideas — built with React, TypeScript & Tailwind.
      </p>

      <section className="mt-10">
        <div className="flex items-baseline justify-between mb-4">
          <h2 className="text-xl font-semibold">Recent posts</h2>
          <Link to="/blog" className="text-sm text-accent hover:underline">All posts →</Link>
        </div>
        <ul className="space-y-4">
          {recentBlogs.map((p) => (
            <li key={p.slug} className="group">
              <Link to={`/blog/${p.slug}`} className="block">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-medium group-hover:text-accent transition-colors">{p.title}</h3>
                  <time className="text-xs text-muted-foreground tabular-nums shrink-0">{p.date}</time>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{p.description}</p>
              </Link>
              <div className="mt-2"><TagList slugs={p.tags} /></div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <div className="flex items-baseline justify-between mb-4">
          <h2 className="text-xl font-semibold">Recent microblog</h2>
          <Link to="/microblog" className="text-sm text-accent hover:underline">All micros →</Link>
        </div>
        <ul className="space-y-3">
          {recentMicros.map((m) => (
            <li key={m.id} className="text-sm border-l-2 border-accent/40 pl-3">
              <p>{m.content}</p>
              <time className="text-xs text-muted-foreground">{m.date}</time>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default Index;
