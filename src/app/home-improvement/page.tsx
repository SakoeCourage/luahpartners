import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { CustomSelect } from "@/components/CustomSelect";
import { DataTable, type DataTableColumn, type DataTableRow } from "@/components/DataTable";
import { InternationalPhoneInput } from "@/components/InternationalPhoneInput";

export const metadata: Metadata = {
  title: "Home Improvement | Luah Partners",
  description: "Repairs and renovations, run the way we manage our own homes.",
  alternates: {
    canonical: "https://www.luahpartners.com/home-improvement",
  },
  openGraph: {
    title: "Home Improvement | Luah Partners",
    description: "Repairs and renovations, run the way we manage our own homes.",
    url: "https://www.luahpartners.com/home-improvement",
    siteName: "Luah Partners",
    type: "website",
    images: ["https://www.luahpartners.com/images/home-improvement-og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Improvement | Luah Partners",
    description: "Repairs and renovations, run the way we manage our own homes.",
    images: ["https://www.luahpartners.com/images/home-improvement-og.png"],
  },
};

const commitments = [
  {
    number: "01",
    title: "Licensed contractor",
    detail:
      "We hold the licensing required to perform home improvement work in Maryland and the District of Columbia.",
  },
  {
    number: "02",
    title: "Insured and bonded",
    detail: "General liability insurance and a contractor's bond stand behind every project we take on.",
  },
  {
    number: "03",
    title: "Written estimates",
    detail:
      "Scope and price are confirmed in writing before any work begins or any payment is collected.",
  },
  {
    number: "04",
    title: "Reachable",
    detail: "Mon–Fri 10 AM–6 PM ET, Sat 10 AM–3 PM ET. One business day response on every inquiry.",
  },
];

const serviceColumns: DataTableColumn[] = [
  { key: "service", label: "Service Title", className: "min-w-44 font-semibold" },
  { key: "category", label: "Category", className: "min-w-44" },
  { key: "description", label: "Description", className: "min-w-[420px]" },
];

// This is the API boundary for the What we do table. A future services feed can
// replace this collection without changing the reusable table component.
const serviceRows: DataTableRow[] = [
  {
    id: "bathroom",
    service: "Bathroom Remodeling",
    category: "Remodeling",
    description: "Full and partial renovations — tile, vanities, tubs, showers, and fixtures, plus accessibility updates like grab bars and walk-in showers. We coordinate the plumbing, electrical, and permitting so one team is responsible for the whole job.",
  },
  {
    id: "concrete",
    service: "Concrete & Masonry",
    category: "Concrete",
    description: "Driveways, walkways, patios, steps, retaining walls, and foundation and basement repair — poured, finished, and sealed to hold up through a Mid-Atlantic winter.",
  },
  {
    id: "decks",
    service: "Decks, Patios & Exterior Repair",
    category: "Exterior",
    description: "Deck and patio construction and repair, fencing, siding, gutters, and exterior carpentry — built to code and to withstand DC and Maryland weather.",
  },
  {
    id: "flooring",
    service: "Flooring & Drywall",
    category: "Interior",
    description: "Hardwood, laminate, tile, and vinyl plank installation and repair, plus drywall patching, replacement, and finishing after water damage, renovation, or ordinary wear.",
  },
  {
    id: "repair",
    service: "General Residential Repair",
    category: "Repair",
    description: "Punch lists, drywall and trim repair, door and window issues, fixture replacement, and the everyday repair work that keeps a home running — scheduled and billed as one job, not a string of separate visits.",
  },
  {
    id: "painting",
    service: "Interior & Exterior Painting",
    category: "Painting",
    description: "Interior painting, exterior painting and staining, and cabinet refinishing, with the drywall and trim prep that makes a finish last.",
  },
  {
    id: "kitchen",
    service: "Kitchen Remodeling",
    category: "Remodeling",
    description: "Cabinets, countertops, backsplash, flooring, and layout changes, from a single-wall refresh to a full gut renovation. Plumbing, electrical, and appliance installation are scheduled under one plan.",
  },
];

const hiringSteps = [
  {
    number: "01",
    title: "Tell us about it",
    detail: "Call, email, or submit the form below with a rough scope and your address.",
  },
  {
    number: "02",
    title: "On-site assessment",
    detail: "We walk the property, take measurements, and talk through materials and options.",
  },
  {
    number: "03",
    title: "Written proposal",
    detail: "You receive a fixed-scope, fixed-price proposal. Nothing starts until you sign off.",
  },
  {
    number: "04",
    title: "Work & walkthrough",
    detail: "We schedule the crew, keep you updated, and walk the finished work with you.",
  },
];

const serviceOptions = [
  { value: "bathroom", label: "Bathroom remodeling" },
  { value: "kitchen", label: "Kitchen remodeling" },
  { value: "concrete", label: "Concrete & masonry" },
  { value: "flooring", label: "Flooring & drywall" },
  { value: "painting", label: "Painting" },
  { value: "decks", label: "Decks, patios & exterior" },
  { value: "repair", label: "General repair or handyman" },
  { value: "not-sure", label: "Not sure yet" },
];

function Arrow() {
  return (
    <Image
      src="/images/listing-arrow-right.svg"
      alt=""
      aria-hidden="true"
      width={16}
      height={16}
    />
  );
}

function DetailCard({ number, title, detail }: { number: string; title: string; detail: string }) {
  return (
    <article className="border-t border-brand-sand py-7">
      <p className="text-[13px] font-bold text-brand-gold">{number}</p>
      <h3 className="mt-4 text-[21px] font-bold leading-[1.4] text-brand-navy">{title}</h3>
      <p className="mt-4 text-base leading-[1.8] text-brand-muted">{detail}</p>
    </article>
  );
}

export default function HomeImprovementPage() {
  return (
    <>
      <section className="bg-brand-navy">
        <div className="mx-auto flex max-w-page flex-col lg:flex-row">
          <div className="flex flex-1 flex-col px-6 py-14 sm:px-12 sm:py-16">
            <p className="text-xs font-bold uppercase tracking-tag text-brand-gold-light">
              Home improvement · Washington, DC · Maryland
            </p>
            <h1 className="mt-6 max-w-[660px] text-4xl font-bold leading-[1.12] text-white sm:text-5xl lg:text-[56px]">
              Repairs and renovations, run the way we manage our own homes
            </h1>
            <p className="mt-6 max-w-[650px] text-base leading-[1.75] text-[#dfe5ec] sm:text-[17px]">
              Luah Partners performs home improvement and residential repair work directly for homeowners across the District and Maryland — bathroom and kitchen remodeling, concrete, flooring, painting, decks, and everyday repairs. Licensed, insured, and bonded, with a written scope and price before anything begins.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a href="#quote" className="inline-flex min-h-12 items-center gap-3 border border-brand-gold-light bg-brand-gold-light px-6 py-3 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-gold">
                Request a quote
                <Arrow />
              </a>
              <a href="#services" className="inline-flex min-h-12 items-center gap-3 border border-brand-sand bg-white px-6 py-3 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-sand-light">
                View services
                <Arrow />
              </a>
            </div>
          </div>
          <div className="relative min-h-[360px] lg:min-h-[450px] lg:w-[560px]">
            <Image
              src="/images/home-improvement-hero.jpg"
              alt="A Luah Partners home improvement project in Washington, DC"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 560px, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-page px-6 py-14 sm:px-12 sm:py-16">
          <h2 className="text-3xl font-bold leading-[1.25] text-brand-navy sm:text-4xl">Every home, a blessing.</h2>
          <div className="mt-8 grid gap-x-6 md:grid-cols-2 xl:grid-cols-4">
            {commitments.map((commitment) => <DetailCard key={commitment.number} {...commitment} />)}
          </div>
        </div>
      </section>

      <section id="services" className="bg-white">
        <div className="mx-auto max-w-page px-6 py-14 sm:px-12 sm:py-16">
          <p className="text-xs font-bold uppercase tracking-tag text-brand-gold">What we do</p>
          <h2 className="mt-8 text-3xl font-bold leading-[1.25] text-brand-navy sm:text-4xl">Bathroom to basement, one team start to finish</h2>
          <p className="mt-8 max-w-[1100px] text-base leading-[1.8] text-brand-muted">
            Every project is quoted in writing, scheduled against a fixed timeline, and closed out with a walkthrough. Our quoted price is confirmed in a signed agreement before any work begins or any payment is collected.
          </p>
          <div className="mt-8">
            <DataTable
              columns={serviceColumns}
              rows={serviceRows}
              searchLabel="Search services"
              searchPlaceholder="Search..."
              filter={{
                key: "service",
                label: "Filter services",
                allLabel: "Filters",
                options: [...new Set(serviceRows.map((service) => service.category))].map((category) => ({ label: category, value: category })),
              }}
              emptyMessage="No service matches your search. Call us and we will help you find the right scope."
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-page px-6 py-14 sm:px-12 sm:py-16">
          <p className="text-xs font-bold uppercase tracking-tag text-brand-gold">How hiring works</p>
          <h2 className="mt-8 text-3xl font-bold leading-[1.25] text-brand-navy sm:text-4xl">From first call to final walkthrough</h2>
          <div className="mt-8 grid gap-x-6 md:grid-cols-2">
            {hiringSteps.map((step) => <DetailCard key={step.number} {...step} />)}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-page px-6 py-14 sm:px-12 sm:py-16">
          <p className="text-xs font-bold uppercase tracking-tag text-brand-gold">Where we work</p>
          <h2 className="mt-8 text-3xl font-bold leading-[1.25] text-brand-navy sm:text-4xl">Deep focus on DC and Maryland.</h2>
          <p className="mt-8 max-w-[1100px] text-base leading-[1.8] text-brand-muted">
            We take on home improvement projects in the same submarkets we already own and manage property in, which means crews who know the row houses, rowhouse basements, and building stock of this region — not a franchise dispatching whoever is free that week.
          </p>
          <div className="mt-8 grid gap-x-6 md:grid-cols-3">
            <DetailCard number="01" title="Washington, DC" detail="Residential remodeling and repair across the District." />
            <DetailCard number="02" title="Maryland" detail="Montgomery and Prince George's Counties and surrounding Washington-metro communities." />
            <DetailCard number="03" title="On-site assessments" detail="Scheduled on request — call or use the form below." />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-page px-6 py-14 sm:px-12 sm:py-16">
          <p className="text-xs font-bold uppercase tracking-tag text-brand-gold">Flexible payment options</p>
          <h2 className="mt-8 text-3xl font-bold leading-[1.25] text-brand-navy sm:text-4xl">Can&apos;t pay in full? Break it into payments</h2>
          <p className="mt-8 max-w-[1100px] text-base leading-[1.8] text-brand-muted">
            A written quote shouldn&apos;t be the reason a repair or renovation gets put off. If paying the full cost up front doesn&apos;t work for your budget, you can pay in installments through our third-party financing partners, with a decision in minutes and a fixed monthly payment you choose before you commit.
          </p>
          <div className="mt-8 grid gap-x-6 md:grid-cols-2">
            <DetailCard number="01" title="PayPal" detail="Pay Monthly or Pay in 4 — split the cost of your project into smaller payments at checkout." />
            <DetailCard number="02" title="Affirm" detail="See your monthly payment and rate up front, then choose the term that fits your budget." />
          </div>
          <p className="mt-8 max-w-[1100px] text-sm leading-[1.8] text-brand-muted">
            Financing is offered directly by PayPal and Affirm, independent third-party lenders — not by Luah Partners. Approval, rates, and repayment terms are determined solely by the lender based on your creditworthiness. See each provider&apos;s website for full terms.
          </p>
        </div>
      </section>

      <section id="quote" className="bg-brand-surface">
        <div className="mx-auto max-w-page px-6 py-14 sm:px-12 sm:py-16">
          <p className="text-xs font-bold uppercase tracking-tag text-brand-gold">Get started</p>
          <h2 className="mt-8 text-3xl font-bold leading-[1.25] text-brand-navy sm:text-4xl">Request a home improvement quote</h2>
          <div className="mt-8 grid gap-10 lg:grid-cols-[390px_minmax(0,1fr)] lg:gap-16">
            <aside>
              <p className="text-base leading-[1.8] text-brand-muted">Tell us about the project and we&apos;ll follow up within one business day.</p>
              <div className="mt-6 p-7">
                <h3 className="text-2xl font-bold text-brand-navy">Talk to Luah Partners</h3>
                <dl className="mt-5 space-y-5 text-[15px] leading-[1.65] text-brand-navy">
                  <div><dt className="text-xs font-bold uppercase tracking-tag text-brand-gold">Telephone</dt><dd className="mt-[5px]"><a href="tel:8008002911">800 800 2911</a></dd></div>
                  <div><dt className="text-xs font-bold uppercase tracking-tag text-brand-gold">Email</dt><dd className="mt-[5px]"><a href="mailto:info@luahpartners.com">Info@luahpartners.com</a></dd></div>
                  <div><dt className="text-xs font-bold uppercase tracking-tag text-brand-gold">Response time</dt><dd className="mt-[5px]">One business day on every inquiry.</dd></div>
                  <div><dt className="text-xs font-bold uppercase tracking-tag text-brand-gold">Estimates</dt><dd className="mt-[5px]">Free, written, and obligation-free.</dd></div>
                  <div><dt className="text-xs font-bold uppercase tracking-tag text-brand-gold">Financing</dt><dd className="mt-[5px]">Pay in installments with PayPal or Affirm.</dd></div>
                </dl>
              </div>
            </aside>

            <form className="border border-brand-sand bg-white p-6 sm:p-8">
              <p className="text-xs text-brand-muted">* Required fields</p>
              <div className="mt-6 space-y-6">
                <label className="block text-sm font-semibold text-brand-navy">Name *<input name="name" required placeholder="Your name" className="mt-[10px] min-h-[52px] w-full border border-brand-sand px-4 text-sm font-normal text-brand-navy placeholder:text-brand-muted outline-none focus:border-brand-gold" /></label>
                <label className="block text-sm font-semibold text-brand-navy">Email *<input name="email" type="email" required placeholder="you@example.com" className="mt-[10px] min-h-[52px] w-full border border-brand-sand px-4 text-sm font-normal text-brand-navy placeholder:text-brand-muted outline-none focus:border-brand-gold" /></label>
                <label className="block text-sm font-semibold text-brand-navy">Phone *<span className="mt-[10px] block font-normal"><InternationalPhoneInput id="quote-phone" name="phone" ariaLabel="Phone number" required /></span></label>
                <div className="block text-sm font-semibold text-brand-navy">
                  <span id="service-needed-label">Service needed *</span>
                  <CustomSelect ariaLabelledBy="service-needed-label" defaultValue="bathroom" name="serviceNeeded" options={serviceOptions} required />
                  <span className="mt-[10px] block text-xs font-normal leading-[1.7] text-brand-muted">Bathroom remodeling · Kitchen remodeling · Concrete & masonry · Flooring & drywall · Painting · Decks, patios & exterior · General repair or handyman · Not sure yet</span>
                </div>
                <label className="block text-sm font-semibold text-brand-navy">Property address *<input name="address" required placeholder="Street, city DC or MD" className="mt-[10px] min-h-[52px] w-full border border-brand-sand px-4 text-sm font-normal text-brand-navy placeholder:text-brand-muted outline-none focus:border-brand-gold" /></label>
                <label className="block text-sm font-semibold text-brand-navy">Project details *<textarea name="details" required placeholder="What are you looking to have done?" className="mt-[10px] min-h-[120px] w-full resize-y border border-brand-sand p-4 text-sm font-normal text-brand-navy placeholder:text-brand-muted outline-none focus:border-brand-gold" /></label>
              </div>
              <button type="submit" className="mt-6 inline-flex min-h-12 items-center gap-3 border border-brand-gold-light bg-brand-gold-light px-6 py-3 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-gold">REQUEST A QUOTE<Arrow /></button>
              <p className="mt-6 text-[13px] leading-[1.8] text-brand-muted">By submitting you agree to our <Link href="/privacy-policy" className="underline underline-offset-2">Privacy Policy</Link>. We do not sell your information.</p>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-brand-navy-light">
        <div className="mx-auto flex max-w-page flex-col gap-8 px-6 py-14 sm:px-12 sm:py-14 lg:flex-row lg:items-center lg:justify-between lg:gap-14">
          <div className="max-w-4xl text-white"><h2 className="text-3xl font-bold leading-[1.3] sm:text-[32px]">Have a project in mind?</h2><p className="mt-4 text-base leading-[1.8]">Get a free, written estimate from a licensed, insured, and bonded contractor serving Washington, DC and Maryland.</p></div>
          <a href="#quote" className="inline-flex min-h-12 shrink-0 items-center gap-3 self-start border border-brand-gold-light bg-brand-gold-light px-6 py-3 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-gold lg:self-auto">Request quote<Arrow /></a>
        </div>
      </section>
    </>
  );
}
