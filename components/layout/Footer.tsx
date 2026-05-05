import Link from "next/link";
import { Github, Twitter, MessageSquare, CheckCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t border-border mt-20 relative z-10">
      {/* Light theme override for footer background handled in CSS or via inline style if strict isolation is needed. For simplicity, we use Tailwind classes that adapt if configured, but as per prompt: #0D0D0D dark / #EBEBEB light */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="font-heading font-bold text-2xl tracking-tight text-textMain flex items-center gap-2">
              <span className="text-primary text-3xl">HX</span> HYZEROX
            </Link>
            <p className="text-textMuted text-sm">Enterprise-grade infrastructure for developers, gamers, and communities.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-textMuted hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-textMuted hover:text-primary transition-colors"><MessageSquare className="w-5 h-5" /></a>
              <a href="#" className="text-textMuted hover:text-primary transition-colors"><Github className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-textMain mb-4">Products</h4>
            <ul className="space-y-3 text-sm text-textMuted">
              <li><Link href="/products/vps" className="hover:text-primary transition-colors">VPS Hosting</Link></li>
              <li><Link href="/products/minecraft" className="hover:text-primary transition-colors">Minecraft Servers</Link></li>
              <li><Link href="/products/discord-bots" className="hover:text-primary transition-colors">Discord Bot Hosting</Link></li>
              <li><Link href="/products/game-servers" className="hover:text-primary transition-colors">Game Servers</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-textMain mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-textMuted">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
              <li>
                {/* TODO: GET /api/status — uptime monitoring integration */}
                <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors">
                  Status <span className="flex items-center gap-1 text-xs bg-green-500/10 text-green-500 px-2 py-0.5 rounded-full border border-green-500/20"><CheckCircle className="w-3 h-3" /> All Operational</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-textMain mb-4">Legal & Support</h4>
            <ul className="space-y-3 text-sm text-textMuted">
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Support</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/cookies" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-textMuted">
          <p>© {new Date().getFullYear()} HyzerOX. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Powered by HyzerOX Team & DZD</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
