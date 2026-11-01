import Link from "next/link";
import type { Metadata } from "next";
import { ContactForm } from "@/feature-slices/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Luah Partners",
  description: null,
  alternates: { canonical: "https://www.luahpartners.com/contact" },
  openGraph: {
    title: "Contact | Luah Partners",
    url: "https://www.luahpartners.com/contact",
    siteName: "Luah Partners",
    type: "website",
    images: ["https://www.luahpartners.com/images/home-improvement-og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Luah Partners",
    images: ["https://www.luahpartners.com/images/home-improvement-og.png"],
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-brand-surface">
        <div className="mx-auto max-w-page px-6 py-14 sm:px-12 sm:py-16">
          <p className="text-xs font-bold uppercase tracking-tag text-brand-gold">Contact</p>
          <h1 className="mt-6 max-w-[1050px] text-4xl font-bold leading-[1.12] text-brand-navy sm:text-5xl lg:text-[56px]">Reach a person, not a queue</h1>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-page px-6 py-14 sm:px-12 sm:py-16">
          <p className="text-xs font-bold uppercase tracking-tag text-brand-gold">Your details</p>
          <h2 className="mt-8 text-3xl font-bold leading-[1.25] text-brand-navy sm:text-4xl">Send us a message</h2>
          <div className="mt-8 grid gap-10 lg:grid-cols-[390px_minmax(0,1fr)] lg:gap-16">
            <aside>
              <p className="text-base leading-[1.8] text-brand-muted">We reply within one business day. Looking for a home to lease? See <Link href="/listing" className="underline underline-offset-2">current listings</Link>. Have a compliment or a complaint? Send <Link href="/feedback" className="underline underline-offset-2">feedback</Link>.</p>
              <div className="mt-6 bg-brand-surface p-7">
                <h3 className="text-2xl font-bold text-brand-navy">Talk to Luah Partners</h3>
                <dl className="mt-5 space-y-5 text-[15px] leading-[1.65] text-brand-navy">
                  <div><dt className="text-xs font-bold uppercase tracking-tag text-brand-gold">Telephone</dt><dd className="mt-[5px]"><a href="tel:8008002911">800 800 2911</a></dd></div>
                  <div><dt className="text-xs font-bold uppercase tracking-tag text-brand-gold">Email</dt><dd className="mt-[5px]"><a href="mailto:info@luahpartners.com">Info@luahpartners.com</a></dd></div>
                  <div><dt className="text-xs font-bold uppercase tracking-tag text-brand-gold">Office</dt><dd className="mt-[5px]">818 18th St NW, Suite 810 – 1323<br />Washington, DC 20006</dd></div>
                  <div><dt className="text-xs font-bold uppercase tracking-tag text-brand-gold">Hours</dt><dd className="mt-[5px]">Mon–Fri 10:00 AM–6:00 PM ET<br />Sat 10:00 AM–3:00 PM ET<br />Sunday: Closed</dd></div>
                  <div><dt className="text-xs font-bold uppercase tracking-tag text-brand-gold">Fax</dt><dd className="mt-[5px]">202 803 6801</dd></div>
                </dl>
                <p className="mt-5 text-sm leading-[1.8] text-brand-muted">Compliments and complaints: Something went right, or something went wrong? <Link href="/feedback" className="underline underline-offset-2">Share feedback →</Link></p>
              </div>
            </aside>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
