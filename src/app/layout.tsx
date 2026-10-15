// app/layout.tsx
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ClientInit from "@/components/ClientInit";
import Link from "next/link";
import { Mail } from "lucide-react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Daksh Vasala — Full Stack Developer",
  description:
    "Daksh Vasala — MERN Stack Developer building scalable full-stack applications with secure authentication and clean APIs. Open to Full Stack, Backend, and SDE-1 roles.",
   icons: {
    icon: "/favicon.ico",
  },
  keywords: ["MERN Stack", "Full Stack Developer", "React", "Node.js", "TypeScript", "Next.js"],
  authors: [{ name: "Daksh Vasala" }],
  openGraph: {
    title: "Daksh Vasala — Full Stack Developer",
    description: "Building scalable full-stack applications with secure authentication and clean APIs.",
    siteName: "Daksh Vasala Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Daksh Vasala — Full Stack Developer",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#0a0a0b] text-[#ededef] font-sans text-[17px] leading-[1.6] antialiased m-0">
        <ClientInit />
        
        {/* ===== SKIP LINK ===== */}
        <Link href="#main" className="absolute left-[-9999px] top-0 bg-[#ededef] text-[#0a0a0b] px-4 py-2.5 rounded-md z-100 focus:left-4 focus:top-4">
          Skip to content
        </Link>

        {/* ===== NAV ===== */}
        <header className="sticky top-0 z-50 bg-[rgba(10,10,11,0.82)] backdrop-blur-[10px] border-b border-[#232327]">
          <div className="max-w-275 mx-auto flex items-center justify-between px-6 py-4">
            <Link href="#top" className="font-bold text-[15px] tracking-[-0.01em]">
              Daksh Vasala
            </Link>
            <nav className="flex gap-8 max-[680px]:hidden" aria-label="Primary">
              <Link href="#projects" data-nav="projects" className="text-[#a1a1a8] text-[14.5px] font-medium pb-0.5 border-b border-transparent hover:text-[#ededef] hover:border-[#ededef] transition-colors">
                Projects
              </Link>
              <Link href="#experience" data-nav="experience" className="text-[#a1a1a8] text-[14.5px] font-medium pb-0.5 border-b border-transparent hover:text-[#ededef] hover:border-[#ededef] transition-colors">
                Experience
              </Link>
              <Link href="#skills" data-nav="skills" className="text-[#a1a1a8] text-[14.5px] font-medium pb-0.5 border-b border-transparent hover:text-[#ededef] hover:border-[#ededef] transition-colors">
                Skills
              </Link>
              <Link href="#contact" data-nav="contact" className="text-[#a1a1a8] text-[14.5px] font-medium pb-0.5 border-b border-transparent hover:text-[#ededef] hover:border-[#ededef] transition-colors">
                Contact
              </Link>
            </nav>
            <Link
              href="mailto:vasaladaksh5@gmail.com"
              className="text-[14px] font-semibold text-[#ededef] border border-[#232327] rounded-[7px] px-3.75 py-2 hover:border-[#3a3a42] hover:bg-[#111113] transition-colors inline-flex items-center gap-2"
            >
              <Mail size={16} />
              Get in touch
            </Link>
          </div>
        </header>

        <main id="main">{children}</main>

        {/* ===== FOOTER ===== */}
        <footer className="border-t border-[#232327] py-7">
          <div className="container max-w-275 mx-auto px-6 text-center text-[13.5px] text-[#6b6b72]">
            <span>Designed &amp; Built by Daksh Vasala</span>
          </div>
        </footer>
      </body>
    </html>
  );
}