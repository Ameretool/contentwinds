import { Link } from "react-router-dom";
import { tags as allTags, getTag } from "@/data/tags";

export const TagChip = ({ slug }: { slug: string }) => {
  const t = getTag(slug);
  if (!t) return null;
  return (
    <Link
      to={`/tags/${t.slug}`}
      className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full border transition-transform hover:scale-105"
      style={{
        color: t.color,
        backgroundColor: `${t.color}1a`,
        borderColor: `${t.color}55`,
      }}
    >
      #{t.name}
    </Link>
  );
};

export const TagList = ({ slugs }: { slugs: string[] }) => (
  <div className="flex flex-wrap gap-1.5">
    {slugs.map((s) => <TagChip key={s} slug={s} />)}
  </div>
);

export const AllTagsCloud = () => (
  <div className="flex flex-wrap gap-2">
    {allTags.map((t) => <TagChip key={t.slug} slug={t.slug} />)}
  </div>
);
