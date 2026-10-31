import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

interface Pillar {
  number: string;
  title: string;
  description: string;
}

const pillars: Pillar[] = [
  {
    number: "01",
    title: "Acquisition & Ownership",
    description: "Sourcing and underwriting residential assets we intend to hold.",
  },
  {
    number: "02",
    title: "Financing",
    description: "Structuring debt and equity for acquisition and construction.",
  },
  {
    number: "03",
    title: "Residential Development",
    description: "Land acquisition through construction and delivery.",
  },
  {
    number: "04",
    title: "Sale of Completed Homes",
    description: "Bringing finished dwellings to market.",
  },
  {
    number: "05",
    title: "Leasing",
    description: "Marketing, screening, and lease execution. See current listings.",
  },
  {
    number: "06",
    title: "Property Management",
    description: "Day-to-day operation for our assets and third-party owners.",
  },
  {
    number: "07",
    title: "Home Improvement",
    description: "Remodeling and repair for homeowners across DC and Maryland.",
  },
];

export function PillarsSection() {
  return (
    <section className="w-full bg-white font-sans py-20 lg:py-24 border-b border-brand-sand/50">
      <div className="max-w-page mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Section Intro & Mission */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-tag text-brand-gold">
                What we do
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy tracking-tight leading-tight">
                A full-cycle <br />
                residential <br />
                platform.
              </h2>
              <p className="text-brand-muted text-base sm:text-lg leading-relaxed pt-2 max-w-md">
                We control the asset from land through lease-up, which keeps
                quality, cost, and resident experience in one accountable place.
              </p>
            </div>

            <div className="pt-6">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-gold transition-colors pb-1 border-b-2 border-brand-gold"
              >
                <span>All services</span>
                <ArrowRightIcon size={14} className="text-brand-gold" />
              </Link>
            </div>
          </div>

          {/* Right Column: 2-Column Numbered Pillars */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10 sm:gap-y-12 border-t border-brand-sand/60 pt-8">
              {pillars.map((pillar) => (
                <div key={pillar.number} className="space-y-2">
                  <span className="text-xs font-semibold text-brand-gold block font-mono">
                    {pillar.number}
                  </span>
                  <h3 className="text-lg font-bold text-brand-navy">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-brand-muted leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

