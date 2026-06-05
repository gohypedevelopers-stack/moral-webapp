import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MORAL - Wear Your Values",
  description: "Next.js wrapper for the original MORAL bundled experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
