"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ShieldAlert, X } from "lucide-react";

type CookieConsent = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
};

export default function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [prefs, setPrefs] = useState({ analytics: false, marketing: false });

  useEffect(() => {
    const consent = localStorage.getItem("hyzerox_cookie_consent");
    if (!consent) {
      // Small delay so it doesn't pop up aggressively the exact millisecond the page loads
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const saveConsent = (analytics: boolean, marketing: boolean) => {
    const data: CookieConsent = {
      necessary: true, // Always true
      analytics,
      marketing,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("hyzerox_cookie_consent", JSON.stringify(data));
    setIsVisible(false);
    setShowPreferences(false);
  };

  const handleAcceptAll = () => saveConsent(true, true);
  
  const handleSavePreferences = () => saveConsent(prefs.analytics, prefs.marketing);

  return (
    <AnimatePresence>
      {isVisible && !showPreferences && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 w-full z-50 p-4 md:p-6"
        >
          <div className="max-w-5xl mx-auto glass-panel p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl border-primary/20">
            <div className="flex-grow">
              <h3 className="text-textMain font-bold mb-2 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-primary" /> Privacy & Cookies
              </h3>
              <p className="text-sm text-textMuted max-w-2xl">
                We use cookies to analyze performance, enhance security, and deliver a better hosting experience. Review our <Link href="/cookies" className="text-primary hover:underline">Cookie Policy</Link> for details.
              </p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <button onClick={() => setShowPreferences(true)} className="flex-1 md:flex-none px-6 py-2 rounded-md border border-border text-textMain hover:bg-elevated transition-colors text-sm font-medium">
                Manage
              </button>
              <button onClick={handleAcceptAll} className="flex-1 md:flex-none px-6 py-2 rounded-md bg-primary hover:bg-opacity-80 text-background transition-colors text-sm font-medium">
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Preferences Modal */}
      {showPreferences && (
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div className="bg-surface border border-border rounded-xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-textMain">Cookie Preferences</h3>
              <button onClick={() => setShowPreferences(false)}><X className="text-textMuted hover:text-textMain" /></button>
            </div>
            
            <div className="space-y-4 mb-8">
              {/* Necessary */}
              <div className="flex items-center justify-between p-4 bg-elevated rounded-lg">
                <div>
                  <h4 className="font-medium text-textMain">Strictly Necessary</h4>
                  <p className="text-xs text-textMuted">Required for core functionality.</p>
                </div>
                <div className="w-10 h-5 bg-primary/50 rounded-full flex items-center px-1"><div className="w-3 h-3 bg-white rounded-full translate-x-5"></div></div>
              </div>

              {/* Analytics */}
              <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div>
                  <h4 className="font-medium text-textMain">Analytics</h4>
                  <p className="text-xs text-textMuted">Help us understand usage patterns.</p>
                </div>
                <button 
                  onClick={() => setPrefs({...prefs, analytics: !prefs.analytics})}
                  className={`w-10 h-5 rounded-full flex items-center px-1 transition-colors ${prefs.analytics ? 'bg-primary' : 'bg-elevated'}`}
                >
                  <div className={`w-3 h-3 bg-white rounded-full transition-transform ${prefs.analytics ? 'translate-x-5' : 'translate-x-0'}`}></div>
                </button>
              </div>
            </div>

            <button onClick={handleSavePreferences} className="w-full bg-primary hover:bg-opacity-80 text-background py-3 rounded-md font-medium transition-colors">
              Save Preferences
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
