import Link from "next/link";
import { FileText, Cookie, Shield } from "lucide-react";

export const metadata = {
  title: "Legal Hub — HyzerOX Hosting",
  description: "Terms, privacy, and compliance documentation for HyzerOX.",
};

export default function LegalHubPage() {
  const docs = [
    { title: "Privacy Policy", icon: Shield, href: "/privacy", desc: "How we collect, use, and protect your data." },
    { title: "Terms of Service", icon: FileText, href: "/terms", desc: "Rules and guidelines for using our infrastructure." },
    { title: "Cookie Policy", icon: Cookie, href: "/cookies", desc: "Details on tracking, analytics, and managing preferences." },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-heading text-4xl font-bold mb-4 text-textMain text-center">Legal <span className="text-primary">Hub.</span></h1>
      <p className="text-textMuted text-center mb-12">Transparency and compliance documentation for all HyzerOX services.</p>

      <div className="grid gap-6">
        {docs.map((doc, i) => (
          <Link key={i} href={doc.href} className="glass-panel p-6 rounded-xl flex items-center justify-between hover:border-primary transition-colors group">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-elevated rounded-lg group-hover:bg-primary/10 transition-colors">
                <doc.icon className="w-6 h-6 text-textMain group-hover:text-primary transition-colors" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-textMain">{doc.title}</h2>
                <p className="text-textMuted text-sm">{doc.desc}</p>
              </div>
            </div>
            <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0">
              Read →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
