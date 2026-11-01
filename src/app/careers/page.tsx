import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { DataTable, type DataTableColumn, type DataTableRow } from "@/components/tables/DataTable";
import { CareersApplicationForm } from "@/feature-slices/careers/CareersApplicationForm";

const careersDescription =
  "We're a small team that does the work rather than brokering it out, and we're looking for people who want ownership of a market they already know. If one of the roles below fits, tell us — and if none of them do, tell us that too.";

export const metadata: Metadata = {
  title: "Careers | Luah Partners",
  description: careersDescription,
  alternates: { canonical: "https://www.luahpartners.com/careers" },
  openGraph: {
    title: "Careers | Luah Partners",
    description: careersDescription,
    url: "https://www.luahpartners.com/careers",
    siteName: "Luah Partners",
    type: "website",
    images: ["https://www.luahpartners.com/images/home-improvement-og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers | Luah Partners",
    description: careersDescription,
    images: ["https://www.luahpartners.com/images/home-improvement-og.png"],
  },
};

const careerBenefits = [
  { number: "01", title: "One region, known well", detail: "We work the District and the Maryland suburbs only. Local knowledge is the job, not a bonus." },
  { number: "02", title: "Full-cycle company", detail: "Acquisition through renovation, leasing, and management — you see the whole arc of a property." },
  { number: "03", title: "Everything in writing", detail: "Scope, expectations, and compensation are documented before you start. No surprises." },
  { number: "04", title: "Real answers", detail: "Every applicant hears back from a person, whether or not it's a fit." },
];

const roleColumns: DataTableColumn[] = [
  { key: "title", label: "Role Title", className: "min-w-56 font-semibold" },
  { key: "location", label: "Location", className: "min-w-40" },
  { key: "description", label: "Description", className: "min-w-[420px]" },
];

// Future careers API boundary: replace this collection with published role data
// while preserving the shared table and form options below.
const openRoles: DataTableRow[] = [
  {
    id: "business-development-specialist",
    title: "Business Development Specialist",
    location: "DC · Maryland",
    description: "Open the doors that grow the business: third-party management contracts, owner and investor relationships, referral partnerships with agents, lenders, and attorneys, and home improvement client accounts. You’ll build the pipeline and stay with a relationship past the handshake.",
  },
  {
    id: "leasing-agent",
    title: "Leasing Agent",
    location: "DC · Maryland",
    description: "Show available homes, answer applicant questions honestly, screen under consistent written criteria, and execute leases that meet DC and Maryland requirements. Fair housing compliance and source-of-income protections are non-negotiable parts of this role. Licensing is required where state law calls for it.",
  },
  {
    id: "marketing-agent",
    title: "Marketing Agent",
    location: "DC · Maryland",
    description: "Own how our properties and home improvement work show up in the market: listing photography and copy, social and local advertising, email campaigns, signage, and neighborhood outreach. You’ll decide what a home looks like the day it goes live and measure what actually brings in inquiries.",
  },
  {
    id: "property-manager",
    title: "Property Manager",
    location: "DC · Maryland",
    description: "Run daily operations for a portfolio of properties we own and properties we manage for third-party owners: rent collection, maintenance coordination, vendor management, inspections, compliance, resident communication, and monthly owner reporting. Licensing is required where DC or Maryland law calls for it.",
  },
];

const hiringSteps = [
  { number: "01", title: "Apply", detail: "Send the form below or email us. We acknowledge every application within five business days." },
  { number: "02", title: "Introductory call", detail: "A short conversation about your experience, the role, and what the work actually looks like day to day." },
  { number: "03", title: "Meet the team", detail: "An in-person or on-site meeting — often walking a property, depending on the role." },
  { number: "04", title: "Written offer", detail: "Role, schedule, and compensation in writing before you start. Background and licensing checks where the role requires them." },
];

function Arrow() {
  return <Image src="/images/listing-arrow-right.svg" alt="" aria-hidden="true" width={16} height={16} />;
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

export default function CareersPage() {
  return (
    <>
      <section className="bg-brand-surface">
        <div className="mx-auto max-w-page px-6 py-14 sm:px-12 sm:py-16">
          <p className="text-xs font-bold uppercase tracking-tag text-brand-gold">Careers</p>
          <h1 className="mt-6 max-w-[1050px] text-4xl font-bold leading-[1.12] text-brand-navy sm:text-5xl lg:text-[56px]">Build something that lasts, on your own blocks</h1>
          <p className="mt-6 max-w-[900px] text-base leading-[1.75] text-brand-navy sm:text-[17px]">Luah Partners buys, builds, leases, manages, and repairs homes across Washington, DC and Maryland. We&apos;re a small team that does the work rather than brokering it out, and we&apos;re looking for people who want ownership of a market they already know. If one of the roles below fits, tell us — and if none of them do, tell us that too.</p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-page px-6 py-14 sm:px-12 sm:py-16">
          <h2 className="text-3xl font-bold leading-[1.25] text-brand-navy sm:text-4xl">Local knowledge. Real ownership.</h2>
          <div className="mt-8 grid gap-x-6 md:grid-cols-2 xl:grid-cols-4">{careerBenefits.map((benefit) => <DetailCard key={benefit.number} {...benefit} />)}</div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-page px-6 py-14 sm:px-12 sm:py-16">
          <p className="text-xs font-bold uppercase tracking-tag text-brand-gold">Where we&apos;re hiring</p>
          <h2 className="mt-8 text-3xl font-bold leading-[1.25] text-brand-navy sm:text-4xl">Open roles</h2>
          <p className="mt-8 max-w-[1100px] text-base leading-[1.8] text-brand-muted">Roles are based in Washington, DC and Maryland. Employment type, schedule, and compensation are discussed during the interview and confirmed in writing before you begin.</p>
          <div className="mt-8">
            <DataTable columns={roleColumns} rows={openRoles} searchLabel="Search" searchPlaceholder="Search..." filter={{ key: "location", label: "Filter roles", allLabel: "Filters", options: [{ label: "DC · Maryland", value: "DC · Maryland" }] }} emptyMessage="No open role matches your search. You can still send us a general application below." />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-page px-6 py-14 sm:px-12 sm:py-16">
          <p className="text-xs font-bold uppercase tracking-tag text-brand-gold">How hiring works</p>
          <h2 className="mt-8 text-3xl font-bold leading-[1.25] text-brand-navy sm:text-4xl">Four steps, and you hear back at each one</h2>
          <div className="mt-8 grid gap-x-6 md:grid-cols-2">{hiringSteps.map((step) => <DetailCard key={step.number} {...step} />)}</div>
        </div>
      </section>

      <section id="apply" className="bg-brand-surface">
        <div className="mx-auto max-w-page px-6 py-14 sm:px-12 sm:py-16">
          <p className="text-xs font-bold uppercase tracking-tag text-brand-gold">Your details</p>
          <h2 className="mt-8 text-3xl font-bold leading-[1.25] text-brand-navy sm:text-4xl">Tell us where you fit</h2>
          <div className="mt-8 grid gap-10 lg:grid-cols-[390px_minmax(0,1fr)] lg:gap-16">
            <aside>
              <p className="text-base leading-[1.8] text-brand-muted">Fill this out and attach your resume — we&apos;ll follow up within five business days.</p>
              <div className="mt-6 p-7">
                <h3 className="text-2xl font-bold text-brand-navy">Talk to Luah Partners</h3>
                <dl className="mt-5 space-y-5 text-[15px] leading-[1.65] text-brand-navy">
                  <div><dt className="text-xs font-bold uppercase tracking-tag text-brand-gold">Telephone</dt><dd className="mt-[5px]"><a href="tel:8008002911">800 800 2911</a></dd></div>
                  <div><dt className="text-xs font-bold uppercase tracking-tag text-brand-gold">Email</dt><dd className="mt-[5px]"><a href="mailto:info@luahpartners.com">Info@luahpartners.com</a></dd></div>
                  <div><dt className="text-xs font-bold uppercase tracking-tag text-brand-gold">Office</dt><dd className="mt-[5px]">818 18th St NW, Suite 810 – 1323<br />Washington, DC 20006</dd></div>
                  <div><dt className="text-xs font-bold uppercase tracking-tag text-brand-gold">Hours</dt><dd className="mt-[5px]">Mon–Fri 10:00 AM–6:00 PM ET<br />Sat 10:00 AM–3:00 PM ET<br />Sunday: Closed</dd></div>
                  <div><dt className="text-xs font-bold uppercase tracking-tag text-brand-gold">Fax</dt><dd className="mt-[5px]">202 803 6801</dd></div>
                </dl>
                <p className="mt-5 text-sm leading-[1.8] text-brand-muted">Email your resume: Info@luahpartners.com. Five business days on every application.</p>
              </div>
            </aside>

            <CareersApplicationForm />
          </div>
        </div>
      </section>

      <section className="bg-white"><div className="mx-auto max-w-page px-6 py-14 sm:px-12 sm:py-16"><h2 className="text-3xl font-bold leading-[1.25] text-brand-navy sm:text-4xl">Equal opportunity employer</h2><p className="mt-8 text-base leading-[1.8] text-brand-muted">Luah Partners, Inc. is an equal opportunity employer. We consider all qualified applicants without regard to race, color, religion, national origin, sex, sexual orientation, gender identity or expression, age, disability, marital status, family responsibilities, personal appearance, political affiliation, veteran status, genetic information, or any other characteristic protected by federal, District of Columbia, or Maryland law. If you need a reasonable accommodation at any point in the application or interview process, contact us at 800 800 2911 or Info@luahpartners.com and we will arrange it.</p></div></section>

      <section className="bg-brand-navy-light"><div className="mx-auto flex max-w-page flex-col gap-8 px-6 py-14 sm:px-12 sm:py-14 lg:flex-row lg:items-center lg:justify-between lg:gap-14"><div className="max-w-4xl text-white"><h2 className="text-3xl font-bold leading-[1.3] sm:text-[32px]">Not looking for a job — but have a property?</h2><p className="mt-4 text-base leading-[1.8]">We buy, lease, and manage residential property across DC and Maryland, and we take on home improvement work for homeowners directly.</p></div><Link href="/contact" className="inline-flex min-h-12 shrink-0 items-center gap-3 self-start border border-brand-gold-light bg-brand-gold-light px-6 py-3 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-gold lg:self-auto">Talk to us<Arrow /></Link></div></section>
    </>
  );
}
