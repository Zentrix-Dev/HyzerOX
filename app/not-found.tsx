"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
      <motion.div 
        className="text-[12rem] md:text-[16rem] font-heading font-bold text-primary opacity-10 leading-none select-none absolute"
        animate={{ x: [-5, 5, -5], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 0.2, repeat: Infinity, repeatType: "mirror" }}
      >
        HX
      </motion.div>
      
      <div className="relative z-10">
        <h1 className="font-heading text-6xl md:text-8xl font-bold text-textMain mb-4 relative inline-block">
          404
          {/* Glitch Pseudo-elements in CSS or mapped here. Using basic framing for standard compatibility */}
          <span className="absolute top-0 left-0 -ml-1 text-primary opacity-50 mix-blend-screen animate-pulse">404</span>
          <span className="absolute top-0 left-0 ml-1 text-secondary opacity-50 mix-blend-screen animate-pulse delay-75">404</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-textMain mb-6">Signal Lost</h2>
        <p className="text-textMuted max-w-md mx-auto mb-10">
          The node you are trying to reach has been offline, destroyed, or never existed in this sector.
        </p>
        
        <Link href="/" className="inline-flex items-center gap-2 bg-primary hover:bg-opacity-80 text-background px-8 py-3 rounded-md font-semibold transition-all">
          <Home className="w-5 h-5" /> Return to Base
        </Link>
      </div>
    </div>
  );
}
