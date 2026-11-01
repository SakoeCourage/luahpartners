import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { FeedbackForm } from "@/feature-slices/feedback/FeedbackForm";

export const metadata: Metadata = {
  title: "Feedback | Luah Partners",
  description: null,
  alternates: { canonical: "https://www.luahpartners.com/feedback" },
  openGraph: {
    title: "Feedback | Luah Partners",
    url: "https://www.luahpartners.com/feedback",
    siteName: "Luah Partners",
    type: "website",
    images: [{ url: "https://www.luahpartners.com/images/home-improvement-og.png", width: 2500, height: 1330 }],
  },
  twitter: { card: "summary_large_image", title: "Feedback | Luah Partners", images: ["https://www.luahpartners.com/images/home-improvement-og.png"] },
};

function Arrow() { return <Image src="/images/listing-arrow-right.svg" alt="" aria-hidden="true" width={16} height={16} />; }

function DetailCard({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return <article className="border-t border-brand-sand py-7"><p className="text-[13px] font-bold text-brand-gold">{number}</p><h3 className="mt-4 text-[21px] font-bold leading-[1.4] text-brand-navy">{title}</h3><div className="mt-4 text-base leading-[1.8] text-brand-muted">{children}</div></article>;
}

function ContactCard() {
  return <div className="bg-brand-surface p-7"><h3 className="text-2xl font-bold text-brand-navy">Talk to Luah Partners</h3><dl className="mt-5 space-y-5 text-[15px] leading-[1.65] text-brand-navy"><div><dt className="text-xs font-bold uppercase tracking-tag text-brand-gold">Telephone</dt><dd className="mt-[5px]"><a href="tel:8008002911">800 800 2911</a></dd></div><div><dt className="text-xs font-bold uppercase tracking-tag text-brand-gold">Email</dt><dd className="mt-[5px]"><a href="mailto:info@luahpartners.com">Info@luahpartners.com</a></dd></div><div><dt className="text-xs font-bold uppercase tracking-tag text-brand-gold">Office</dt><dd className="mt-[5px]">818 18th St NW, Suite 810 – 1323<br />Washington, DC 20006</dd></div><div><dt className="text-xs font-bold uppercase tracking-tag text-brand-gold">Hours</dt><dd className="mt-[5px]">Mon–Fri 10:00 AM–6:00 PM ET<br />Sat 10:00 AM–3:00 PM ET<br />Sunday: Closed</dd></div><div><dt className="text-xs font-bold uppercase tracking-tag text-brand-gold">Fax</dt><dd className="mt-[5px]">202 803 6801</dd></div></dl><p className="mt-5 text-sm leading-[1.8] text-brand-muted">Five business days, if you&apos;ve asked us to follow up.</p></div>;
}

export default function FeedbackPage() {
  return <>
    <section className="bg-brand-surface"><div className="mx-auto max-w-page px-6 py-14 sm:px-12 sm:py-16"><p className="text-xs font-bold uppercase tracking-tag text-brand-gold">Feedback</p><h1 className="mt-6 max-w-[1050px] text-4xl font-bold leading-[1.12] text-brand-navy sm:text-5xl lg:text-[56px]">Tell us how we did — good or bad</h1><p className="mt-6 max-w-[900px] text-base leading-[1.75] text-brand-navy sm:text-[17px]">If someone on our team took care of you, we want to know who and what they did. If we fell short, we want to know that even more — a complaint we never hear is a problem we never fix. Residents, property owners, home improvement clients, applicants, and vendors are all welcome to use this page.</p></div></section>

    <section className="bg-white"><div className="mx-auto max-w-page px-6 py-14 sm:px-12 sm:py-16"><h2 className="text-3xl font-bold leading-[1.25] text-brand-navy sm:text-4xl">Something went right. Something went wrong.</h2><div className="mt-8 grid gap-x-6 md:grid-cols-2"><DetailCard number="01" title="Compliments & reviews"><p>Name the person. A maintenance tech who showed up when they said they would, a leasing agent who explained the lease line by line, a crew that left the site clean — we pass every compliment to the person and their supervisor, and it goes in their file.</p><p className="mt-5">If you&apos;re willing to have your words quoted publicly, check the permission box on the form. We never publish feedback without asking first.</p></DetailCard><DetailCard number="02" title="Concerns & complaints">A repair that dragged, a charge you don&apos;t understand, a call that never came back, someone who treated you poorly — tell us plainly. You will not be penalized for complaining, and raising a concern here has no effect on your lease, your application, or your contract with us.</DetailCard></div></div></section>

    <section className="bg-brand-surface"><div className="mx-auto max-w-page px-6 py-14 sm:px-12 sm:py-16"><h2 className="text-3xl font-bold leading-[1.25] text-brand-navy sm:text-4xl">Please don&apos;t use this page for urgent matters</h2><div className="mt-8 space-y-5 text-base leading-[1.8] text-brand-muted"><p>Emergency maintenance — no heat, flooding, gas odor, no power, anything unsafe: call <a className="text-brand-navy underline underline-offset-2" href="tel:8008002911">800 800 2911</a> and follow the emergency prompt, available 24 hours. This form is not monitored around the clock.</p><p>A routine repair request belongs with property management, not here — call us or email <a className="text-brand-navy underline underline-offset-2" href="mailto:info@luahpartners.com">Info@luahpartners.com</a> so it enters the maintenance queue and gets tracked.</p><p>A billing dispute is handled under our <Link href="/refund-cancellation" className="text-brand-navy underline underline-offset-2">Refund &amp; Cancellation Policy</Link>, which sets out timelines we&apos;re held to. You&apos;re welcome to send feedback here as well.</p><p>A life-threatening emergency — call 911 first.</p></div></div></section>

    <section className="bg-brand-surface"><div className="mx-auto max-w-page px-6 py-14 sm:px-12 sm:py-16"><p className="text-xs font-bold uppercase tracking-tag text-brand-gold">Your details</p><h2 className="mt-8 text-3xl font-bold leading-[1.25] text-brand-navy sm:text-4xl">Send us your feedback</h2><div className="mt-8 grid gap-10 lg:grid-cols-[390px_minmax(0,1fr)] lg:gap-16"><aside><p className="text-base leading-[1.8] text-brand-muted">Everything here is read by a person, not a queue. Name is optional; email is required on this form.</p><div className="mt-6"><ContactCard /></div></aside><FeedbackForm /></div></div></section>

    <section className="bg-white"><div className="mx-auto max-w-page px-6 py-14 sm:px-12 sm:py-16"><h2 className="text-3xl font-bold leading-[1.25] text-brand-navy sm:text-4xl">What we do with what you send</h2><div className="mt-8 grid gap-x-6 md:grid-cols-2"><DetailCard number="01" title="A person reads it">Every submission is read. Compliments go to the person named and their supervisor.</DetailCard><DetailCard number="02" title="We look into it">Concerns go to whoever can actually fix them, with the file, the invoices, and the history pulled.</DetailCard><DetailCard number="03" title="You hear back">If you asked for follow-up, a person responds within five business days — even if the answer is still in progress.</DetailCard><DetailCard number="04" title="It changes something">Patterns get fixed at the policy level, not just the one case. That&apos;s the point of asking.</DetailCard></div></div></section>

    <section className="bg-brand-surface"><div className="mx-auto max-w-page px-6 py-14 sm:px-12 sm:py-16"><h2 className="text-3xl font-bold leading-[1.25] text-brand-navy sm:text-4xl">If we don&apos;t resolve it</h2><div className="mt-8 space-y-5 text-base leading-[1.8] text-brand-muted"><p>Sending feedback to us is not a substitute for your legal rights, and it does not waive any of them. If your concern involves housing discrimination, a reasonable accommodation, habitability, or a security deposit, you may take it directly to the appropriate federal, District of Columbia, or Maryland agency at any time — before, during, or after talking to us. You do not need our permission and you do not have to come to us first.</p><p>Our fair housing commitments and how to request a reasonable accommodation are set out on our <Link href="/accessibility-fair-housing" className="text-brand-navy underline underline-offset-2">Accessibility &amp; Fair Housing</Link> page. Retaliating against someone for raising a concern is against our policy and against the law.</p></div></div></section>

    <section className="bg-brand-navy-light"><div className="mx-auto flex max-w-page flex-col gap-8 px-6 py-14 text-white sm:px-12 sm:py-14 lg:flex-row lg:items-center lg:justify-between lg:gap-14"><div className="max-w-4xl"><h2 className="text-3xl font-bold leading-[1.3] sm:text-[32px]">Would rather just talk to someone?</h2><p className="mt-4 text-base leading-[1.8]">Call 800 800 2911 during business hours and ask for whoever handles your property — or use the contact page and we&apos;ll route it.</p></div><Link href="/contact" className="inline-flex min-h-12 shrink-0 items-center gap-3 self-start border border-brand-gold-light bg-brand-gold-light px-6 py-3 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-gold lg:self-auto">Contact us<Arrow /></Link></div></section>
  </>;
}
