import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ListingAlertForm } from "@/feature-slices/listings/ListingAlertForm";

export const metadata: Metadata = {
  title: "Listings | Luah Partners",
  description: null,
  openGraph: {
    title: "Listings | Luah Partners",
    url: "https://www.luahpartners.com/listing",
    siteName: "Luah Partners",
    type: "website",
    images: ["https://www.luahpartners.com/images/luah-about-og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Listings | Luah Partners",
    images: ["https://www.luahpartners.com/images/luah-about-og.png"],
  },
};

type ListingStatus = "for-lease" | "coming-soon" | "under-renovation";

type ListingRecord = {
  id: string;
  status: ListingStatus;
  address: string;
  area: string;
  summary: string;
};

// This is the future API boundary. Replace the empty collection with fetched
// ListingRecord data without changing the surrounding page layout.
const listingRecords: ListingRecord[] = [];

const listingStages = [
  {
    number: "01",
    title: "For Lease",
    detail: "Move-in ready and accepting applications now.",
  },
  {
    number: "02",
    title: "Under Renovation",
    detail:
      "A property we own or manage, being renovated by our own crews before it’s offered.",
  },
  {
    number: "03",
    title: "Coming Soon",
    detail:
      "Under agreement or nearing completion — not yet accepting applications.",
  },
];

const leasingSteps = [
  {
    number: "01",
    title: "Posted here first",
    detail: "New availability appears on this page before it’s marketed anywhere else.",
  },
  {
    number: "02",
    title: "Tour and apply",
    detail:
      "Schedule a showing, then apply online under the same written criteria for every applicant.",
  },
  {
    number: "03",
    title: "Screening & decision",
    detail:
      "Credit, criminal, and rental history screening, with a written decision for every applicant.",
  },
  {
    number: "04",
    title: "Lease & move in",
    detail:
      "Sign a lease that meets DC or Maryland requirements, then coordinate move-in with our team.",
  },
];

function DetailCard({
  number,
  title,
  detail,
}: {
  number: string;
  title: string;
  detail: string;
}) {
  return (
    <article className="border-t border-brand-sand py-7">
      <p className="text-[13px] font-bold text-brand-gold">{number}</p>
      <h3 className="mt-4 text-[21px] font-bold leading-[1.4] text-brand-navy">
        {title}
      </h3>
      <p className="mt-4 text-base leading-[1.8] text-brand-muted">{detail}</p>
    </article>
  );
}

function ButtonArrow() {
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

function Availability({ records }: { records: ListingRecord[] }) {
  if (records.length === 0) {
    return (
      <div className="flex flex-col items-center border border-brand-sand bg-brand-surface px-6 py-12 text-center sm:p-12">
        <Image
          src="/images/listing-house.svg"
          alt=""
          aria-hidden="true"
          width={36}
          height={36}
        />
        <h2 className="mt-5 text-2xl font-bold text-brand-navy sm:text-[26px]">
          No homes are currently posted.
        </h2>
        <p className="mt-5 max-w-[660px] text-base leading-[1.8] text-brand-muted">
          Don&apos;t see what you&apos;re looking for yet? Join the notify list
          below and we&apos;ll email you the moment new availability goes live.
        </p>
        <a
          href="#notify"
          className="mt-5 inline-flex min-h-12 items-center gap-3 border border-brand-gold-light bg-brand-gold-light px-6 py-3 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-gold"
        >
          Notify me
          <ButtonArrow />
        </a>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {records.map((record) => (
        <article key={record.id} className="border border-brand-sand bg-white p-7">
          <p className="text-xs font-bold uppercase tracking-tag text-brand-gold">
            {record.status.replace("-", " ")}
          </p>
          <h2 className="mt-4 text-xl font-bold text-brand-navy">
            {record.address}
          </h2>
          <p className="mt-2 text-sm text-brand-muted">{record.area}</p>
          <p className="mt-5 text-base leading-7 text-brand-muted">
            {record.summary}
          </p>
        </article>
      ))}
    </div>
  );
}

export default function ListingsPage() {
  return (
    <>
      <section className="bg-brand-surface">
        <div className="max-w-page mx-auto px-6 py-14 sm:px-12 sm:py-16">
          <p className="text-xs font-bold uppercase tracking-tag text-brand-gold">
            Listings
          </p>
          <h1 className="mt-6 max-w-[1050px] text-4xl font-bold leading-[1.12] text-brand-navy sm:text-5xl lg:text-[56px]">
            Homes for lease, and homes on the way
          </h1>
          <p className="mt-6 max-w-[900px] text-base leading-[1.75] text-brand-navy sm:text-[17px]">
            Luah Partners leases and manages residential properties across
            Washington, DC and Maryland. This page lists homes currently
            available, along with properties we&apos;ve acquired and are renovating
            before they reach the market.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-page mx-auto px-6 py-14 sm:px-12 sm:py-16">
          <div className="grid gap-x-6 md:grid-cols-3">
            {listingStages.map((stage) => (
              <DetailCard key={stage.number} {...stage} />
            ))}
          </div>
          <h2 className="mt-10 text-3xl font-bold leading-[1.25] text-brand-navy sm:text-4xl">
            How we list properties
          </h2>
          <div className="mt-8 max-w-[873px] space-y-7 text-base leading-[1.8] text-brand-muted">
            <p>
              Available properties appear below as “For Lease” once they&apos;re
              move-in ready and accepting applications. Properties currently
              under renovation are marked “Coming Soon” as work nears
              completion. Don&apos;t see what you&apos;re looking for yet? Join the
              notify list below and we&apos;ll email you the moment new availability
              goes live.
            </p>
            <p>
              Properties move from “Coming Soon” to “For Lease” as renovations
              wrap up and units become move-in ready. Want to know the moment
              something new opens up? Join the notify list below.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-page mx-auto px-6 py-14 sm:px-12 sm:py-16">
          <Availability records={listingRecords} />
        </div>
      </section>

      <section className="bg-brand-surface">
        <div className="max-w-page mx-auto px-6 py-14 sm:px-12 sm:py-16">
          <p className="text-xs font-bold uppercase tracking-tag text-brand-gold">
            How leasing works
          </p>
          <h2 className="mt-8 text-3xl font-bold leading-[1.25] text-brand-navy sm:text-4xl">
            From listed to lease-signed
          </h2>
          <div className="mt-8 grid gap-x-6 md:grid-cols-2">
            {leasingSteps.map((step) => (
              <DetailCard key={step.number} {...step} />
            ))}
          </div>
          <p className="mt-8 text-base leading-[1.8] text-brand-muted">
            Application and screening fees are published on our Services page.
          </p>
        </div>
      </section>

      <section id="notify" className="bg-brand-surface">
        <div className="max-w-page mx-auto px-6 py-14 sm:px-12 sm:py-16">
          <p className="text-xs font-bold uppercase tracking-tag text-brand-gold">
            Your details
          </p>
          <h2 className="mt-8 text-3xl font-bold leading-[1.25] text-brand-navy sm:text-4xl">
            Be the first to know when a home is ready
          </h2>
          <div className="mt-8 grid gap-10 lg:grid-cols-[390px_minmax(0,1fr)] lg:gap-16">
            <aside>
              <p className="text-base leading-[1.8] text-brand-muted">
                Tell us what you&apos;re looking for and we&apos;ll email you as soon as
                a matching home is posted.
              </p>
              <div className="mt-6 bg-brand-surface p-7">
                <h3 className="text-2xl font-bold text-brand-navy">
                  Talk to Luah Partners
                </h3>
                <dl className="mt-5 space-y-5 text-[15px] leading-[1.65] text-brand-navy">
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-tag text-brand-gold">
                      Telephone
                    </dt>
                    <dd className="mt-[5px]">800 800 2911</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-tag text-brand-gold">
                      Email
                    </dt>
                    <dd className="mt-[5px]">Info@luahpartners.com</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-tag text-brand-gold">
                      Office
                    </dt>
                    <dd className="mt-[5px]">
                      818 18th St NW, Suite 810 – 1323
                      <br />
                      Washington, DC 20006
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-tag text-brand-gold">
                      Hours
                    </dt>
                    <dd className="mt-[5px]">
                      Mon–Fri 10:00 AM–6:00 PM ET
                      <br />
                      Sat 10:00 AM–3:00 PM ET
                      <br />
                      Sunday: Closed
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-tag text-brand-gold">
                      Fax
                    </dt>
                    <dd className="mt-[5px]">202 803 6801</dd>
                  </div>
                </dl>
                <p className="mt-5 text-sm leading-[1.8] text-brand-muted">
                  One business day on every inquiry.
                </p>
              </div>
            </aside>

            <ListingAlertForm />
          </div>
        </div>
      </section>

      <section className="bg-brand-navy-light">
        <div className="max-w-page mx-auto flex flex-col gap-8 px-6 py-14 sm:px-12 lg:flex-row lg:items-center lg:justify-between lg:gap-14">
          <div className="max-w-4xl text-white">
            <h2 className="text-3xl font-bold leading-[1.3] sm:text-[32px]">
              Own a property you&apos;d like leased or managed?
            </h2>
            <p className="mt-4 text-base leading-[1.8]">
              We lease and manage for third-party owners across DC and Maryland,
              with fees and terms published on our Services page.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex min-h-12 shrink-0 items-center gap-3 self-start border border-brand-gold-light bg-brand-gold-light px-6 py-3 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-gold lg:self-auto"
          >
            Talk to us
            <ButtonArrow />
          </Link>
        </div>
      </section>
    </>
  );
}
