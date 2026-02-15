import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hashir | Web Designer & Developer",
  description: "Portfolio of Hashir - Full Stack Developer specializing in Next.js, React, and AI implementations based in Kerala, India.",
  keywords: ["Web Developer", "Next.js", "Kerala", "Kottakkal", "React", "AI", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-background text-foreground min-h-screen selection:bg-violet-500/30 selection:text-violet-200`}
      >
        <div className="fixed inset-0 -z-10 h-full w-full bg-[#020617] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-violet-500 opacity-20 blur-[100px]"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
