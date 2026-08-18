import type { Metadata, Viewport } from "next";
import { Button } from "@/components/ui/button";
import { SITE_DESCRIPTION, SITE_URL, TAGLINE, WORDMARK } from "@/lib/content";
import { Geist, Montserrat } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
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
      className={`${geistSans.className} ${montserrat.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground">
        <div className="flex min-h-screen flex-col items-center">
          <div className="flex w-full flex-1 flex-col items-center gap-20">
            <nav className="flex h-16 w-full justify-center border-b border-b-foreground/10">
              <div className="flex w-full max-w-7xl items-center justify-between p-3 px-5">
                <Link
                  href="/"
                  className="font-montserrat text-2xl font-semibold text-primary"
                >
                  {WORDMARK}
                </Link>
                <div className="flex items-center gap-x-6">
                  <Button asChild size="lg" className="rounded-full bg-red-500 hover:bg-red-600">
                    <Link href="/cadastro">Lista de espera</Link>
                  </Button>
                </div>
              </div>
            </nav>

            {children}

            <footer className="w-full border-t bg-white py-8">
              <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6">
                <div className="flex items-center gap-8 text-sm text-gray-500">
                  <Link href="/manifesto" className="hover:text-gray-900">
                    Sobre
                  </Link>
                  <Link href="/privacidade" className="hover:text-gray-900">
                    Privacidade
                  </Link>
                  <Link href="/termos" className="hover:text-gray-900">
                    Termos
                  </Link>
                </div>
                <p className="text-xs text-gray-400">
                  © 2026 use4ever. Todos os direitos reservados.
                </p>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
