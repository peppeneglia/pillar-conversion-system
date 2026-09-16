import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { getPreferences } from "@/lib/server-preferences";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pillar Conversion System",
  description:
    "Progetto personale di portfolio, non commissionato e non affiliato a Pillar Srl.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const { locale, theme } = await getPreferences();

  return (
    <html
      lang={locale}
      data-theme={theme}
      className={`${spaceGrotesk.variable} font-sans h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
