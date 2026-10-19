import Link from "next/link";
import { IdeaIndex } from "@/components/idea-index";
import { formatDate } from "@/lib/format";
import { ideas, topics } from "@/lib/ideas";

const desks: Record<(typeof topics)[number], string> = {
  Decisions: "Choose once, then stop re-choosing.",
  Craft: "Make the work smaller and clearer.",
  Product: "Ship something a person can finish.",
  Attention: "Protect the hour the work actually needs.",
};

export default function HomePage() {
  const latest = ideas[0];
  const rest = ideas.slice(1);

  return (
    <>
      <section className="hero">
        <div>
          <p className="eyebrow">Issue {latest.number} · {formatDate(latest.date)}</p>
          <h1>One idea, written so you can use it today.</h1>
          <p className="lede">
            Daily Ideas Lab is a small publication about making, deciding, and paying attention.
            Each entry is one practice, short enough to finish and concrete enough to try before the day ends.
          </p>
          <div className="hero-actions">
            <Link className="button" href={`/ideas/${latest.slug}`}>
              Read today’s idea
            </Link>
            <Link className="text-link" href="/ideas">
              Browse the notebook
            </Link>
          </div>
        </div>
        <article className="lab-card">
          <div className="stamp">
            <span>On the bench</span>
            <span>No. {latest.number}</span>
          </div>
          <h2>
            <Link href={`/ideas/${latest.slug}`}>{latest.title}</Link>
          </h2>
          <p>{latest.dek}</p>
          <div className="card-foot">
            <span>{latest.topic}</span>
            <span>{latest.minutes} min</span>
          </div>
        </article>
      </section>

      <section className="section" aria-labelledby="bench-title">
        <div className="section-head">
          <h2 id="bench-title">Earlier ideas</h2>
          <Link href="/ideas">Full index</Link>
        </div>
        <IdeaIndex ideas={rest} />
      </section>

      <section className="section" aria-labelledby="desks-title">
        <div className="section-head">
          <h2 id="desks-title">Desks</h2>
        </div>
        <div className="desks">
          {topics.map((topic) => (
            <Link key={topic} href={`/ideas?topic=${topic}`}>
              <strong>{topic}</strong>
              <span>{desks[topic]}</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
