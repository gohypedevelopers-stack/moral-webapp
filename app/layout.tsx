import "./globals.css";
import type { Metadata } from "next";
import { AppShell } from "@/components/AppShell";

export const metadata: Metadata = {
  title: "MORAL - Wear Your Values",
  description: "Editorial Next.js storefront for MORAL.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
