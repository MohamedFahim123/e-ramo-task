import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.chairlocation.com"),
  title: "Chair Location",
  description: "Chair Location homepage clone built with Next.js and TypeScript.",
  alternates: {
    canonical: "/en",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html suppressHydrationWarning data-scroll-behavior="smooth" lang="en">
      <body className="bg-white text-[var(--foreground)]">{children}</body>
    </html>
  );
}
