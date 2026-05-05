"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useCurrency } from "@/contexts/CurrencyContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { currency, setCurrency } = useCurrency();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Products", href: "/products" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-surface/80 backdrop-blur-md border-b border-border py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          {/* Dark Mode Logo (White logo) */}
          <div className="hidden dark:block">
            <Image 
              src="/public/logos/hyzerox-white.png" 
              alt="HyzerOX" 
              width={160} 
              height={40} 
              className="object-contain h-8 w-auto" 
              priority 
            />
          </div>
          {/* Light Mode Logo (Black logo) */}
          <div className="block dark:hidden">
            <Image 
              src="/public/logos/hyzerox-black.png" 
              alt="HyzerOX" 
              width={160} 
              height={40} 
              className="object-contain h-8 w-auto" 
              priority 
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-medium text-textMuted hover:text-primary transition-colors">
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          <select 
            value={currency} 
            onChange={(e) => setCurrency(e.target.value)}
            className="bg-transparent text-sm font-medium text-textMain border-none focus:ring-0 cursor-pointer outline-none"
          >
            {["USD", "EUR", "GBP", "INR", "CAD", "AUD"].map(c => <option key={c} value={c} className="bg-surface">{c}</option>)}
          </select>

          {mounted && (
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-2 rounded-full hover:bg-elevated transition-colors" aria-label="Toggle Theme">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div key={theme} initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }} transition={{ duration: 0.3 }}>
                  {theme === "dark" ? <Moon className="w-5 h-5 text-textMain" /> : <Sun className="w-5 h-5 text-textMain" />}
                </motion.div>
              </AnimatePresence>
            </button>
          )}

          <Link href="/pricing" className="bg-primary hover:bg-opacity-80 text-background px-5 py-2 rounded-md font-semibold text-sm transition-all">
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-textMain" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-surface border-b border-border shadow-xl md:hidden flex flex-col p-6 gap-4"
          >
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} onClick={() => setMobileOpen(false)} className="text-lg font-medium text-textMain">
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
              }
            
