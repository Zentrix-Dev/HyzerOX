"use client";
import { motion } from "framer-motion";
import { Terminal, Cpu, Shield } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-20">
        <motion.h1 
          className="font-heading text-5xl font-bold mb-6 text-textMain"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        >
          Built by Developers, <br className="hidden md:block" />
          <span className="text-primary">Engineered for Performance.</span>
        </motion.h1>
        <motion.p 
          className="text-lg text-textMuted max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        >
          Founded by engineers tired of restrictive infrastructure limits, HyzerOX is designed from the ground up for maximum throughput. Whether you are coding universal cross-platform tools, designing complex automated restart managers across modern multi-threaded environments, or deploying massive community networks, we provide the uncompromised foundation you need to scale.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: Terminal, title: "Developer First", desc: "Full root access, custom ISOs, and comprehensive API support. Your environment, your rules." },
          { icon: Cpu, title: "Next-Gen Hardware", desc: "Exclusively utilizing NVMe storage arrays and high-clock-speed processors for flawless execution." },
          { icon: Shield, title: "Unshakable Reliability", desc: "Enterprise-grade DDoS mitigation and redundant network paths backing our 99.9% uptime SLA." }
        ].map((value, i) => (
          <motion.div 
            key={i}
            className="glass-panel p-8 rounded-xl text-center"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + (i * 0.1) }}
          >
            <div className="w-16 h-16 bg-elevated rounded-2xl flex items-center justify-center mx-auto mb-6">
              <value.icon className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-heading text-xl font-bold text-textMain mb-3">{value.title}</h3>
            <p className="text-textMuted text-sm leading-relaxed">{value.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
