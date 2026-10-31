import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Luah Partners",
  description:
    "Learn about our Real Estate Rental Agency, our values, and our commitment to providing exceptional rental services. Discover more about us today.",
  openGraph: {
    title: "About | Luah Partners",
    description:
      "Learn about our Real Estate Rental Agency, our values, and our commitment to providing exceptional rental services. Discover more about us today.",
    url: "https://www.luahpartners.com/about",
    siteName: "Luah Partners",
    type: "website",
    images: ["https://www.luahpartners.com/images/luah-about-og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Luah Partners",
    description:
      "Learn about our Real Estate Rental Agency, our values, and our commitment to providing exceptional rental services. Discover more about us today.",
    images: ["https://www.luahpartners.com/images/luah-about-og.png"],
  },
};

const companyFacts = [
  {
    number: "01",
    title: "Legal entity",
    detail: [
      "Luah Partners, Inc.",
      "Registered in the State of Maryland and the District of Columbia.",
    ],
  },
  {
    number: "02",
    title: "Principal office",
    detail: ["818 18th St NW, Suite 810 – 1323", "Washington, DC 20006"],
  },
  {
    number: "03",
    title: "Business hours",
    detail: ["Mon–Fri 10:00 AM – 6:00 PM ET", "Sat 10:00 AM – 3:00 PM ET"],
  },
  {
    number: "04",
    title: "Status",
    detail: ["Licensed and bonded · Equal Housing Opportunity."],
  },
  {
    number: "05",
    title: "Contact",
    detail: ["Tel 800 800 2911", "Fax 202 803 6801", "Info@luahpartners.com"],
  },
  {
    number: "06",
    title: "Our name",
    detail: ["Luah Partners", "Every Home, a Blessing."],
  },
];

const commitments = [
  {
    number: "01",
    title: "Underwrite conservatively",
    detail: "Deals are sized on rents and costs we can defend today, not on assumed appreciation.",
  },
  {
    number: "02",
    title: "Own the operations",
    detail:
      "We manage what we own, so quality problems reach the decision-maker directly.",
  },
  {
    number: "03",
    title: "Document everything",
    detail:
      "Every dollar in and out is supported by an invoice, a statement, and a bank record.",
  },
  {
    number: "04",
    title: "Treat residents fairly",
    detail:
      "Consistent written criteria, plain-language leases, and a real person on the phone.",
  },
];

function DetailCard({
  number,
  title,
  detail,
}: {
  number: string;
  title: string;
  detail: string[] | string;
}) {
  const lines = Array.isArray(detail) ? detail : [detail];

  return (
    <article className="border-t border-brand-sand py-7">
      <p className="text-[13px] font-bold text-brand-gold">{number}</p>
      <h3 className="mt-4 text-[21px] font-bold leading-[1.4] text-brand-navy">
        {title}
      </h3>
      <div className="mt-4 space-y-0 text-base leading-[1.8] text-brand-muted">
        {lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </article>
  );
}

export default function AboutPage() {
  return (
    <>
      <section className="bg-brand-surface">
        <div className="max-w-page mx-auto px-6 py-14 sm:px-12 sm:py-16">
          <p className="text-xs font-bold uppercase tracking-tag text-brand-gold">
            About
          </p>
          <h1 className="mt-6 max-w-[660px] text-4xl font-bold leading-[1.12] text-brand-navy sm:text-5xl lg:text-[56px]">
            A disciplined operator in a market we know.
          </h1>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-page mx-auto grid gap-10 px-6 py-14 text-base leading-[1.8] text-brand-muted sm:px-12 sm:py-16 lg:grid-cols-2 lg:gap-[72px]">
          <div className="space-y-7">
            <p>
              Luah Partners, Inc. is a residential real estate company
              incorporated in the United States and registered to do business in
              Maryland and the District of Columbia. We acquire, own, finance,
              lease, and manage residential property, and we develop new
              housing — acquiring land, building single-family and multi-family
              dwellings, and bringing them to market.
            </p>
            <p>
              The company was formed to do one thing carefully rather than many
              things quickly. We work in a single region, underwrite
              conservatively, and hold what we build wherever the economics
              support it. Our management arm exists so that residents deal with
              the owner, not a chain of intermediaries.
            </p>
          </div>
          <p>
            We maintain the licensing, bonding, and insurance required for the
            work we perform, and we transact through regulated banking and
            payment partners with full documentation on every dollar received.
          </p>
        </div>
      </section>

      <section className="bg-brand-surface">
        <div className="max-w-page mx-auto px-6 py-14 sm:px-12 sm:py-16">
          <h2 className="text-3xl font-bold leading-[1.25] text-brand-navy sm:text-4xl">
            Company facts
          </h2>
          <div className="mt-8 grid gap-x-6 md:grid-cols-3">
            {companyFacts.map((fact) => (
              <DetailCard key={fact.number} {...fact} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-navy">
        <div className="max-w-page mx-auto grid items-center gap-10 px-6 py-12 sm:px-12 lg:grid-cols-12 lg:gap-0 lg:py-[34px]">
          <div className="flex justify-center lg:col-span-4">
            <Image
              src="/images/luah-about-mark.jpg"
              alt="Luah Partners brand mark"
              width={341}
              height={308}
              className="h-auto w-full max-w-[341px]"
            />
          </div>
          <div className="lg:col-span-8 lg:pl-10">
            <p className="text-xs font-bold uppercase tracking-tag text-brand-gold">
              Our name
            </p>
            <h2 className="mt-5 text-3xl font-bold leading-[1.25] text-white sm:text-4xl">
              Luah means blessing
            </h2>
            <div className="mt-6 max-w-3xl space-y-5 text-base leading-[1.8] text-white">
              <p>
                We chose the name because of what a home is supposed to be for
                the family inside it. Every home, a blessing — that is the
                standard we hold ourselves to on the properties we build, the
                ones we buy, and the ones we manage for other owners.
              </p>
              <p>
                The mark is an L cut from a solid block: a post and a foot, the
                two things every structure needs to stand.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-page mx-auto px-6 py-14 sm:px-12 sm:py-16">
          <p className="text-xs font-bold uppercase tracking-tag text-brand-gold">
            How we operate
          </p>
          <h2 className="mt-6 text-3xl font-bold leading-[1.25] text-brand-navy sm:text-4xl">
            Four commitments we hold ourselves to
          </h2>
          <div className="mt-8 grid gap-x-6 md:grid-cols-2">
            {commitments.map((commitment) => (
              <DetailCard key={commitment.number} {...commitment} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
