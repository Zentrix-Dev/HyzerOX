import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppProvider } from './contexts/AppContext';

import Navbar from './components/Navbar';
import CookieBanner from './components/CookieBanner';
import Home from './pages/Home';
import Pricing from './pages/Pricing';

// Minimal placeholders for remaining routes to ensure app compiles immediately
const PlaceholderPage = ({ title }) => (
  <div className="min-h-screen pt-32 px-4 text-center text-light-text dark:text-dark-text bg-light-bg dark:bg-dark-bg">
    <h1 className="text-4xl font-bold">{title}</h1>
    <p className="mt-4 text-light-muted dark:text-dark-muted">Page content goes here.</p>
  </div>
);

const Footer = () => (
  <footer className="border-t border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface text-light-text dark:text-dark-text py-12">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h2 className="text-xl font-bold mb-4 font-sans tracking-tight">HYZEROX</h2>
        <p className="text-light-muted dark:text-dark-muted text-sm">Power Without Limits.</p>
      </div>
      <div>
        <h4 className="font-bold mb-4">Products</h4>
        <ul className="space-y-2 text-sm text-light-muted dark:text-dark-muted">
          <li><a href="/products">VPS Hosting</a></li>
          <li><a href="/products">Minecraft</a></li>
          <li><a href="/products">Discord Bots</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-4">Company</h4>
        <ul className="space-y-2 text-sm text-light-muted dark:text-dark-muted">
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-4">Legal</h4>
        <ul className="space-y-2 text-sm text-light-muted dark:text-dark-muted">
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/terms">Terms of Service</a></li>
          <li><a href="/cookies">Cookie Policy</a></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-light-border dark:border-dark-border flex flex-col md:flex-row justify-between items-center text-xs text-light-muted dark:text-dark-muted">
      <p>© 2025 HyzerOX. All rights reserved.</p>
      <p className="mt-2 md:mt-0">Powered by Cloudflare</p>
    </div>
  </footer>
);

export default function App() {
  return (
    <HelmetProvider>
      <AppProvider>
        <Router>
          <div className="font-sans min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/products" element={<PlaceholderPage title="Products" />} />
                <Route path="/about" element={<PlaceholderPage title="About Us" />} />
                <Route path="/contact" element={<PlaceholderPage title="Contact" />} />
                <Route path="/privacy" element={<PlaceholderPage title="Privacy Policy" />} />
                <Route path="/terms" element={<PlaceholderPage title="Terms of Service" />} />
                <Route path="/cookies" element={<PlaceholderPage title="Cookie Policy" />} />
              </Routes>
            </main>
            <Footer />
            <CookieBanner />
          </div>
        </Router>
      </AppProvider>
    </HelmetProvider>
  );
}
