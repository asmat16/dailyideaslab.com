import type { Metadata } from "next";
import Link from "next/link";
import { IdeaIndex } from "@/components/idea-index";
import { ideasByTopic, topics } from "@/lib/ideas";

export const metadata: Metadata = {
  title: "Ideas",
  description: "Every idea published in the Daily Ideas Lab notebook.",
};

export default async function IdeasPage({
  searchParams,
}: {
  searchParams: Promise<{ topic?: string }>;
}) {
  const { topic } = await searchParams;
  const active = topics.find((item) => item.toLowerCase() === topic?.toLowerCase());
  const visible = ideasByTopic(active);

  return (
    <>
      <header className="page-intro">
        <p className="eyebrow">The notebook</p>
        <h1>Ideas</h1>
        <p className="lede">
          Five practices so far. Read one, try it, and leave the rest on the bench until you need them.
        </p>
      </header>
      <div className="filters" aria-label="Filter by desk">
        <Link className="chip" href="/ideas" aria-current={active ? undefined : "page"}>
          All
        </Link>
        {topics.map((item) => (
          <Link
            key={item}
            className="chip"
            href={`/ideas?topic=${item}`}
            aria-current={active === item ? "page" : undefined}
          >
            {item}
          </Link>
        ))}
      </div>
      {visible.length > 0 ? (
        <IdeaIndex ideas={visible} />
      ) : (
        <p className="empty">Nothing on this desk yet.</p>
      )}
    </>
  );
}
