import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility & Fair Housing | Luah Partners",
  description: null,
  alternates: {
    canonical: "https://www.luahpartners.com/accessibility-fair-housing",
  },
  openGraph: {
    title: "Accessibility & Fair Housing | Luah Partners",
    url: "https://www.luahpartners.com/accessibility-fair-housing",
    siteName: "Luah Partners",
    type: "website",
    images: [
      {
        url: "https://www.luahpartners.com/images/home-improvement-og.png",
        width: 2500,
        height: 1330,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accessibility & Fair Housing | Luah Partners",
    images: ["https://www.luahpartners.com/images/home-improvement-og.png"],
  },
};

const policyLinks = [
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Refund & Cancellation", href: "/refund-cancellation" },
  {
    label: "Accessibility & Fair Housing",
    href: "/accessibility-fair-housing",
  },
];

const policySections = [
  {
    number: "01",
    id: "equal-housing-opportunity",
    title: "Equal Housing Opportunity",
    body:
      "Luah Partners, Inc. is an Equal Housing Opportunity company. We comply with the federal Fair Housing Act, the District of Columbia Human Rights Act, and Maryland fair housing law. We do not refuse to rent or sell, set different terms, or otherwise discriminate on the basis of race, color, religion, national origin, sex, familial status, disability, age, marital status, personal appearance, sexual orientation, gender identity or expression, family responsibilities, matriculation, political affiliation, source of income, or any other characteristic protected by applicable law.",
  },
  {
    number: "02",
    id: "reasonable-accommodations",
    title: "Reasonable accommodations",
    body:
      "Residents and applicants with disabilities may request a reasonable accommodation in rules, policies, practices, or services, or a reasonable modification to a dwelling. Submit requests to Info@luahpartners.com or 800 800 2911. We respond to accommodation requests promptly and treat them confidentially.",
  },
  {
    number: "03",
    id: "website-accessibility",
    title: "Website accessibility",
    body:
      "We work to keep luahpartners.com usable by everyone, including people who use screen readers, keyboard navigation, or magnification, and we aim to meet WCAG 2.1 Level AA. If any part of this site is a barrier to you, tell us what you were trying to do and we will provide the information or complete the transaction with you by phone during business hours.",
  },
  {
    number: "04",
    id: "reporting-a-barrier",
    title: "Reporting a barrier",
    body:
      "Call 800 800 2911, fax 202 803 6801, or email Info@luahpartners.com. We acknowledge accessibility reports within one business day.",
  },
  {
    number: "05",
    id: "licensing",
    title: "Licensing",
    body:
      "Luah Partners, Inc. is licensed and bonded for the services it performs and is registered to do business in the State of Maryland and the District of Columbia. Licensing details are available on request.",
  },
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

export default function AccessibilityFairHousingPage() {
  return (
    <>
      <section className="bg-brand-surface">
        <div className="mx-auto max-w-page px-6 py-14 sm:px-12 sm:py-16">
          <p className="text-xs font-bold uppercase tracking-tag text-brand-gold-light">
            Legal &amp; Policies
          </p>
          <h1 className="mt-6 text-4xl font-bold leading-[1.12] text-brand-navy sm:text-5xl lg:text-[56px]">
            Accessibility &amp; Fair Housing
          </h1>
          <p className="mt-6 text-sm font-medium text-brand-muted">
            Last updated July 31, 2026 · Luah Partners, Inc.
          </p>
        </div>
      </section>

      <nav
        aria-label="Legal and policy pages"
        className="border-y border-brand-sand bg-white"
      >
        <div className="mx-auto flex max-w-page min-w-max items-center gap-7 px-6 py-[17px] text-sm sm:px-12 sm:gap-9">
          {policyLinks.map((link) => {
            const isCurrent = link.href === "/accessibility-fair-housing";

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isCurrent ? "page" : undefined}
                className={`whitespace-nowrap transition-colors ${isCurrent
                  ? "font-bold text-brand-gold-light"
                  : "text-brand-muted hover:text-brand-navy"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>

      <section className="bg-white">
        <div className="mx-auto grid max-w-page gap-10 px-6 py-14 sm:px-12 sm:py-16 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16">
          <aside className="self-start lg:sticky lg:top-36">
            <nav aria-label="On this page">
              <p className="text-xs font-bold uppercase tracking-tag text-brand-gold-light">
                On this page
              </p>
              <ol className="mt-4 space-y-4 text-sm">
                {policySections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="inline-flex gap-2 text-brand-muted transition-colors hover:text-brand-navy"
                    >
                      <span className="font-medium">{section.number}</span>
                      <span>{section.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="mt-5 border-t border-brand-sand pt-5 text-sm leading-[1.65] text-brand-muted">
              <p className="font-semibold text-brand-navy">Questions?</p>
              <a
                className="mt-1 block transition-colors hover:text-brand-gold"
                href="tel:8008002911"
              >
                800 800 2911
              </a>
              <a
                className="mt-1 block transition-colors hover:text-brand-gold"
                href="mailto:info@luahpartners.com"
              >
                Info@luahpartners.com
              </a>
            </div>
          </aside>

          <div>
            {policySections.map((section) => (
              <article
                key={section.id}
                id={section.id}
                className="scroll-mt-36 border-t border-brand-sand py-6 first:pt-5 sm:py-7"
              >
                <h2 className="text-2xl font-bold leading-[1.3] text-brand-navy sm:text-[23px]">
                  <span className="mr-2">{section.number}</span>
                  {section.title}
                </h2>
                <p className="mt-5 text-[15px] leading-[1.7] text-brand-muted sm:text-base">
                  {section.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-navy-light">
        <div className="mx-auto flex max-w-page flex-col gap-8 px-6 py-12 sm:px-12 sm:py-[52px] lg:flex-row lg:items-center lg:justify-between lg:gap-14">
          <div className="text-white">
            <h2 className="text-3xl font-bold leading-[1.3] sm:text-[32px]">
              Questions about this policy?
            </h2>
            <p className="mt-4 text-base leading-[1.8] text-[#dfe5ec]">
              800 800 2911 · Info@luahpartners.com
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex min-h-12 shrink-0 items-center gap-3 self-start border border-brand-gold-light bg-brand-gold-light px-6 py-3 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-gold lg:self-auto"
          >
            Contact our office
            <Arrow />
          </Link>
        </div>
      </section>
    </>
  );
}
