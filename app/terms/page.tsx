export const metadata = {
  title: "Terms of Service — HyzerOX Hosting",
  description: "Terms and conditions for utilizing HyzerOX infrastructure.",
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <article className="prose prose-invert prose-cyan max-w-none text-textMuted space-y-8">
        <div>
          <h1 className="font-heading text-4xl font-bold text-textMain mb-2">Terms of Service</h1>
          <p className="text-sm">Effective Date: October 24, 2024</p>
        </div>

        <section>
          <h2 className="text-2xl font-bold text-textMain mb-4">1. Acceptable Use Policy (AUP)</h2>
          <p>HyzerOX infrastructure is designed for high-performance applications. Users are strictly prohibited from utilizing our network for illegal content distribution, DDoS attacks, IP spoofing, or sending unsolicited bulk email (spam).</p>
          <p><strong>Server Resource Fair Use:</strong> Automated server management tools, including universal restart plugins and custom resource monitors, are fully supported across our Folia, Paper, and Spigot nodes. However, intentionally running malicious scripts designed to artificially max out CPU or bypass RAM allocation limits will result in suspension.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-textMain mb-4">2. Payment and Refund Policy</h2>
          <p>All services are billed on a prepaid basis. We offer a strict 48-hour money-back guarantee for all new accounts on their first service deployment. Cryptocurrency payments are non-refundable. Dedicated servers and domain registrations are excluded from the refund policy.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-textMain mb-4">3. Service Level Agreement (SLA)</h2>
          <p>We guarantee a 99.9% network and power uptime. If we fail to meet this SLA in a given month, you are eligible for a credit of 5% of your monthly fee for every hour of downtime, up to 100% of the total monthly cost.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-textMain mb-4">4. Limitation of Liability</h2>
          <p>HyzerOX shall not be liable for data loss, revenue loss, or business interruption caused by hardware failure, user error, or unforeseen network outages. It is your responsibility to maintain off-site backups.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-textMain mb-4">5. Governing Law</h2>
          <p>These terms shall be governed by the laws of the jurisdiction in which HyzerOX is registered, without regard to its conflict of law provisions.</p>
        </section>
      </article>
    </div>
  );
}
