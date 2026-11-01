import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PaymentForm } from "@/components/forms/PaymentForm";

const paymentDescription = "All payments are collected in United States dollars (USD) and processed by Stripe. Luah Partners does not see or store your card or bank account numbers. Your statement will read LUAH PARTNERS.";

export const metadata: Metadata = {
  title: "Make Payment | Luah Partners",
  description: paymentDescription,
  alternates: { canonical: "https://www.luahpartners.com/make-payment" },
  openGraph: {
    title: "Make Payment | Luah Partners",
    description: paymentDescription,
    url: "https://www.luahpartners.com/make-payment",
    siteName: "Luah Partners",
    type: "website",
    images: ["https://www.luahpartners.com/images/home-improvement-og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Make Payment | Luah Partners",
    description: paymentDescription,
    images: ["https://www.luahpartners.com/images/home-improvement-og.png"],
  },
};

const paymentReasons = [
  { number: "01", title: "Rent", detail: "Pay monthly rent for a unit you currently lease from Luah Partners. Payments post to your ledger on the business day they are received. Partial payments do not waive amounts still due under your lease." },
  { number: "02", title: "Security Deposit", detail: "Pay a security deposit for a unit you have been approved for. Deposits are held and returned under District of Columbia or Maryland law and the terms of your lease." },
  { number: "03", title: "Application Fee", detail: "Pay the screening fee for a rental application. The fee is refundable in full if you cancel before screening begins." },
  { number: "04", title: "Invoice", detail: "Pay an invoice issued by Luah Partners — management fees, repair chargebacks, or another billed amount. Enter the invoice number in the reference field." },
];

const protections = [
  { number: "01", title: "Immediate receipt", detail: "A receipt is emailed immediately and your payment posts to your ledger the same business day." },
  { number: "02", title: "No convenience fee", detail: "We charge no surcharge or convenience fee — the amount you enter is the amount charged." },
  { number: "03", title: "Stripe checkout", detail: "Card and bank details are entered on Stripe’s PCI-DSS Level 1 certified checkout, not on our servers." },
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

export default function MakePaymentPage() {
  return (
    <>
      <section className="bg-brand-navy">
        <div className="mx-auto max-w-page px-6 py-14 sm:px-12 sm:py-16">
          <p className="text-xs font-bold uppercase tracking-tag text-brand-gold-light">Secure payments</p>
          <h1 className="mt-6 max-w-[1050px] text-4xl font-bold leading-[1.12] text-white sm:text-5xl lg:text-[56px]">Make a payment</h1>
          <p className="mt-6 max-w-[900px] text-base leading-[1.75] text-[#dfe5ec] sm:text-[17px]">All payments are collected in United States dollars (USD) and processed by Stripe. Luah Partners does not see or store your card or bank account numbers. Your statement will read <strong className="font-semibold text-white">LUAH PARTNERS</strong>.</p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-page px-6 py-14 sm:px-12 sm:py-16">
          <h2 className="text-3xl font-bold leading-[1.25] text-brand-navy sm:text-4xl">What are you paying for?</h2>
          <div className="mt-8 grid gap-x-6 md:grid-cols-2">{paymentReasons.map((reason) => <DetailCard key={reason.number} {...reason} />)}</div>
        </div>
      </section>

      <section className="bg-brand-surface">
        <div className="mx-auto max-w-page px-6 py-14 sm:px-12 sm:py-16">
          <p className="text-xs font-bold uppercase tracking-tag text-brand-gold">Your details</p>
          <h2 className="mt-8 text-3xl font-bold leading-[1.25] text-brand-navy sm:text-4xl">Your payment details</h2>
          <div className="mt-8 grid gap-10 lg:grid-cols-[390px_minmax(0,1fr)] lg:gap-16">
            <aside>
              <p className="text-base leading-[1.8] text-brand-muted">You will be taken to Stripe&apos;s secure, PCI-compliant checkout to enter payment details. By continuing you agree to our <Link href="/terms-of-service" className="underline underline-offset-2">Terms of Service</Link> and <Link href="/refund-cancellation" className="underline underline-offset-2">Refund &amp; Cancellation Policy</Link>.</p>
              <div className="mt-6 p-7">
                <h3 className="text-2xl font-bold text-brand-navy">Talk to Luah Partners</h3>
                <dl className="mt-5 space-y-5 text-[15px] leading-[1.65] text-brand-navy">
                  <div><dt className="text-xs font-bold uppercase tracking-tag text-brand-gold">Telephone</dt><dd className="mt-[5px]"><a href="tel:8008002911">800 800 2911</a></dd></div>
                  <div><dt className="text-xs font-bold uppercase tracking-tag text-brand-gold">Email</dt><dd className="mt-[5px]"><a href="mailto:info@luahpartners.com">Info@luahpartners.com</a></dd></div>
                  <div><dt className="text-xs font-bold uppercase tracking-tag text-brand-gold">Office</dt><dd className="mt-[5px]">818 18th St NW, Suite 810 – 1323<br />Washington, DC 20006</dd></div>
                  <div><dt className="text-xs font-bold uppercase tracking-tag text-brand-gold">Hours</dt><dd className="mt-[5px]">Mon–Fri 10:00 AM–6:00 PM ET<br />Sat 10:00 AM–3:00 PM ET<br />Sunday: Closed</dd></div>
                  <div><dt className="text-xs font-bold uppercase tracking-tag text-brand-gold">Fax</dt><dd className="mt-[5px]">202 803 6801</dd></div>
                </dl>
                <p className="mt-5 text-sm leading-[1.8] text-brand-muted">Your statement will read LUAH PARTNERS. All amounts are in United States dollars. Refunds, disputes, and cancellations follow our published <Link href="/refund-cancellation" className="underline underline-offset-2">Refund &amp; Cancellation Policy</Link>.</p>
              </div>
            </aside>

            <PaymentForm />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-page px-6 py-14 sm:px-12 sm:py-16">
          <h2 className="text-3xl font-bold leading-[1.25] text-brand-navy sm:text-4xl">How your payment is protected</h2>
          <div className="mt-8 grid gap-x-6 md:grid-cols-3">{protections.map((protection) => <DetailCard key={protection.number} {...protection} />)}</div>
        </div>
      </section>

      <section className="bg-brand-navy-light">
        <div className="mx-auto flex max-w-page flex-col gap-8 px-6 py-14 sm:px-12 sm:py-14 lg:flex-row lg:items-center lg:justify-between lg:gap-14">
          <div className="max-w-4xl text-white"><h2 className="text-3xl font-bold leading-[1.3] sm:text-[32px]">Questions about a charge?</h2><p className="mt-4 text-base leading-[1.8]">Call 800 800 2911 during business hours or email Info@luahpartners.com. We respond to billing questions within one business day and never require payment through gift cards, wire transfer to an individual, or cash apps.</p></div>
          <Link href="/contact" className="inline-flex min-h-12 shrink-0 items-center gap-3 self-start border border-brand-gold-light bg-brand-gold-light px-6 py-3 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-gold lg:self-auto">Contact us<Arrow /></Link>
        </div>
      </section>
    </>
  );
}
