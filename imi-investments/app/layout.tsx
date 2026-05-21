import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const SITE_URL = "https://imiinvestments.co.uk";

export const metadata: Metadata = {
  title: "IMIinvestments | Guaranteed Rent for Landlords",
  description:
    "IMIinvestments partners with private landlords to provide council-backed social housing. Guaranteed monthly rent, zero fees, no maintenance hassle.",

  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },

  openGraph: {
    title: "IMIinvestments | Guaranteed Rent for Landlords",
    description:
      "IMIinvestments partners with private landlords to provide council-backed social housing. Guaranteed monthly rent, zero fees, no maintenance hassle.",
    url: SITE_URL,
    siteName: "IMIinvestments",
    images: [
      {
        url: `${SITE_URL}/logo.png`,
        width: 1200,
        height: 630,
        alt: "IMIinvestments — Guaranteed Rent for Landlords",
      },
    ],
    type: "website",
    locale: "en_GB",
  },

  twitter: {
    card: "summary_large_image",
    title: "IMIinvestments | Guaranteed Rent for Landlords",
    description:
      "IMIinvestments partners with private landlords to provide council-backed social housing. Guaranteed monthly rent, zero fees, no maintenance hassle.",
    images: [`${SITE_URL}/logo.png`],
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
      className={`${playfair.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
