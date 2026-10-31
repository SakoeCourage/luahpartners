import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

export function PaymentBannerSection() {
  return (
    <section className="w-full bg-brand-navy font-sans py-16 sm:py-20 text-white">
      <div className="max-w-page mx-auto px-4 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          {/* Left Side: Security messaging */}
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-tag text-brand-slate block">
              Secure online payments
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Pay rent or a deposit securely
            </h2>
            <p className="text-brand-slate text-sm sm:text-base leading-relaxed max-w-xl pt-1">
              Residents and applicants can pay online in minutes. Card and bank
              payments are processed by Stripe — Luah Partners never stores your
              card or account numbers.
            </p>
          </div>

          {/* Right Side: Gold Payment CTA */}
          <div className="shrink-0 pt-2 lg:pt-0">
            <Link
              href="/make-payment"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-brand-gold-light hover:bg-brand-gold text-brand-dark font-semibold text-sm transition-colors shadow-xs"
            >
              <span>Make A Payment</span>
              <ArrowRightIcon size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

