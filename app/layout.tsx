import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
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
      <body className={`${sora.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
