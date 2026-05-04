import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useAppContext } from '../contexts/AppContext';

export default function Pricing() {
  const [activeTab, setActiveTab] = useState('VPS');
  const [billing, setBilling] = useState('monthly');
  const { formatPrice } = useAppContext();

  const plans = {
    VPS: [
      { name: 'Starter', price: 5, ram: '2GB', cpu: '1 vCore', storage: '25GB NVMe', bandwidth: '1TB' },
      { name: 'Pro', price: 15, ram: '8GB', cpu: '4 vCore', storage: '100GB NVMe', bandwidth: '4TB', popular: true },
      { name: 'Enterprise', price: 40, ram: '16GB', cpu: '8 vCore', storage: '250GB NVMe', bandwidth: 'Unlimited' },
    ]
  }; // (Expand similarly for Minecraft, Discord Bots)

  const activePlans = plans[activeTab] || plans['VPS'];

  return (
    <div className="pt-32 pb-24 px-4 min-h-screen text-light-text dark:text-dark-text bg-light-bg dark:bg-dark-bg">
      <Helmet><title>Pricing | HyzerOX</title></Helmet>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Simple, transparent pricing</h1>
          <p className="text-light-muted dark:text-dark-muted mb-8">Prices shown are estimates. Charged in USD at checkout.</p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <span className={billing === 'monthly' ? 'font-bold' : ''}>Monthly</span>
            <button 
              onClick={() => setBilling(b => b === 'monthly' ? 'annual' : 'monthly')}
              className="w-14 h-7 bg-accent rounded-full relative transition-colors"
            >
              <div className={`absolute top-1 left-1 bg-white w-5 h-5 rounded-full transition-transform ${billing === 'annual' ? 'translate-x-7' : ''}`} />
            </button>
            <span className={billing === 'annual' ? 'font-bold' : ''}>Annually <span className="text-xs text-green-500 font-bold ml-1">Save 20%</span></span>
          </div>

          {/* Tabs */}
          <div className="inline-flex bg-light-surface dark:bg-dark-surface p-1 rounded-lg border border-light-border dark:border-dark-border mb-12">
            {['VPS', 'Minecraft', 'Discord Bots'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-md font-medium transition ${activeTab === tab ? 'bg-accent text-white' : 'hover:bg-light-surface2 dark:hover:bg-dark-surface2'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {activePlans.map((plan, i) => {
            const finalPrice = billing === 'annual' ? plan.price * 0.8 : plan.price;
            return (
              <div key={i} className={`relative p-8 rounded-2xl bg-light-surface dark:bg-dark-surface border ${plan.popular ? 'border-accent shadow-lg shadow-accent/20' : 'border-light-border dark:border-dark-border'} flex flex-col`}>
                {plan.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</span>}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold">{formatPrice(finalPrice)}</span>
                  <span className="text-light-muted dark:text-dark-muted">/mo</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  <li>✔ {plan.ram} RAM</li>
                  <li>✔ {plan.cpu}</li>
                  <li>✔ {plan.storage}</li>
                  <li>✔ {plan.bandwidth} Bandwidth</li>
                </ul>
                <button className={`w-full py-3 rounded-md font-bold transition ${plan.popular ? 'bg-accent hover:bg-accent/90 text-white' : 'bg-light-surface2 dark:bg-dark-surface2 hover:bg-light-border dark:hover:border-dark-border text-light-text dark:text-dark-text'}`}>
                  Select Plan
                </button>
                {/* // TODO: connect to billing API / Stripe integration */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
