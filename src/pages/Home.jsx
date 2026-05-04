import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Server, Shield, Zap, Globe2, Cpu, Headphones } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';

export default function Home() {
  return (
    <div className="relative min-h-screen pt-20 overflow-hidden text-light-text dark:text-dark-text bg-light-bg dark:bg-dark-bg transition-colors duration-300">
      <Helmet>
        <title>HyzerOX | Power Without Limits</title>
        <meta name="description" content="Premium cloud hosting, VPS, Minecraft servers, and Discord bot hosting." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center border-b border-light-border dark:border-dark-border">
        <AnimatedBackground />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Power Without <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-highlight-light dark:to-highlight-dark">Limits</span>
          </h1>
          <p className="text-xl md:text-2xl text-light-muted dark:text-dark-muted mb-10">
            Enterprise-grade VPS, lag-free game servers, and 24/7 reliability built for creators and developers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/pricing" className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-md font-bold text-lg transition shadow-[0_0_15px_rgba(124,58,237,0.5)]">
              View Plans
            </Link>
            <Link to="/products" className="bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border hover:bg-light-surface2 dark:hover:bg-dark-surface2 px-8 py-4 rounded-md font-bold text-lg transition">
              Explore Services
            </Link>
          </div>
          <div className="mt-12 inline-flex items-center gap-2 bg-light-surface2/50 dark:bg-dark-surface2/50 px-4 py-2 rounded-full border border-light-border dark:border-dark-border text-sm font-medium">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            All Systems Operational
          </div>
        </div>
      </section>

      {/* Features/Services */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Everything you need to scale</h2>
          <p className="text-light-muted dark:text-dark-muted">Deploy infrastructure globally in seconds.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <Server size={32}/>, title: 'VPS Hosting', desc: 'High-performance NVMe compute instances.' },
            { icon: <Zap size={32}/>, title: 'Minecraft Servers', desc: 'Instant setup with modpack support and DDoS protection.' },
            { icon: <Cpu size={32}/>, title: 'Discord Bot Hosting', desc: 'Keep your bots online 24/7 with dedicated resources.' },
            { icon: <Shield size={32}/>, title: 'DDoS Protection', desc: 'Enterprise-grade mitigation up to 4Tbps standard.' },
            { icon: <Globe2 size={32}/>, title: 'Global Edge Network', desc: 'Low latency guaranteed with our worldwide datacenters.' },
            { icon: <Headphones size={32}/>, title: '24/7 Support', desc: 'Expert support team ready via Discord or tickets.' },
          ].map((feature, i) => (
            <div key={i} className="p-6 rounded-xl bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border hover:-translate-y-1 transition-transform duration-300">
              <div className="text-accent mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-light-muted dark:text-dark-muted">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
