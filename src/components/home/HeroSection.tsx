import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@/components/icons";

export function HeroSection() {
  return (
    <section className="w-full bg-brand-navy font-sans overflow-hidden">
      <div className="max-w-page mx-auto grid grid-cols-1 lg:grid-cols-2">
        {/* Left Column: Brand copy & CTAs */}
        <div className="flex flex-col justify-center px-6 py-16 sm:px-12 sm:py-20 lg:px-16 xl:px-20 lg:py-24">
          {/* Geographic Tag */}
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-brand-gold" />
            <span className="text-xs font-semibold uppercase tracking-tag text-brand-gold-light">
              Washington, DC · Maryland
            </span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="mt-6 text-4xl sm:text-5xl xl:text-6xl font-bold text-white tracking-tight leading-[1.08]">
            Building and <br />
            stewarding homes <br />
            in the capital region
          </h1>

          {/* Subtext Paragraph */}
          <p className="mt-6 text-base sm:text-lg text-brand-slate leading-relaxed max-w-xl">
            Luah Partners, Inc. acquires, develops, finances, leases, and
            manages residential real estate across Washington, DC and Maryland —
            from single-family homes to multi-family communities.
          </p>

          {/* Brand Promise Italic Quote */}
          <div className="mt-8 flex items-center gap-3">
            <span className="w-6 h-px bg-brand-sand/50" />
            <p className="text-base sm:text-lg italic text-brand-sand font-serif">
              Every home, a blessing.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-wrap items-center gap-3.5">
            <Link
              href="/services"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-brand-gold hover:bg-brand-gold-dark text-white font-semibold text-sm transition-colors shadow-xs"
            >
              <span>Our services</span>
              <ArrowRightIcon size={15} />
            </Link>

            <Link
              href="/listing"
              className="inline-flex items-center justify-center px-6 py-3.5 border border-white/20 hover:border-white/50 text-white font-semibold text-sm transition-colors bg-white/5"
            >
              View listings
            </Link>

            <Link
              href="/make-payment"
              className="inline-flex items-center justify-center px-6 py-3.5 border border-white/20 hover:border-white/50 text-white font-semibold text-sm transition-colors bg-white/5"
            >
              Make a payment
            </Link>
          </div>
        </div>

        {/* Right Column: Hero Framing Construction Image */}
        <div className="relative min-h-[380px] sm:min-h-[460px] lg:min-h-[640px] w-full">
          <Image
            src="/images/hero_image.png"
            alt="Luah Partners residential construction and development project"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}

