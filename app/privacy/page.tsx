export const metadata = {
  title: "Privacy Policy — HyzerOX Hosting",
  description: "Privacy policy and data handling procedures.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 flex flex-col md:flex-row gap-12 relative">
      {/* Sticky Table of Contents */}
      <aside className="md:w-64 flex-shrink-0">
        <div className="sticky top-32 glass-panel p-6 rounded-xl">
          <h3 className="font-bold text-textMain mb-4">Contents</h3>
          <ul className="space-y-3 text-sm text-textMuted">
            <li><a href="#data-collection" className="hover:text-primary transition-colors">1. Data We Collect</a></li>
            <li><a href="#data-usage" className="hover:text-primary transition-colors">2. How We Use Data</a></li>
            <li><a href="#data-rights" className="hover:text-primary transition-colors">3. Your GDPR/CCPA Rights</a></li>
            <li><a href="#third-party" className="hover:text-primary transition-colors">4. Third-Party Processors</a></li>
            <li><a href="#contact" className="hover:text-primary transition-colors">5. Contact Us</a></li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <article className="prose prose-invert prose-cyan max-w-none text-textMuted flex-grow space-y-8">
        <div>
          <h1 className="font-heading text-4xl font-bold text-textMain mb-2">Privacy Policy</h1>
          <p className="text-sm">Last Updated: October 24, 2024</p>
        </div>

        <section id="data-collection">
          <h2 className="text-2xl font-bold text-textMain mb-4">1. Data We Collect</h2>
          <p>HyzerOX collects information necessary to provision and maintain your server infrastructure. This includes account data (email, billing address) and usage data (server metrics, IP addresses connecting to our control panel).</p>
        </section>

        <section id="data-usage">
          <h2 className="text-2xl font-bold text-textMain mb-4">2. How We Use Your Data</h2>
          <p>We use your data strictly to provide the requested services, process payments via our integrated payment gateway (e.g., Stripe), and communicate critical infrastructure updates.</p>
        </section>

        {/* ... Add remaining sections here ... */}
        
        <section id="contact">
          <h2 className="text-2xl font-bold text-textMain mb-4">5. Contact Us</h2>
          <p>For data erasure requests or privacy inquiries, contact our Data Protection Officer at <a href="mailto:privacy@hyzerox.com" className="text-primary hover:underline">privacy@hyzerox.com</a>.</p>
        </section>
      </article>
    </div>
  );
}
