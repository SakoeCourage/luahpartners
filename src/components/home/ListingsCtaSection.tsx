import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

export function ListingsCtaSection() {
  return (
    <section className="w-full bg-white font-sans py-20 lg:py-24 border-b border-brand-sand/50">
      <div className="max-w-page mx-auto px-6 sm:px-12">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          {/* Left: Heading and message */}
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-tag text-brand-gold block">
              Our markets
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              Looking for a home in DC or Maryland?
            </h2>
            <p className="text-brand-muted text-base sm:text-lg leading-relaxed pt-1">
              See what we have available for lease right now, along with
              properties we&apos;ve acquired and are renovating before they reach
              the market.
            </p>
          </div>

          {/* Right: CTA Button */}
          <div className="shrink-0 pt-2 lg:pt-0">
            <Link
              href="/listing"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-brand-navy hover:bg-brand-navy-light text-white font-semibold text-sm transition-colors shadow-xs"
            >
              <span>View Listings</span>
              <ArrowRightIcon size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

