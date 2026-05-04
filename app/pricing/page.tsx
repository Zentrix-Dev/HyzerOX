"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { useCurrency } from "@/contexts/CurrencyContext";

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);
  const { formatPrice } = useCurrency();

  // Apply 20% discount if annual is selected
  const getPrice = (monthlyPrice: number) => {
    return isAnnual ? monthlyPrice * 0.8 : monthlyPrice;
  };

  const plans = [
    {
      category: "VPS Hosting",
      name: "Standard Cloud",
      price: 10.00,
      features: ["4GB RAM", "2 vCores", "80GB NVMe", "1Gbps Port", "Root Access", "DDoS Protection"],
      missing: ["Dedicated Game Control Panel", "Folia Optimization"]
    },
    {
      category: "Minecraft Hosting",
      name: "Pro Node",
      price: 18.99,
      popular: true,
      features: ["8GB RAM", "4 Dedicated Threads", "100GB NVMe", "Pterodactyl Panel", "DDoS Protection", "Automated Backups", "Folia Optimization"],
      missing: []
    },
    {
      category: "Discord Bots",
      name: "Always-On",
      price: 2.99,
      features: ["1GB RAM", "1 vCore", "10GB NVMe", "Pterodactyl Panel", "Node.js/Python/Java", "DDoS Protection"],
      missing: ["Root Access", "Folia Optimization"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <motion.h1 className="font-heading text-5xl font-bold mb-4 text-textMain" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          Transparent <span className="text-primary">Pricing.</span>
        </motion.h1>
        <p className="text-textMuted text-lg max-w-2xl mx-auto mb-8">Deploy enterprise-grade infrastructure with zero hidden fees.</p>
        
        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4">
          <span className={`text-sm font-medium ${!isAnnual ? "text-textMain" : "text-textMuted"}`}>Monthly</span>
          <button 
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-14 h-7 bg-elevated rounded-full flex items-center px-1 border border-border"
          >
            <motion.div 
              className="w-5 h-5 bg-primary rounded-full"
              animate={{ x: isAnnual ? 28 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </button>
          <span className={`text-sm font-medium flex items-center gap-2 ${isAnnual ? "text-textMain" : "text-textMuted"}`}>
            Annually <span className="bg-primary/20 text-primary text-xs px-2 py-0.5 rounded-full">Save 20%</span>
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
            className={`glass-panel p-8 rounded-xl relative flex flex-col ${plan.popular ? 'border-primary ring-1 ring-primary/50' : ''}`}
          >
            {plan.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-background px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg shadow-primary/20">
                Most Popular
              </span>
            )}
            
            <div className="text-primary text-sm font-bold tracking-wider uppercase mb-1">{plan.category}</div>
            <h3 className="font-heading text-2xl font-bold text-textMain mb-4">{plan.name}</h3>
            
            <div className="mb-6">
              <span className="text-4xl font-bold text-textMain">{formatPrice(getPrice(plan.price))}</span>
              <span className="text-textMuted">/mo</span>
              {isAnnual && <div className="text-xs text-primary mt-1">Billed {formatPrice(plan.price * 12 * 0.8)} yearly</div>}
            </div>

            <button className={`w-full py-3 rounded-md font-semibold transition-colors mb-8 ${plan.popular ? 'bg-primary text-background hover:bg-opacity-90' : 'bg-elevated text-textMain hover:bg-opacity-80'}`}>
              Select Plan
            </button>

            <div className="space-y-4 flex-grow">
              {plan.features.map((feat, j) => (
                <div key={j} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-textMain">{feat}</span>
                </div>
              ))}
              {plan.missing.map((feat, j) => (
                <div key={j} className="flex items-start gap-3 opacity-50">
                  <X className="w-5 h-5 text-textMuted flex-shrink-0" />
                  <span className="text-sm text-textMuted line-through">{feat}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
