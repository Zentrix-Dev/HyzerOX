"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isDismissed = sessionStorage.getItem("hyzerox_sale_dismissed");
    if (!isDismissed) {
      setIsVisible(true);
    }
  }, []);

  const dismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem("hyzerox_sale_dismissed", "true");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="bg-primary text-background px-4 py-2 text-sm font-medium relative z-[60] flex items-center justify-center overflow-hidden"
        >
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span>Launch Sale — 30% off all plans. Code: <strong>HYZLAUNCH</strong></span>
          </div>
          <button 
            onClick={dismiss} 
            className="absolute right-4 p-1 hover:bg-background/20 rounded-full transition-colors"
            aria-label="Dismiss announcement"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
