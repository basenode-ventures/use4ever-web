import type { Metadata, Viewport } from "next";
import { SITE_DESCRIPTION, SITE_URL, TAGLINE, WORDMARK } from "@/lib/content";
import { Fraunces, IBM_Plex_Mono, Sora } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const body = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${WORDMARK} — ${TAGLINE}`,
    template: `%s · ${WORDMARK}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: WORDMARK,
  openGraph: {
    title: WORDMARK,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: WORDMARK,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: WORDMARK,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-white font-body text-ink">
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-40 border-b border-verdigris/10 bg-white/85 backdrop-blur-md">
            <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
              <Link
                href="/"
                className="font-display text-2xl font-medium tracking-tight text-ink"
              >
                use<span className="text-verdigris">4</span>ever
              </Link>
              <Link
                href="/cadastro"
                className="bg-verdigris px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-white transition-colors hover:bg-verdigris-deep"
              >
                Lista de espera
              </Link>
            </nav>
          </header>

          <div className="flex-1">{children}</div>

          <footer className="border-t border-verdigris/10">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-end sm:justify-between">
              <p className="font-display text-3xl text-ink">
                use<span className="text-verdigris">4</span>ever
              </p>
              <div className="flex flex-col gap-4 sm:items-end">
                <div className="flex gap-6 font-mono text-[11px] uppercase tracking-[0.16em] text-mist">
                  <Link href="/manifesto" className="hover:text-verdigris">
                    Sobre
                  </Link>
                  <Link href="/privacidade" className="hover:text-verdigris">
                    Privacidade
                  </Link>
                  <Link href="/termos" className="hover:text-verdigris">
                    Termos
                  </Link>
                </div>
                <p className="font-mono text-[11px] text-mist/80">
                  © 2026 use4ever. Todos os direitos reservados.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
