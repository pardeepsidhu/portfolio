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
  title: "Pardeep Singh | Portfolio",
  description:
    "Portfolio of Pardeep Singh – Full Stack Developer. Explore projects, skills, experience, and contact information.",
  keywords: [
    "Pardeep Singh",
    "Portfolio",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "TypeScript",
    "Tailwind CSS",
    "Projects",
    "Skills",
    "Experience",
    "Contact",
  ],
  authors: [
    {
      name: "Pardeep Singh",
      url: "https://www.linkedin.com/in/pardeep-singh-85848a2b1",
    },
  ],
  creator: "Pardeep Singh",
  
 
  icons: {
    icon: "/Logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
