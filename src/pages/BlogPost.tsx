import { Layout } from "@/components/Layout";
import { Link, useParams } from "react-router-dom";
import { getBlogPost } from "@/content/blog/posts";
import { TagList } from "@/components/Tags";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft } from "lucide-react";

const BlogPost = () => {
  const { slug = "" } = useParams();
  const post = getBlogPost(slug);

  if (!post) {
    return (
      <Layout>
        <h1 className="text-2xl font-bold">Post not found</h1>
        <Link to="/blog" className="text-accent underline mt-4 inline-block">← Back to blog</Link>
      </Layout>
    );
  }

  return (
    <Layout>
      <Link to="/blog" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-3 w-3" /> Back
      </Link>
      <article className="mt-4">
        <time className="text-xs text-muted-foreground tabular-nums">{post.date}</time>
        <div className="mt-3"><TagList slugs={post.tags} /></div>
        <div className="prose-content">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
