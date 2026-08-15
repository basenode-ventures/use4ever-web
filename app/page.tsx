import { TAGLINE, WORDMARK } from "@/lib/content";

export default function HomePage() {
  return (
    <main className="shell">
      <div className="atmosphere" aria-hidden="true" />
      <div className="content">
        <h1 className="wordmark">{WORDMARK}</h1>
        <p className="tagline">{TAGLINE}</p>
      </div>
    </main>
  );
}
