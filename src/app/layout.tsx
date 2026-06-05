import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aryan Vishwakarma | Full-Stack Engineer",
  description: "Full-Stack Engineer specializing in React, TypeScript & Python. Open to full-time roles and freelance contracts.",
  openGraph: {
    title: "Aryan Vishwakarma | Full-Stack Engineer",
    description: "Full-Stack Engineer specializing in React, TypeScript & Python.",
    url: "https://aryanvishwakarma.dev",
    siteName: "Aryan Vishwakarma Portfolio",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
