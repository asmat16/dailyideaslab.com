import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "What Daily Ideas Lab publishes, and why the notes stay short.",
};

export default function AboutPage() {
  return (
    <>
      <header className="page-intro">
        <p className="eyebrow">The lab</p>
        <h1>A notebook, kept in public.</h1>
      </header>
      <div className="about-grid">
        <div className="prose">
          <p>
            Daily Ideas Lab publishes one practical idea at a time. The subjects are ordinary and
            useful: how to decide, how to ship a small true version, how to keep a list that still
            means something next month, how to protect an hour of attention.
          </p>
          <h2>What belongs here</h2>
          <p>
            An entry has to be usable the day it is read. It names a situation, offers a practice,
            and stops. There is no product roundup, no borrowed biography, and no article that
            exists only to rank for a phrase.
          </p>
          <h2>What this site is</h2>
          <p>
            The notebook lives at dailyideaslab.com. It is a small Next.js site, kept in a GitHub
            repository and served by Vercel, so a new idea is a commit rather than a hosting chore.
          </p>
        </div>
        <aside className="note">
          <p>
            <strong>How to use it.</strong>
          </p>
          <p>Pick the latest idea. Try the practice on work you already have. Come back when you want another.</p>
          <p>Four desks organize the notebook: Decisions, Craft, Product, and Attention.</p>
        </aside>
      </div>
    </>
  );
}
