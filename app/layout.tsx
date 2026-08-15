import type { Metadata, Viewport } from "next";
import { Instrument_Sans } from "next/font/google";
import { SITE_URL, TAGLINE, WORDMARK } from "@/lib/content";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: WORDMARK,
  description: TAGLINE,
  applicationName: WORDMARK,
  openGraph: {
    title: WORDMARK,
    description: TAGLINE,
    url: SITE_URL,
    siteName: WORDMARK,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: WORDMARK,
    description: TAGLINE,
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
  themeColor: "#070708",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={instrumentSans.variable}>
      <body>{children}</body>
    </html>
  );
}
