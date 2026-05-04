"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Server, Cuboid, Bot, Gamepad2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 pb-24">
      {/* Hero Section */}
      <section className="py-20 text-center flex flex-col items-center justify-center min-h-[60vh] relative">
        <motion.div 
          className="absolute inset-0 z-[-1] opacity-5 pointer-events-none flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
        >
          {/* Placeholder for Watermark HX Logo */}
          <span className="font-heading text-[20rem] font-bold tracking-tighter">HX</span>
        </motion.div>

        <motion.h1 
          className="font-heading text-5xl md:text-7xl font-bold mb-6 text-textMain"
          initial="hidden" animate="visible" variants={fadeUp}
        >
          Forge Your <span className="text-primary">Infrastructure.</span>
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-textMuted max-w-2xl mb-10"
          initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }}
        >
          Enterprise-grade VPS, Minecraft, and Discord hosting. Zero compromise.
        </motion.p>
        
        <motion.div 
          className="flex gap-4 flex-wrap justify-center"
          initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.4 }}
        >
          <Link href="/products" className="bg-primary hover:bg-opacity-80 text-background px-8 py-3 rounded-md font-semibold transition-all">
            Explore Plans
          </Link>
          <button className="border border-border text-textMain hover:bg-elevated px-8 py-3 rounded-md font-semibold transition-all">
            View Status
          </button>
        </motion.div>
      </section>

      {/* Product Grid */}
      <motion.section 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-20"
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{
          visible: { transition: { staggerChildren: 0.1 } }
        }}
      >
        {[
          { icon: Server, title: "VPS Hosting", desc: "Dedicated resources with NVMe storage." },
          { icon: Cuboid, title: "Minecraft Hosting", desc: "High-performance nodes optimized for modern multi-threading (Folia) and classic forks (Paper, Spigot). Full access for custom universal plugins and automated restart solutions." },
          { icon: Bot, title: "Discord Bots", desc: "24/7 uptime for your community nodes." },
          { icon: Gamepad2, title: "Game Servers", desc: "Low-latency infrastructure globally." }
        ].map((product, i) => (
          <motion.div key={i} variants={fadeUp}>
            <Link href={`/products/${product.title.toLowerCase().replace(' ', '-')}`} 
                  className="glass-panel p-6 rounded-xl flex flex-col h-full hover:border-primary transition-colors group">
              <product.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading text-xl font-bold mb-2 text-textMain">{product.title}</h3>
              <p className="text-textMuted text-sm flex-grow">{product.desc}</p>
            </Link>
          </motion.div>
        ))}
      </motion.section>

      {/* Stats Bar */}
      <motion.section 
        className="glass-panel rounded-2xl p-8 my-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
      >
        {[
          { value: "10,000+", label: "Servers Deployed" },
          { value: "99.9%", label: "Uptime SLA" },
          { value: "24/7", label: "Expert Support" },
          { value: "15+", label: "Global Locations" }
        ].map((stat, i) => (
          <div key={i}>
            <div className="font-mono text-3xl font-bold text-primary mb-2">{stat.value}</div>
            <div className="text-textMuted text-sm font-medium uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </motion.section>
    </div>
  );
}
