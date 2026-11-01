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
    <section className="w-full bg-white font-sans py-20 lg:py-28 border-b border-brand-sand/50">
      <div className="max-w-page mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12">
          {/* Left Column: Section Intro & Mission */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <span className="text-xs font-semibold uppercase tracking-tag text-brand-gold">
                What we do
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy leading-tight">
                A full-cycle <br />
                residential <br />
                platform.
              </h2>
              <p className="text-brand-muted text-base leading-7 pt-2 max-w-md">
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
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-brand-sand pt-px">
              {pillars.map((pillar, idx) => (
                <div
                  key={pillar.number}
                  className={`border-b border-brand-sand py-6 ${
                    idx === pillars.length - 1 ? "sm:col-span-2" : ""
                  } ${idx % 2 === 0 ? "sm:pr-8" : "sm:pl-8"}`}
                >
                  <span className="text-xs font-semibold text-brand-gold block">
                    {pillar.number}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold leading-7 text-brand-dark">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm text-brand-muted leading-6">
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
