import Link from "next/link";
import Image from "next/image";

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Listings", href: "/listing" },
  { label: "Home Improvement", href: "/home-improvement" },
  { label: "Careers", href: "/careers" },
  { label: "Feedback", href: "/feedback" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Refund & Cancellation", href: "/refund-cancellation" },
  { label: "Accessibility & Fair Housing", href: "/accessibility-fair-housing" },
  { label: "Make a Payment", href: "/make-payment" },
];

export function Footer() {
  return (
    <footer className="w-full bg-brand-navy-dark text-white font-sans border-t border-white/5">
      {/* Main 4-Column Footer Grid */}
      <div className="max-w-page mx-auto px-6 sm:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Col 1: Brand Info & Compliance Statement (Span 4) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="w-9 h-9 relative overflow-hidden bg-brand-navy flex items-center justify-center">
                <Image
                  src="/images/Luah_Partners_logo.png"
                  alt="Luah Partners Logo"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Luah Partners
              </span>
            </Link>

            <p className="text-brand-slate text-sm leading-relaxed max-w-sm">
              Acquisition, ownership, financing, leasing, development,
              management, and home improvement services in residential real
              estate in Washington, DC and Maryland.
            </p>

            <p className="text-brand-slate/80 text-xs leading-relaxed max-w-sm pt-2">
              Licensed and bonded. Equal Housing Opportunity. Equal opportunity
              employer.
            </p>
          </div>

          {/* Col 2: Company Links (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-semibold tracking-wider text-white uppercase">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-brand-slate hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Legal & Payment Links (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-semibold tracking-wider text-white uppercase">
              Legal
            </h4>
            <ul className="space-y-2.5 text-sm">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-brand-slate hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Office Info (Span 3) */}
          <div className="lg:col-span-3 space-y-4 text-sm text-brand-slate">
            <h4 className="text-sm font-semibold tracking-wider text-white uppercase">
              Contact
            </h4>
            <div className="space-y-1.5 leading-relaxed">
              <p className="text-white font-medium">Headquarters</p>
              <p>818 18th St NW, Suite 810 – 1323</p>
              <p>Washington, DC 20006</p>
            </div>

            <div className="space-y-1 pt-1">
              <p>
                <span className="text-white/60">Tel </span>
                <a
                  href="tel:8008002911"
                  className="text-brand-slate hover:text-white transition-colors"
                >
                  800 800 2911
                </a>
              </p>
              <p>
                <span className="text-white/60">Fax </span>
                <span>202 803 6801</span>
              </p>
              <p>
                <a
                  href="mailto:info@luahpartners.com"
                  className="text-brand-slate hover:text-white transition-colors underline underline-offset-4"
                >
                  Info@luahpartners.com
                </a>
              </p>
            </div>

            <div className="space-y-0.5 pt-2 text-xs text-brand-slate/80">
              <p>Mon–Fri 10 AM–6 PM ET</p>
              <p>Sat 10 AM–3 PM ET</p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Processing Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-brand-slate">
          <p>© 2026 Luah Partners, Inc. All rights reserved. Registered in Maryland and the District of Columbia.</p>
          <p>Payments processed securely by Stripe · All amounts in USD</p>
        </div>
      </div>
    </footer>
  );
}
