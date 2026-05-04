import React, { createContext, useState, useEffect, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // --- THEME SYSTEM ---
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  // --- CURRENCY SYSTEM ---
  const rates = { USD: 1, EUR: 0.92, GBP: 0.79, INR: 83.12, AUD: 1.52, CAD: 1.36, SGD: 1.35 };
  const symbols = { USD: '$', EUR: '€', GBP: '£', INR: '₹', AUD: 'A$', CAD: 'C$', SGD: 'S$' };

  const detectCurrency = () => {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (tz.includes('Europe/London')) return 'GBP';
      if (tz.includes('Europe')) return 'EUR';
      if (tz.includes('Asia/Calcutta') || tz.includes('Asia/Kolkata')) return 'INR';
      if (tz.includes('Australia')) return 'AUD';
      if (tz.includes('America/Toronto') || tz.includes('America/Vancouver')) return 'CAD';
      if (tz.includes('Asia/Singapore')) return 'SGD';
      return 'USD';
    } catch { return 'USD'; }
  };

  const [currency, setCurrency] = useState(() => {
    return localStorage.getItem('currency') || detectCurrency();
  });

  useEffect(() => {
    localStorage.setItem('currency', currency);
  }, [currency]);

  const formatPrice = (usdPrice) => {
    const converted = (usdPrice * rates[currency]).toFixed(2);
    return `${symbols[currency]}${converted}`;
  };

  // --- COOKIE CONSENT ---
  const [cookieConsent, setCookieConsent] = useState(() => {
    const saved = localStorage.getItem('cookieConsent');
    return saved ? JSON.parse(saved) : null;
  });

  const saveConsent = (preferences) => {
    const consentObj = { ...preferences, timestamp: new Date().toISOString() };
    localStorage.setItem('cookieConsent', JSON.stringify(consentObj));
    setCookieConsent(consentObj);
  };

  return (
    <AppContext.Provider value={{
      theme, toggleTheme,
      currency, setCurrency, formatPrice, symbols,
      cookieConsent, saveConsent
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
