import Image from "next/image";
import { PinIcon } from "@/components/icons";

const marketPoints = [
  "Washington, DC — established residential corridors across the District",
  "Maryland — communities across the Washington metropolitan area",
  "Selected infill and small-lot development sites region-wide",
];

export function MarketsSection() {
  return (
    <section className="w-full bg-brand-surface font-sans py-20 lg:py-24 border-b border-brand-sand/50">
      <div className="max-w-page mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Market Copy & Bullet Points */}
          <div className="space-y-6">
            <span className="text-xs font-semibold uppercase tracking-tag text-brand-gold block">
              Our markets
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy tracking-tight leading-tight">
              Deep focus on DC <br />
              and Maryland.
            </h2>
            <p className="text-brand-muted text-base sm:text-lg leading-relaxed max-w-xl">
              We underwrite in the submarkets we know street by street, across
              the District and the surrounding Maryland communities.
              Concentration is deliberate: it makes our diligence sharper and our
              management responsive.
            </p>

            {/* Submarket Highlights */}
            <div className="space-y-4 pt-4">
              {marketPoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div className="mt-0.5 text-brand-gold shrink-0">
                    <PinIcon size={16} />
                  </div>
                  <span className="text-sm font-medium text-brand-navy leading-normal">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Residential Street Image */}
          <div className="relative h-[340px] sm:h-[420px] lg:h-[480px] w-full overflow-hidden shadow-xs">
            <Image
              src="/images/Residential_street.png"
              alt="Luah Partners DC and Maryland residential community street"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

