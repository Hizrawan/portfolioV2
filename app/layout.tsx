import type { Metadata } from "next";
import { Outfit, Cormorant_Garamond, DM_Mono } from "next/font/google";
import { LocalizationProvider } from "../components/localization-provider";
import VisitProvider from "../components/visit-provider";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-dm-mono",
});

export const metadata: Metadata = {
  title: "Hizrawan's Portfolio",
  description: "Portfolio website built with Next.js",
  icons: {
    icon: "/hizrawan-profile.jpg",
    shortcut: "/hizrawan-profile.jpg",
    apple: "/hizrawan-profile.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${cormorant.variable} ${dmMono.variable}`}
    >
      <body>
        <LocalizationProvider>
          <VisitProvider>{children}</VisitProvider>
        </LocalizationProvider>
      </body>
    </html>
  );
}
