"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Server, Cuboid, Bot, Gamepad2, ArrowRight, Zap, Shield, Clock } from "lucide-react";

const products = [
  {
    title: "VPS Hosting",
    slug: "vps",
    desc: "KVM-based virtual private servers with guaranteed dedicated resources and full root access.",
    icon: Server,
    color: "from-blue-500/20 to-transparent",
    iconColor: "text-blue-400"
  },
  {
    title: "Minecraft Servers",
    slug: "minecraft",
    desc: "Unrivaled single-thread performance optimized for modern multi-threading and classic forks.",
    icon: Cuboid,
    color: "from-green-500/20 to-transparent",
    iconColor: "text-green-400"
  },
  {
    title: "Discord Bot Hosting",
    slug: "discord-bots",
    desc: "24/7 uninterrupted uptime for your community nodes. Supports Node.js, Python, and Java.",
    icon: Bot,
    color: "from-indigo-500/20 to-transparent",
    iconColor: "text-indigo-400"
  },
  {
    title: "Game Servers",
    slug: "game-servers",
    desc: "Low-latency global infrastructure optimized for high-tickrate multiplayer environments.",
    icon: Gamepad2,
    color: "from-orange-500/20 to-transparent",
    iconColor: "text-orange-400"
  }
];

export default function ProductsOverview() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      
      {/* Header Section */}
      <div className="text-center mb-20">
        <motion.h1 
          className="font-heading text-5xl md:text-6xl font-bold mb-6 text-textMain tracking-tight"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        >
          Explore Our <span className="text-primary">Infrastructure</span>
        </motion.h1>
        <motion.p 
          className="text-lg text-textMuted max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        >
          Select a product below to view specific pricing tiers, hardware allocations, and enterprise features built directly into the node.
        </motion.p>
      </div>

      {/* Products Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-24">
        {products.map((product, i) => (
          <motion.div 
            key={product.slug}
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2 + (i * 0.1) }}
          >
            {/* Notice the href linking directly to your slugs! */}
            <Link 
              href={`/products/${product.slug}`}
              className="glass-panel p-8 rounded-2xl flex flex-col h-full relative overflow-hidden group hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-xl block"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 flex items-start gap-6">
                <div className="w-16 h-16 bg-elevated rounded-xl flex items-center justify-center shrink-0">
                  <product.icon className={`w-8 h-8 ${product.iconColor}`} />
                </div>
                
                <div className="flex-grow">
                  <h2 className="font-heading text-2xl font-bold text-textMain mb-3 group-hover:text-primary transition-colors">
                    {product.title}
                  </h2>
                  <p className="text-textMuted text-sm leading-relaxed mb-6">
                    {product.desc}
                  </p>
                  
                  <div className="flex items-center text-sm font-bold text-textMain group-hover:text-primary transition-colors">
                    View Plans & Specs <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Global Features Bar */}
      <motion.div 
        className="glass-panel rounded-2xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
      >
        <div className="flex flex-col items-center">
          <Zap className="w-8 h-8 text-primary mb-4" />
          <h3 className="font-bold text-textMain mb-2">Instant Provisioning</h3>
          <p className="text-sm text-textMuted">Servers go live in under 60 seconds after payment confirmation.</p>
        </div>
        <div className="flex flex-col items-center">
          <Shield className="w-8 h-8 text-primary mb-4" />
          <h3 className="font-bold text-textMain mb-2">DDoS Mitigation</h3>
          <p className="text-sm text-textMuted">Always-on Layer 7 filtering included with every deployed node.</p>
        </div>
        <div className="flex flex-col items-center">
          <Clock className="w-8 h-8 text-primary mb-4" />
          <h3 className="font-bold text-textMain mb-2">99.9% Uptime</h3>
          <p className="text-sm text-textMuted">Backed by our enterprise Service Level Agreement.</p>
        </div>
      </motion.div>

    </div>
  );
          }
                      
