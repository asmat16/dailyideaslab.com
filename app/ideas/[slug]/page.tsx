import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Prose } from "@/components/prose";
import { formatDate } from "@/lib/format";
import { getIdea, ideas } from "@/lib/ideas";

export function generateStaticParams() {
  return ideas.map((idea) => ({ slug: idea.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const idea = getIdea(slug);
  if (!idea) return { title: "Idea not found" };
  return {
    title: idea.title,
    description: idea.dek,
    openGraph: { title: idea.title, description: idea.dek, type: "article" },
  };
}

export default async function IdeaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const idea = getIdea(slug);
  if (!idea) notFound();

  return (
    <article className="article">
      <div className="article-layout">
        <aside className="article-meta">
          <span>No. {idea.number}</span>
          <strong>{idea.topic}</strong>
          <span>{formatDate(idea.date)}</span>
          <span>{idea.minutes} min read</span>
          <Link href="/ideas">All ideas</Link>
        </aside>
        <div>
          <p className="eyebrow">{idea.topic}</p>
          <h1>{idea.title}</h1>
          <p className="dek">{idea.dek}</p>
          <Prose blocks={idea.blocks} />
        </div>
      </div>
    </article>
  );
}
