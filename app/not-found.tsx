import Link from "next/link";

export default function NotFound() {
  return (
    <header className="page-intro">
      <p className="eyebrow">Missing page</p>
      <h1>That page is not in the notebook.</h1>
      <p className="lede">The link may be old, or the idea may not be written yet.</p>
      <div className="hero-actions">
        <Link className="button" href="/">
          Back to the lab
        </Link>
        <Link className="text-link" href="/ideas">
          Browse ideas
        </Link>
      </div>
    </header>
  );
}
