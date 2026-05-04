import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";

// Context Providers
import { ThemeProvider } from "@/contexts/ThemeContext";
import { CurrencyProvider } from "@/contexts/CurrencyContext";

// Global Layout Components
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnnouncementBar from "@/components/layout/AnnouncementBar";

// Global Utility/UI Components
import ScrollProgress from "@/components/ScrollProgress";
import CookieConsentBanner from "@/components/legal/CookieConsentBanner";
import BackToTop from "@/components/ui/BackToTop";

// Font Configuration
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

// Dynamically import the animated background with SSR disabled
const AnimatedBackground = dynamic(() => import("@/components/canvas/AnimatedBackground"), { ssr: false });

export const metadata: Metadata = {
  title: "HyzerOX — Forge Your Infrastructure",
  description: "Enterprise-grade VPS, Minecraft, and Discord hosting. Zero compromise.",
  metadataBase: new URL("https://hyzerox.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased relative min-h-screen flex flex-col overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <CurrencyProvider>
            
            {/* Background & Progress Utilities */}
            <ScrollProgress />
            <AnimatedBackground />
            
            {/* Core Page Wrapper */}
            <div className="flex flex-col min-h-screen z-10 relative">
              <AnnouncementBar />
              <Navbar />
              
              <main className="flex-grow pt-24">
                {children}
              </main>
              
              <Footer />
            </div>

            {/* Floating Elements & Overlays */}
            <CookieConsentBanner />
            <BackToTop />
            
          </CurrencyProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
