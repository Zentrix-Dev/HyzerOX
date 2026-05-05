"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  Server, Cuboid, Bot, Gamepad2, Shield, Zap, 
  ArrowRight, Globe, MessageSquare, X, Send 
} from "lucide-react";

// Animation Variants
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
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="flex flex-col items-center overflow-hidden relative">
      
      {/* 1. HERO SECTION */}
      <section className="w-full max-w-7xl mx-auto px-6 py-24 md:py-32 text-center relative min-h-[70vh] flex flex-col justify-center">
        {/* Animated Watermark */}
        <motion.div 
          className="absolute inset-0 z-[-1] flex items-center justify-center pointer-events-none opacity-[0.02] dark:opacity-5"
          animate={{ rotate: 360, scale: [1, 1.05, 1] }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        >
          <span className="font-heading text-[15rem] md:text-[25rem] font-bold tracking-tighter text-textMain">HX</span>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10">
          <motion.div variants={itemVariants} className="inline-block mb-4 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-semibold tracking-wide">
            Next-Generation Cloud Infrastructure
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-textMain tracking-tight">
            Forge Your <br className="hidden md:block" />
            <span className="text-cyan-400">
              Cloud Here!.
            </span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-textMuted max-w-2xl mx-auto mb-10 leading-relaxed">
            Enterprise-grade VPS, Minecraft, and Discord hosting. Uncompromised performance powered by NVMe storage and high-clock processors.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/products" className="group relative px-8 py-3.5 bg-cyan-500 text-black font-bold rounded-md overflow-hidden transition-all hover:scale-105 hover:bg-cyan-400 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.5)]">
              <span className="relative z-10 flex items-center gap-2">
                Explore Plans <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <button className="px-8 py-3.5 border border-border text-textMain font-bold rounded-md hover:border-cyan-500/50 hover:bg-elevated transition-all">
              View System Status
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. TECH STACK MARQUEE */}
      <section className="w-full border-y border-border bg-surface/50 backdrop-blur-sm py-6 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center gap-6 md:gap-12 opacity-80">
          <p className="text-sm font-bold text-textMuted tracking-widest uppercase whitespace-nowrap shrink-0">
            Powered By
          </p>
          
          <div 
            className="relative flex overflow-hidden w-full"
            style={{ WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
          >
            <motion.div 
              className="flex items-center gap-8 md:gap-12 whitespace-nowrap min-w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 25, ease: "linear", repeat: Infinity }}
            >
              {[
                "AMD Ryzen™", "NVMe Gen4", "DDoS Guard", "Folia", "Pterodactyl", "Linux",
                "AMD Ryzen™", "NVMe Gen4", "DDoS Guard", "Folia", "Pterodactyl", "Linux"
              ].map((tech, i) => (
                <div key={i} className="flex items-center gap-8 md:gap-12">
                  <span className="text-textMain font-heading font-bold text-lg md:text-xl tracking-wide">
                    {tech}
                  </span>
                  <div className="w-[2px] h-6 bg-border rotate-12" />
                </div>
              ))}
            </motion.div>
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
                    className="glass-panel p-8 rounded-2xl flex flex-col h-full relative overflow-hidden group hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.15)]">
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-elevated border border-border rounded-xl flex items-center justify-center mb-6 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10 transition-colors">
                    <product.icon className="w-7 h-7 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-3 text-textMain group-hover:text-cyan-50 transition-colors">{product.title}</h3>
                  <p className="text-textMuted text-sm leading-relaxed flex-grow">{product.desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 4. GLOBAL NETWORK / LOGO SECTION */}
      <section className="w-full bg-elevated/30 border-y border-border py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-textMain mb-6">Built for <span className="text-cyan-400">Speed</span> & <span className="text-white">Security</span>.</h2>
            <p className="text-textMuted text-lg mb-8">We don't cut corners. Every node on our network is equipped with enterprise-grade hardware to ensure your projects never bottleneck.</p>
            
            <div className="space-y-6">
              {[
                { icon: Zap, title: "Extreme Clock Speeds", desc: "Single-thread dominance perfect for heavy game servers." },
                { icon: Shield, title: "480Gbps DDoS Mitigation", desc: "Automated traffic filtering keeps you online during attacks." },
                { icon: Globe, title: "Premium Tier-1 Transit", desc: "Optimized routing guarantees the lowest possible latency." }
              ].map((feat, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="mt-1 bg-cyan-500/10 border border-cyan-500/20 p-2 rounded-lg"><feat.icon className="w-5 h-5 text-cyan-400" /></div>
                  <div>
                    <h4 className="text-textMain font-bold">{feat.title}</h4>
                    <p className="text-textMuted text-sm">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Theme-Dynamic Logo Display */}
          <motion.div 
            className="relative h-[400px] glass-panel rounded-2xl flex items-center justify-center overflow-hidden border-cyan-500/20 group"
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            {/* Cyan Glow background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Dark Mode Logo */}
            <img 
              src="/logos/hyzerox-black.png" 
              alt="HyzerOX" 
              className="w-3/5 max-w-[280px] object-contain hidden dark:block drop-shadow-[0_0_25px_rgba(255,255,255,0.15)] group-hover:scale-105 transition-transform duration-700 relative z-10" 
            />
            
            {/* Light Mode Logo */}
            <img 
              src="/logos/hyzerox-white.png" 
              alt="HyzerOX" 
              className="w-3/5 max-w-[280px] object-contain block dark:hidden drop-shadow-[0_0_25px_rgba(0,0,0,0.15)] group-hover:scale-105 transition-transform duration-700 relative z-10" 
            />
          </motion.div>
        </div>
      </section>

      {/* 5. STATS BAR */}
      <section className="w-full max-w-7xl mx-auto px-6 py-24">
        <motion.div 
          className="glass-panel border-cyan-500/20 rounded-3xl p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative overflow-hidden"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500" />
          
          {[
            { value: "10,000+", label: "Servers Deployed" },
            { value: "99.9%", label: "Uptime SLA" },
            { value: "24/7", label: "Expert Support" },
            { value: "15+", label: "Global Locations" }
          ].map((stat, i) => (
            <motion.div key={i} variants={itemVariants} className="flex flex-col items-center justify-center">
              <div className="font-heading text-4xl md:text-5xl font-bold text-textMain mb-2">{stat.value}</div>
              <div className="text-cyan-400 text-sm font-bold uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 6. BOTTOM CTA BANNER */}
      <section className="w-full max-w-5xl mx-auto px-6 pb-24">
        <motion.div 
          className="relative rounded-2xl p-[1px] overflow-hidden group"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-cyan-500 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative bg-surface rounded-2xl p-10 md:p-16 text-center flex flex-col items-center justify-center z-10">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-textMain mb-4">Ready to Launch?</h2>
            <p className="text-textMuted text-lg mb-8 max-w-xl">Join thousands of developers and gamers. Deploy your infrastructure in under 60 seconds.</p>
            <Link href="/pricing" className="px-8 py-4 bg-cyan-500 text-black font-bold rounded-md hover:bg-cyan-400 transition-colors flex items-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              Start Building Now <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 7. NEXARA CHATBOT WIDGET */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        <AnimatePresence>
          {isChatOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="mb-4 w-80 sm:w-96 bg-surface border border-cyan-500/30 shadow-2xl rounded-2xl overflow-hidden flex flex-col"
            >
              {/* Chat Header */}
              <div className="bg-cyan-500 text-black px-4 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-black/10 p-1.5 rounded-full">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm leading-none">Nexara</h4>
                    <span className="text-[10px] uppercase tracking-wider opacity-80 font-semibold">HyzerOX Assistant</span>
                  </div>
                </div>
                <button 
                  onClick={() => setIsChatOpen(false)} 
                  className="hover:bg-black/10 p-1.5 rounded-md transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Chat Body */}
              <div className="p-4 h-72 bg-elevated/30 flex flex-col gap-4 overflow-y-auto">
                {/* Nexara Message */}
                <div className="flex gap-2 items-end max-w-[85%]">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0 mb-1">
                    <Bot className="w-3.5 h-3.5 text-cyan-500" />
                  </div>
                  <div className="bg-surface border border-border p-3 rounded-2xl rounded-bl-sm text-sm text-textMain shadow-sm">
                    Hi! I'm Nexara. How can I help you deploy your infrastructure today?
                  </div>
                </div>
              </div>

              {/* Chat Input */}
              <div className="p-3 border-t border-border bg-surface flex gap-2">
                <input 
                  type="text" 
                  placeholder="Ask Nexara..." 
                  className="flex-grow bg-elevated border border-border rounded-lg px-4 py-2.5 text-sm text-textMain focus:outline-none focus:border-cyan-500/50 transition-colors placeholder:text-textMuted" 
                />
                <button className="bg-cyan-500 text-black p-2.5 rounded-lg hover:bg-cyan-400 transition-colors flex items-center justify-center shrink-0">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Toggle Button */}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="bg-cyan-500 text-black w-14 h-14 rounded-full shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:scale-110 hover:bg-cyan-400 transition-all flex items-center justify-center"
          aria-label="Toggle chat"
        >
          {isChatOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
        </button>
      </div>

    </div>
  );
                 }
              
