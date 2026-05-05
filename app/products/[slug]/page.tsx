"use client";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { Check, Cpu, HardDrive, Zap, Globe, Server } from "lucide-react";
import { useCurrency } from "@/contexts/CurrencyContext";

// The Product Database
const productData = {
  "vps": {
    title: "VPS Hosting",
    desc: "KVM-based virtual private servers with guaranteed dedicated resources and full root access.",
    features: ["Full Root Access", "Dedicated IPv4 Address", "Custom ISO Uploads", "99.9% Uptime SLA", "Instant Provisioning", "Unmetered Bandwidth"],
    tiers: [
      { name: "Basic", ram: "2GB", cpu: "1 vCore", disk: "40GB NVMe", price: 5.00 },
      { name: "Standard", ram: "4GB", cpu: "2 vCores", disk: "80GB NVMe", price: 10.00, popular: true },
      { name: "Advanced", ram: "8GB", cpu: "4 vCores", disk: "160GB NVMe", price: 20.00 },
    ]
  },
  "minecraft": {
    title: "Minecraft Servers",
    desc: "Unrivaled single-thread performance combined with seamless cross-platform support.",
    features: ["480Gbps DDoS Protection", "Full FTP & MySQL Access", "Automated Daily Backups", "Paper, Purpur & Folia Support", "Universal Plugin Compatibility", "Custom Restart Integrations"],
    tiers: [
      { name: "Starter", ram: "4GB", cpu: "2 Cores", disk: "50GB NVMe", price: 9.99 },
      { name: "Pro Node", ram: "8GB", cpu: "4 Cores", disk: "100GB NVMe", price: 18.99, popular: true },
      { name: "Enterprise", ram: "16GB", cpu: "6 Cores", disk: "250GB NVMe", price: 34.99 },
    ]
  },
  "discord-bots": {
    title: "Discord Bot Hosting",
    desc: "24/7 uninterrupted uptime for your community nodes. Supports Node.js, Python, and Java.",
    features: ["Always-On Guarantee", "Pterodactyl Control Panel", "1-Click GitHub Pulls", "Integrated Database", "Live Console Access", "Free Subdomain"],
    tiers: [
      { name: "Hobby", ram: "1GB", cpu: "1 vCore", disk: "10GB NVMe", price: 2.99 },
      { name: "Developer", ram: "2GB", cpu: "2 vCores", disk: "25GB NVMe", price: 5.99, popular: true },
      { name: "Community", ram: "4GB", cpu: "2 vCores", disk: "50GB NVMe", price: 9.99 },
    ]
  },
  "game-servers": {
    title: "Game Servers",
    desc: "Low-latency global infrastructure optimized for high-tickrate multiplayer environments.",
    features: ["Global Edge Locations", "Instant Server Setup", "Mod Manager Access", "Game-Specific DDoS Rules", "Scheduled Tasks", "FTP/SFTP Access"],
    tiers: [
      { name: "Palworld", ram: "8GB", cpu: "4 Cores", disk: "80GB NVMe", price: 14.99 },
      { name: "Rust", ram: "10GB", cpu: "4 Cores", disk: "100GB NVMe", price: 19.99, popular: true },
      { name: "CS2 (128 Tick)", ram: "4GB", cpu: "2 Cores", disk: "40GB NVMe", price: 12.99 },
    ]
  }
};

export default function ProductPage({ params }: { params: { slug: string } }) {
  const { formatPrice } = useCurrency();
  
  const data = productData[params.slug as keyof typeof productData];

  if (!data) return notFound();

  const handleCheckout = () => {
    alert("Backend integration coming soon!"); 
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <motion.h1 
          className="font-heading text-5xl font-bold mb-4 text-textMain"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        >
          {data.title}
        </motion.h1>
        <p className="text-textMuted text-lg max-w-2xl mx-auto">{data.desc}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-20">
        {data.features.map((feature, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
            className="flex items-center gap-3 glass-panel p-4 rounded-lg"
          >
            <Check className="text-primary w-5 h-5 flex-shrink-0" />
            <span className="text-sm font-medium text-textMain">{feature}</span>
          </motion.div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {data.tiers.map((tier, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + (i * 0.1) }}
            className={`glass-panel p-8 rounded-xl relative flex flex-col ${tier.popular ? 'border-primary ring-1 ring-primary shadow-[0_0_30px_-10px_var(--accent-primary)]' : ''}`}
          >
            {tier.popular && (
              <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-background px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
                Most Popular
              </span>
            )}
            <h3 className="font-heading text-2xl font-bold text-textMain mb-2">{tier.name}</h3>
            <div className="text-4xl font-bold text-textMain mb-6">
              {formatPrice(tier.price)}<span className="text-lg text-textMuted font-normal">/mo</span>
            </div>

            <ul className="space-y-4 mb-8 flex-grow font-mono text-sm text-textMuted">
              <li className="flex items-center gap-3"><Server className="w-4 h-4 text-primary" /> {tier.ram} RAM</li>
              <li className="flex items-center gap-3"><Cpu className="w-4 h-4 text-primary" /> {tier.cpu}</li>
              <li className="flex items-center gap-3"><HardDrive className="w-4 h-4 text-primary" /> {tier.disk}</li>
              <li className="flex items-center gap-3"><Zap className="w-4 h-4 text-primary" /> 1Gbps Port</li>
              <li className="flex items-center gap-3"><Globe className="w-4 h-4 text-primary" /> Global Locations</li>
            </ul>

            <button onClick={handleCheckout} className={`w-full py-3 rounded-md font-semibold transition-colors ${tier.popular ? 'bg-primary text-background hover:bg-opacity-90' : 'bg-elevated text-textMain hover:bg-opacity-80'}`}>
              Deploy Now
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
  }
  
