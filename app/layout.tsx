import type { Metadata } from "next";
import { Familjen_Grotesk, Newsreader } from "next/font/google";
import { Footer, Header } from "@/components/site-chrome";
import "./globals.css";

const display = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
});

const sans = Familjen_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

const description =
  "A public notebook of practical ideas. One clear idea at a time, written so you can use it the same day.";

export const metadata: Metadata = {
  metadataBase: new URL("https://dailyideaslab.com"),
  title: {
    default: "Daily Ideas Lab",
    template: "%s · Daily Ideas Lab",
  },
  description,
  applicationName: "Daily Ideas Lab",
  openGraph: {
    title: "Daily Ideas Lab",
    description,
    url: "https://dailyideaslab.com",
    siteName: "Daily Ideas Lab",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daily Ideas Lab",
    description,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable}`}>
        <a className="skip" href="#content">
          Skip to content
        </a>
        <div className="frame">
          <Header />
          <main id="content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
