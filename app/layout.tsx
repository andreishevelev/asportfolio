import type { Metadata } from "next";
import { inter } from "@/app/ui/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: "Behind The Fader | Freelance Audio & Video Engineer",
  description:
    "Professional freelance support for live sound mixing, PA tuning, AV system design, video broadcasting, and audio-visual equipment rental. Serving churches, clubs, production companies, restaurants, and events.",
  keywords: [
    "freelance audio engineer",
    "freelance video engineer",
    "PA system tuning",
    "live sound mixing",
    "church AV support",
    "AV equipment rental",
    "audio equipment rental",
    "video equipment rental",
    "A1 engineer",
    "A2 engineer",
    "sound system installation",
    "video broadcasting",
    "club sound system",
    "restaurant AV setup",
    "Behind the Fader"
  ],
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://behindthefader.com"),
  openGraph: {
    title: "Behind The Fader | Freelance Audio & Video Engineer",
    description:
      "PA tuning, live mixing, AV system design, broadcasting, and AV rentals for churches, venues, events, and businesses.",
    url: "https://behindthefader.com",
    siteName: "Behind The Fader",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Behind The Fader | Freelance Audio & Video Engineer",
    description:
      "Audio and video engineering services for churches, businesses, and live productions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
