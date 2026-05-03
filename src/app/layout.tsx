import type { Metadata } from "next";
import "@/styles/globals.css";
import { Navigation } from "@/components/ui/Navigation";
import { Footer } from "@/components/ui/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { AudioToggle } from "@/components/ui/AudioToggle";
import { LenisProvider } from "@/components/providers/LenisProvider";

export const metadata: Metadata = {
  title: {
    default: "DropShock Digital — Cut from black ice",
    template: "%s | DropShock Digital",
  },
  description:
    "Precision content systems for serious operators. Photo, video, IT/AI. Engineered for teams. Priced for indies. Cut from black ice.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dropshockdigital.com",
    siteName: "DropShock Digital",
    title: "DropShock Digital — Cut from black ice",
    description:
      "Precision content systems for serious operators. Photo, video, IT/AI.",
  },
  twitter: {
    card: "summary_large_image",
    title: "DropShock Digital — Cut from black ice",
    description:
      "Precision content systems for serious operators. Photo, video, IT/AI.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><polygon points='16,2 30,28 2,28' fill='%23FF2E3A'/></svg>"
        />
      </head>
      <body>
        <LenisProvider>
          <div className="noise-overlay" aria-hidden="true" />
          <CustomCursor />
          <AudioToggle />
          <a href="#main-content" className="skip-link">
            Skip to content
          </a>
          <Navigation />
          <main id="main-content">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
