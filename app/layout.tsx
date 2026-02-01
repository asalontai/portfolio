import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alex Salontai | Software Engineer",
  description: "Software Engineer at Delta Air Lines. Georgia Tech '26. Building AI-powered tools, full-stack applications, and exploring the world.",
  keywords: ["Alex Salontai", "software engineer", "Delta Air Lines", "Georgia Tech", "developer", "AWS", "React", "Next.js", "AI"],
  authors: [{ name: "Alex Salontai" }],
  openGraph: {
    title: "Alex Salontai | Software Engineer",
    description: "Software Engineer at Delta Air Lines. Georgia Tech '26. Building AI-powered tools and full-stack applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
