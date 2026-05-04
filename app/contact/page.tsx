"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MessageSquare, Clock, MapPin, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: POST /api/contact — send email via Resend or SendGrid
    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 5000);
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 relative">
      {/* Success Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 z-50 glass-panel border-primary px-6 py-4 rounded-lg flex items-center gap-3 shadow-lg"
          >
            <CheckCircle className="text-primary w-6 h-6" />
            <span className="text-textMain font-medium">Message sent! We'll reply within 24 hours.</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="text-center mb-16">
        <motion.h1 className="font-heading text-5xl font-bold mb-4 text-textMain" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          Contact <span className="text-primary">Command.</span>
        </motion.h1>
        <p className="text-textMuted text-lg max-w-2xl mx-auto">Need support or have a custom enterprise request? Our engineers are standing by.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Form Form */}
        <motion.div className="glass-panel p-8 rounded-xl" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-textMuted mb-2">Name</label>
                <input required type="text" className="w-full bg-elevated border border-border rounded-md px-4 py-3 text-textMain focus:outline-none focus:border-primary transition-colors" placeholder="Steve..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-textMuted mb-2">Email</label>
                <input required type="email" className="w-full bg-elevated border border-border rounded-md px-4 py-3 text-textMain focus:outline-none focus:border-primary transition-colors" placeholder="steve@example.com" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-textMuted mb-2">Subject</label>
              <select required className="w-full bg-elevated border border-border rounded-md px-4 py-3 text-textMain focus:outline-none focus:border-primary transition-colors appearance-none">
                <option value="support">Technical Support</option>
                <option value="sales">Sales & Upgrades</option>
                <option value="partnership">Partnerships</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-textMuted mb-2">Message</label>
              <textarea required rows={5} className="w-full bg-elevated border border-border rounded-md px-4 py-3 text-textMain focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Describe your issue or request..."></textarea>
            </div>

            <button disabled={isSubmitting} type="submit" className="w-full bg-primary hover:bg-opacity-80 text-background font-semibold py-3 rounded-md transition-colors disabled:opacity-50 flex justify-center items-center">
              {isSubmitting ? <span className="animate-pulse">Transmitting...</span> : "Send Transmission"}
            </button>
          </form>
        </motion.div>

        {/* Info Cards */}
        <motion.div className="space-y-6" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
          <div className="glass-panel p-6 rounded-xl flex items-start gap-4">
            <Mail className="w-6 h-6 text-primary mt-1" />
            <div>
              <h3 className="text-textMain font-bold mb-1">Direct Email</h3>
              <p className="text-textMuted mb-2">For general inquiries and slow-paced communication.</p>
              <a href="mailto:support@hyzerox.com" className="text-primary hover:underline">support@hyzerox.com</a>
            </div>
          </div>
          
          <div className="glass-panel p-6 rounded-xl flex items-start gap-4 border-primary/50 ring-1 ring-primary/20">
            <MessageSquare className="w-6 h-6 text-primary mt-1" />
            <div>
              <h3 className="text-textMain font-bold mb-1">Discord Community</h3>
              <p className="text-textMuted mb-2">Get real-time help from our team and community members.</p>
              <a href="#" className="text-primary hover:underline font-semibold">Join the Server →</a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="glass-panel p-6 rounded-xl text-center">
              <Clock className="w-6 h-6 text-textMuted mx-auto mb-3" />
              <h3 className="text-textMain font-bold mb-1">&lt; 15 Mins</h3>
              <p className="text-textMuted text-sm">Avg. Ticket Response</p>
            </div>
            <div className="glass-panel p-6 rounded-xl text-center">
              <MapPin className="w-6 h-6 text-textMuted mx-auto mb-3" />
              <h3 className="text-textMain font-bold mb-1">Global HQ</h3>
              <p className="text-textMuted text-sm">Distributed Remote</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
