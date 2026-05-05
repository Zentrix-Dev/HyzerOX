"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Server, Cuboid, Bot, Gamepad2, Shield, Zap, Globe, ArrowRight } from "lucide-react";

// Animation Variants for staggering
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Home() {
  return (
    <div className="flex flex-col items-center overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="w-full max-w-7xl mx-auto px-6 py-24 md:py-32 text-center relative min-h-[70vh] flex flex-col justify-center">
        {/* Animated Watermark - Adapts to Light/Dark automatically via opacity */}
        <motion.div 
          className="absolute inset-0 z-[-1] flex items-center justify-center pointer-events-none opacity-[0.03] dark:opacity-5"
          animate={{ rotate: 360, scale: [1, 1.05, 1] }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        >
          <span className="font-heading text-[15rem] md:text-[25rem] font-bold tracking-tighter text-textMain">HX</span>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10">
          <motion.div variants={itemVariants} className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-semibold tracking-wide">
            Next-Generation Cloud Infrastructure
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-textMain tracking-tight">
            Forge Your <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Infrastructure.
            </span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-textMuted max-w-2xl mx-auto mb-10 leading-relaxed">
            Enterprise-grade VPS, Minecraft, and Discord hosting. Uncompromised performance powered by NVMe storage and high-clock processors.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/products" className="group relative px-8 py-3.5 bg-primary text-background font-bold rounded-md overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_-5px_var(--accent-primary)]">
              <span className="relative z-10 flex items-center gap-2">
                Explore Plans <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <button className="px-8 py-3.5 border border-border text-textMain font-bold rounded-md hover:bg-elevated transition-all">
              View System Status
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. TECH STACK MARQUEE (New Feature) */}
      <section className="w-full border-y border-border bg-surface/50 backdrop-blur-sm py-8 overflow-hidden flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between gap-8 opacity-70">
          <p className="text-sm font-bold text-textMuted tracking-widest uppercase whitespace-nowrap">Powered By</p>
          <div className="flex gap-12 text-textMain font-heading font-bold text-xl md:text-2xl">
            {/* Placeholders for real SVG logos */}
            <span>AMD Ryzen™</span>
            <span>Cloudflare</span>
            <span>NVMe Gen4</span>
            <span>DDoS Guard</span>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT CATEGORY GRID */}
      <section className="w-full max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-textMain mb-4">Choose Your Deployment</h2>
          <p className="text-textMuted max-w-2xl mx-auto">Purpose-built environments optimized for your specific workload.</p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants}
        >
          {[
            { icon: Server, title: "VPS Hosting", desc: "KVM virtual machines with guaranteed dedicated resources and root access." },
            { icon: Cuboid, title: "Minecraft Hosting", desc: "Optimized for modern multi-threading (Folia) and classic forks (Paper, Spigot)." },
            { icon: Bot, title: "Discord Bots", desc: "24/7 uninterrupted uptime for Node.js, Python, and Java community bots." },
            { icon: Gamepad2, title: "Game Servers", desc: "Low-latency global infrastructure for Rust, Palworld, and CS2." }
          ].map((product, i) => (
            <motion.div key={i} variants={itemVariants} className="h-full">
              <Link href={`/products/${product.title.toLowerCase().replace(' ', '-')}`} 
                    className="glass-panel p-8 rounded-2xl flex flex-col h-full relative overflow-hidden group hover:border-primary transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-elevated rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <product.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-3 text-textMain">{product.title}</h3>
                  <p className="text-textMuted text-sm leading-relaxed">{product.desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 4. GLOBAL NETWORK / FEATURES (New Feature) */}
      <section className="w-full bg-elevated/50 border-y border-border py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-textMain mb-6">Built for <span className="text-primary">Speed</span> & <span className="text-secondary">Security</span>.</h2>
            <p className="text-textMuted text-lg mb-8">We don't cut corners. Every node on our network is equipped with enterprise-grade hardware to ensure your projects never bottleneck.</p>
            
            <div className="space-y-6">
              {[
                { icon: Zap, title: "Extreme Clock Speeds", desc: "Single-thread dominance perfect for heavy game servers." },
                { icon: Shield, title: "480Gbps DDoS Mitigation", desc: "Automated traffic filtering keeps you online during attacks." },
                { icon: Globe, title: "Premium Tier-1 Transit", desc: "Optimized routing guarantees the lowest possible latency." }
              ].map((feat, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="mt-1 bg-primary/10 p-2 rounded-lg"><feat.icon className="w-5 h-5 text-primary" /></div>
                  <div>
                    <h4 className="text-textMain font-bold">{feat.title}</h4>
                    <p className="text-textMuted text-sm">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Abstract Map Graphic */}
          <motion.div 
            className="relative h-[400px] glass-panel rounded-2xl flex items-center justify-center overflow-hidden border-primary/20"
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
            <Globe className="w-64 h-64 text-primary/20 animate-[spin_60s_linear_infinite]" />
            {/* Simulated Server Nodes */}
            <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary rounded-full shadow-[0_0_15px_var(--accent-primary)] animate-pulse" />
            <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-secondary rounded-full shadow-[0_0_15px_var(--accent-secondary)] animate-pulse delay-75" />
            <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-primary rounded-full shadow-[0_0_15px_var(--accent-primary)] animate-pulse delay-150" />
          </motion.div>
        </div>
      </section>

      {/* 5. STATS BAR */}
      <section className="w-full max-w-7xl mx-auto px-6 py-24">
        <motion.div 
          className="glass-panel rounded-3xl p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative overflow-hidden"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
          
          {[
            { value: "10,000+", label: "Servers Deployed" },
            { value: "99.9%", label: "Uptime SLA" },
            { value: "24/7", label: "Expert Support" },
            { value: "15+", label: "Global Locations" }
          ].map((stat, i) => (
            <motion.div key={i} variants={itemVariants} className="flex flex-col items-center justify-center">
              <div className="font-heading text-4xl md:text-5xl font-bold text-textMain mb-2">{stat.value}</div>
              <div className="text-primary text-sm font-bold uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 6. BOTTOM CTA BANNER (New Feature) */}
      <section className="w-full max-w-5xl mx-auto px-6 pb-32">
        <motion.div 
          className="relative rounded-2xl p-[1px] overflow-hidden group"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        >
          {/* Animated Gradient Border */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative bg-surface rounded-2xl p-10 md:p-16 text-center flex flex-col items-center justify-center z-10">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-textMain mb-4">Ready to Launch?</h2>
            <p className="text-textMuted text-lg mb-8 max-w-xl">Join thousands of developers and gamers. Deploy your infrastructure in under 60 seconds.</p>
            <Link href="/pricing" className="px-8 py-4 bg-textMain text-background font-bold rounded-md hover:scale-105 transition-transform flex items-center gap-2 shadow-xl">
              Start Building Now <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
              }
          
