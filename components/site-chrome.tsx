import Link from "next/link";

export function Header() {
  return (
    <header className="mast">
      <div className="mast-brand">
        <Link href="/" className="wordmark">
          Daily Ideas Lab
        </Link>
        <p className="mast-kicker">A public notebook for people who make things</p>
      </div>
      <nav className="mast-nav" aria-label="Primary">
        <Link href="/ideas">Ideas</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="colophon">
      <p>Daily Ideas Lab · dailyideaslab.com</p>
      <p>One practical idea at a time. Written to be used the same day.</p>
    </footer>
  );
}
