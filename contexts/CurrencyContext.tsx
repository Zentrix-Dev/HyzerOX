"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

// TODO: Replace with live exchange rate API call — backend hook here
const RATES: Record<string, number> = {
  USD: 1, EUR: 0.92, GBP: 0.79, INR: 83.5, CAD: 1.36, 
  AUD: 1.53, SGD: 1.34, AED: 3.67, BRL: 4.97, MYR: 4.72
};

const SYMBOLS: Record<string, string> = {
  USD: "$", EUR: "€", GBP: "£", INR: "₹", CAD: "C$", 
  AUD: "A$", SGD: "S$", AED: "د.إ", BRL: "R$", MYR: "RM"
};

type CurrencyContextType = {
  currency: string;
  setCurrency: (curr: string) => void;
  formatPrice: (amountInUSD: number) => string;
};

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState("USD");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("hyzerox_currency");
    if (stored && RATES[stored]) {
      setCurrencyState(stored);
    } else {
      // Auto-detect based on locale
      const locale = navigator.language;
      if (locale.includes("GB")) setCurrencyState("GBP");
      else if (locale.includes("IN")) setCurrencyState("INR");
      else if (locale.includes("EU")) setCurrencyState("EUR");
    }
  }, []);

  const setCurrency = (curr: string) => {
    setCurrencyState(curr);
    localStorage.setItem("hyzerox_currency", curr);
  };

  const formatPrice = (amountInUSD: number) => {
    if (!mounted) return `$${amountInUSD.toFixed(2)}`; // SSR fallback
    const converted = amountInUSD * (RATES[currency] || 1);
    return `${SYMBOLS[currency] || "$"}${converted.toFixed(2)}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) throw new Error("useCurrency must be used within CurrencyProvider");
  return context;
};
