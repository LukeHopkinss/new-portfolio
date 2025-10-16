import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luke Hopkins — Portfolio",
  description: "Engineer • Builder • Creative — Next.js + Tailwind portfolio",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
