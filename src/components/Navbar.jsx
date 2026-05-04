import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X, Globe } from 'lucide-react';
import { useAppContext } from '../contexts/AppContext';

export default function Navbar() {
  const { theme, toggleTheme, currency, setCurrency } = useAppContext();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [announcement, setAnnouncement] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    if(localStorage.getItem('hideAnnouncement')) setAnnouncement(false);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeAnnouncement = () => {
    setAnnouncement(false);
    localStorage.setItem('hideAnnouncement', 'true');
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
  ];

  return (
    <>
      {announcement && (
        <div className="bg-accent text-white text-sm text-center py-2 relative z-50">
          🚀 New: Discord Bot Hosting now available — Launch offer 30% off
          <button onClick={closeAnnouncement} className="absolute right-4 top-2 hover:text-gray-200">
            <X size={16} />
          </button>
        </div>
      )}
      <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-light-bg/80 dark:bg-dark-bg/80 backdrop-blur-md border-b border-light-border dark:border-dark-border shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img 
                src={theme === 'dark' ? '/HyzerOXWhiteLogo.png' : '/HyzerOXBlackLogo.png'} 
                alt="HyzerOX" 
                className="h-10 w-auto object-contain"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.path} className={`font-medium transition-colors ${location.pathname === link.path ? 'text-accent' : 'text-light-text dark:text-dark-text hover:text-accent'}`}>
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <div className="relative group cursor-pointer flex items-center space-x-1 text-sm font-medium text-light-text dark:text-dark-text">
                <Globe size={16} />
                <select 
                  value={currency} 
                  onChange={(e) => setCurrency(e.target.value)}
                  className="bg-transparent outline-none cursor-pointer appearance-none"
                >
                  {['USD', 'EUR', 'GBP', 'INR', 'AUD', 'CAD', 'SGD'].map(c => (
                    <option key={c} value={c} className="text-black">{c}</option>
                  ))}
                </select>
              </div>
              
              <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-light-surface dark:hover:bg-dark-surface2 text-light-text dark:text-dark-text transition">
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              <Link to="/pricing" className="bg-accent hover:bg-accent/90 text-white px-5 py-2 rounded-md font-medium transition">
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setMobileOpen(!mobileOpen)} className="text-light-text dark:text-dark-text">
                {mobileOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileOpen && (
          <div className="md:hidden bg-light-surface dark:bg-dark-surface2 border-b border-light-border dark:border-dark-border">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.path} onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-light-text dark:text-dark-text hover:bg-light-surface2 dark:hover:bg-dark-surface">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
