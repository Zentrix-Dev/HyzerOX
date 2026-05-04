import React, { useState } from 'react';
import { useAppContext } from '../contexts/AppContext';

export default function CookieBanner() {
  const { cookieConsent, saveConsent } = useAppContext();
  const [showModal, setShowModal] = useState(false);
  const [prefs, setPrefs] = useState({ essential: true, analytics: false, preferences: false });

  if (cookieConsent && !showModal) return null;

  const handleAcceptAll = () => saveConsent({ essential: true, analytics: true, preferences: true });
  const handleReject = () => saveConsent({ essential: true, analytics: false, preferences: false });
  const handleSave = () => { saveConsent(prefs); setShowModal(false); };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="max-w-4xl mx-auto bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border shadow-2xl rounded-lg p-6">
        {!showModal ? (
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-light-muted dark:text-dark-muted">
              We use cookies to improve your experience and for analytics. Read our <a href="/cookies" className="text-accent underline">Cookie Policy</a>.
            </p>
            <div className="flex gap-2 shrink-0">
              <button onClick={() => setShowModal(true)} className="px-4 py-2 text-sm text-light-text dark:text-dark-text border border-light-border dark:border-dark-border rounded hover:bg-light-surface2 dark:hover:bg-dark-surface2 transition">Manage</button>
              <button onClick={handleReject} className="px-4 py-2 text-sm text-light-text dark:text-dark-text border border-light-border dark:border-dark-border rounded hover:bg-light-surface2 dark:hover:bg-dark-surface2 transition">Reject Non-Essential</button>
              <button onClick={handleAcceptAll} className="px-4 py-2 text-sm text-white bg-accent rounded hover:bg-accent/90 transition">Accept All</button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-light-text dark:text-dark-text">Cookie Preferences</h3>
            <div className="space-y-2 text-light-text dark:text-dark-text">
              <label className="flex items-center gap-2"><input type="checkbox" checked disabled className="accent-accent" /> Essential (Required)</label>
              <label className="flex items-center gap-2"><input type="checkbox" checked={prefs.analytics} onChange={(e) => setPrefs({...prefs, analytics: e.target.checked})} className="accent-accent" /> Analytics & Performance</label>
              <label className="flex items-center gap-2"><input type="checkbox" checked={prefs.preferences} onChange={(e) => setPrefs({...prefs, preferences: e.target.checked})} className="accent-accent" /> Personalization</label>
            </div>
            <button onClick={handleSave} className="mt-4 px-6 py-2 text-sm text-white bg-accent rounded hover:bg-accent/90 transition">Save Preferences</button>
          </div>
        )}
      </div>
    </div>
  );
}
