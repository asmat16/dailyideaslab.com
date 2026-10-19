import Link from "next/link";
import { formatDate } from "@/lib/format";
import type { Idea } from "@/lib/ideas";

export function IdeaIndex({ ideas }: { ideas: Idea[] }) {
  return (
    <ol className="index">
      {ideas.map((idea) => (
        <li key={idea.slug}>
          <Link href={`/ideas/${idea.slug}`}>
            <span className="index-no">{idea.number}</span>
            <span className="index-copy">
              <span className="index-title">{idea.title}</span>
              <span className="index-dek">{idea.dek}</span>
            </span>
            <span className="index-meta">
              <span>{idea.topic}</span>
              <span>{formatDate(idea.date)}</span>
            </span>
          </Link>
        </li>
      ))}
    </ol>
  );
}
