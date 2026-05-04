"use client";
import { ShieldCheck } from "lucide-react";

export default function CookiePolicyPage() {
  const triggerConsentBanner = () => {
    localStorage.removeItem("hyzerox_cookie_consent");
    window.location.reload();
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="mb-12">
        <h1 className="font-heading text-4xl font-bold text-textMain mb-4">Cookie Policy</h1>
        <p className="text-textMuted">Learn how we use cookies to power your hosting experience.</p>
      </div>

      <div className="space-y-12">
        {/* Strictly Necessary */}
        <section>
          <h2 className="text-2xl font-bold text-textMain mb-4 flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-primary" /> Strictly Necessary
          </h2>
          <div className="overflow-x-auto glass-panel rounded-xl">
            <table className="w-full text-left text-sm text-textMuted">
              <thead className="text-textMain bg-elevated border-b border-border">
                <tr><th className="p-4">Name</th><th className="p-4">Purpose</th><th className="p-4">Duration</th></tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-4 font-mono text-xs">hyzerox_session</td>
                  <td className="p-4">Maintains your authenticated control panel session.</td>
                  <td className="p-4">Session</td>
                </tr>
                <tr>
                  <td className="p-4 font-mono text-xs">theme, hyzerox_currency</td>
                  <td className="p-4">Persists your UI preferences across pages.</td>
                  <td className="p-4">1 Year</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Analytics & Marketing Tables can follow the same structure... */}

        <section className="glass-panel p-8 rounded-xl border-primary/20 text-center">
          <h3 className="text-xl font-bold text-textMain mb-2">Update Your Preferences</h3>
          <p className="text-textMuted mb-6 text-sm max-w-lg mx-auto">You can change your consent settings at any time. Clicking the button below will reset your preferences and re-open the consent dialogue.</p>
          <button onClick={triggerConsentBanner} className="bg-elevated hover:bg-primary hover:text-background text-textMain border border-border px-6 py-3 rounded-md font-medium transition-colors">
            Manage Cookie Settings
          </button>
        </section>
      </div>
    </div>
  );
}
