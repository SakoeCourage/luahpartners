import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Luah Partners",
  description: null,
  openGraph: {
    title: "Services | Luah Partners",
    url: "https://www.luahpartners.com/services",
    siteName: "Luah Partners",
    type: "website",
    images: ["https://www.luahpartners.com/images/luah-about-og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Luah Partners",
    images: ["https://www.luahpartners.com/images/luah-about-og.png"],
  },
};

const services = [
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

const fees = [
  {
    number: "01",
    title: "Property management",
    price: "6–10% of rent",
    description:
      "Monthly, based on collected rent. Scope, minimums, and any leasing fee are set in your management agreement before we begin.",
  },
  {
    number: "02",
    title: "Rental application",
    price: "$45–$75",
    description:
      "Per adult applicant, covering credit, criminal, and rental history screening. Refundable in full if you cancel before screening begins.",
  },
  {
    number: "03",
    title: "Security deposit",
    price: "Per lease",
    description:
      "Set by the lease within the limits of DC or Maryland law, held and returned in accordance with that law and your lease.",
  },
];

function ServiceCard({
  number,
  title,
  description,
  className = "",
}: {
  number: string;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <article className={`border-t border-brand-sand py-7 ${className}`}>
      <p className="text-[13px] font-bold text-brand-gold">{number}</p>
      <h3 className="mt-4 text-[21px] font-bold leading-[1.4] text-brand-navy">
        {title}
      </h3>
      <p className="mt-4 text-base leading-[1.8] text-brand-muted">
        {description}
      </p>
    </article>
  );
}

export default function ServicesPage() {
  return (
    <>
      <section className="bg-brand-surface">
        <div className="max-w-page mx-auto px-6 py-14 sm:px-12 sm:py-16">
          <p className="text-xs font-bold uppercase tracking-tag text-brand-gold">
            Services
          </p>
          <h1 className="mt-6 max-w-[1050px] text-4xl font-bold leading-[1.12] text-brand-navy sm:text-5xl lg:text-[56px]">
            Everything from land to lease renewal
          </h1>
          <p className="mt-6 max-w-[900px] text-base leading-[1.75] text-brand-navy sm:text-[17px]">
            Luah Partners provides the following services in Washington, DC and
            Maryland. Fees are quoted in United States dollars and confirmed in
            a written agreement before any work begins or any payment is
            collected.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-page mx-auto px-6 py-14 sm:px-12 sm:py-16">
          <p className="text-xs font-bold uppercase tracking-tag text-brand-gold">
            What we do
          </p>
          <h2 className="mt-6 text-3xl font-bold leading-[1.25] text-brand-navy sm:text-4xl">
            A full-cycle residential platform.
          </h2>
          <div className="mt-8 grid gap-x-6 md:grid-cols-2">
            {services.map((service, index) => (
              <ServiceCard
                key={service.number}
                {...service}
                className={
                  index === services.length - 1 ? "md:col-span-2" : ""
                }
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-surface">
        <div className="max-w-page mx-auto px-6 py-14 sm:px-12 sm:py-16">
          <h2 className="text-3xl font-bold leading-[1.25] text-brand-navy sm:text-4xl">
            Fees and how you are billed
          </h2>
          <p className="mt-6 text-base leading-[1.8] text-brand-muted">
            Published for transparency. Actual amounts depend on the property,
            scope, and executed agreement; nothing is charged without your
            written authorization.
          </p>
          <div className="mt-8 grid gap-x-6 md:grid-cols-3">
            {fees.map((fee) => (
              <article key={fee.number} className="border-t border-brand-sand py-7">
                <p className="text-[13px] font-bold text-brand-gold">
                  {fee.number}
                </p>
                <h3 className="mt-4 text-[21px] font-bold leading-[1.4] text-brand-navy">
                  {fee.title} <span className="text-brand-gold">· {fee.price}</span>
                </h3>
                <p className="mt-4 text-base leading-[1.8] text-brand-muted">
                  {fee.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
