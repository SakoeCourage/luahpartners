import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund & Cancellation | Luah Partners",
  description: null,
  alternates: {
    canonical: "https://www.luahpartners.com/refund-cancellation",
  },
  openGraph: {
    title: "Refund & Cancellation | Luah Partners",
    url: "https://www.luahpartners.com/refund-cancellation",
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
    title: "Refund & Cancellation | Luah Partners",
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
    id: "summary",
    title: "Summary",
    body:
      "Luah Partners provides real estate and property management services. Because payments made through this site are applied to rent, deposits, fees, and invoices under a written agreement, refunds are governed by that agreement and by applicable law. The rules below tell you exactly what to expect and how to reach us.",
  },
  {
    number: "02",
    id: "duplicate-and-erroneous-payments",
    title: "Duplicate and erroneous payments",
    body:
      "If you are charged twice for the same obligation, or are charged an amount you did not authorize, contact us within 60 days of the charge. Verified duplicate or erroneous charges are refunded in full to the original payment method. We initiate the refund within 5 business days of verification; your bank or card issuer typically posts it within 5 to 10 additional business days.",
  },
  {
    number: "03",
    id: "rent-payments",
    title: "Rent payments",
    body:
      "Rent that has been correctly applied to your ledger is not refundable, because it satisfies an obligation you owe under your lease. Overpayments are either credited to your ledger for the next period or refunded at your request.",
  },
  {
    number: "04",
    id: "security-deposits",
    title: "Security deposits",
    body:
      "Security deposits are held and returned in accordance with the law of the jurisdiction where the property is located — the District of Columbia or Maryland — and with your lease. After you vacate, the deposit, together with any interest required by law and an itemized statement of lawful deductions, is returned within the period that law requires. Damage beyond ordinary wear and tear and unpaid amounts under the lease may be deducted.",
  },
  {
    number: "05",
    id: "application-fees",
    title: "Application fees",
    body:
      "Application fees cover the cost of screening and are non-refundable once screening has begun. If you cancel an application before screening starts, the fee is refunded in full. If we are unable to process your application for a reason within our control, the fee is refunded in full.",
  },
  {
    number: "06",
    id: "holding-and-reservation-deposits",
    title: "Holding and reservation deposits",
    body:
      "A holding deposit taken to reserve a unit is applied to your first payment if you take occupancy. If you withdraw after the unit has been taken off the market, the deposit may be retained to the extent permitted by your reservation agreement and applicable law. If we withdraw the unit, the deposit is refunded in full.",
  },
  {
    number: "07",
    id: "management-and-service-fees",
    title: "Management and service fees",
    body:
      "Recurring management fees are earned as services are performed and are not refundable for periods already served. Either party may terminate a management agreement in accordance with its notice provisions; fees for any period paid in advance and not yet served are prorated and refunded.",
  },
  {
    number: "08",
    id: "cancellation",
    title: "Cancellation",
    body:
      "To cancel a scheduled service, an application, or a management engagement, email Info@luahpartners.com or call 800 800 2911 during business hours. Cancellations are effective when we confirm them in writing. Cancellation of a lease is governed by the lease itself and by applicable landlord-tenant law.",
  },
  {
    number: "09",
    id: "how-to-request-a-refund",
    title: "How to request a refund",
    body:
      "Email Info@luahpartners.com or call 800 800 2911 with your name, property address and unit, the payment date, and the amount. We acknowledge every request within one business day and give you a written decision within five business days. Approved refunds are returned to the original payment method through Stripe; we do not issue refunds by cash, wire to an individual, gift card, or peer-to-peer payment app.",
  },
  {
    number: "10",
    id: "disputes",
    title: "Disputes",
    body:
      "If you believe a charge is wrong, please contact us first — we can usually resolve it faster than a card dispute. You retain every right you have under your card network's rules and under applicable law. Contact: Luah Partners, Inc., 818 18th St NW, Suite 810 – 1323, Washington, DC 20006 · 800 800 2911 · Info@luahpartners.com",
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

export default function RefundCancellationPage() {
  return (
    <>
      <section className="bg-brand-surface">
        <div className="mx-auto max-w-page px-6 py-14 sm:px-12 sm:py-16">
          <p className="text-xs font-bold uppercase tracking-tag text-brand-gold-light">
            Legal &amp; Policies
          </p>
          <h1 className="mt-6 text-4xl font-bold leading-[1.12] text-brand-navy sm:text-5xl lg:text-[56px]">
            Refund &amp; Cancellation Policy
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
            const isCurrent = link.href === "/refund-cancellation";

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isCurrent ? "page" : undefined}
                className={`whitespace-nowrap transition-colors ${
                  isCurrent
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
