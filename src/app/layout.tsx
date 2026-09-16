import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { AnalyticsDebugPanel } from "@/components/analytics/AnalyticsDebugPanel";
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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="it"
      className={`${spaceGrotesk.variable} font-sans h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <AnalyticsDebugPanel />
      </body>
    </html>
  );
}
