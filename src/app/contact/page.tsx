import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { CustomSelect } from "@/components/CustomSelect";
import { InternationalPhoneInput } from "@/components/InternationalPhoneInput";

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

const audienceOptions = [
  { value: "prospective-resident", label: "Prospective resident" },
  { value: "current-resident", label: "Current resident" },
  { value: "property-owner", label: "Property owner" },
  { value: "seller-landowner", label: "Seller or Landowner" },
  { value: "vendor", label: "Vendor" },
];

const inputClassName = "mt-[10px] min-h-[52px] w-full border border-brand-sand px-4 text-sm font-normal text-brand-navy placeholder:text-brand-muted outline-none focus:border-brand-gold";

function Arrow() {
  return <Image src="/images/listing-arrow-right.svg" alt="" aria-hidden="true" width={16} height={16} />;
}

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

            <form className="border border-brand-sand bg-white p-6 sm:p-8">
              <p className="text-xs text-brand-muted">* Required fields</p>
              <div className="mt-6 space-y-6">
                <label className="block text-sm font-semibold text-brand-navy">Name *<input name="name" required placeholder="Enter name" className={inputClassName} /></label>
                <label className="block text-sm font-semibold text-brand-navy">Email *<input name="email" type="email" required placeholder="you@example.com" className={inputClassName} /></label>
                <label className="block text-sm font-semibold text-brand-navy">Phone (optional)<span className="mt-[10px] block font-normal"><InternationalPhoneInput id="contact-phone" name="phone" ariaLabel="Phone number" /></span></label>
                <div className="block text-sm font-semibold text-brand-navy"><span id="contact-audience-label">I am a... (optional)</span><CustomSelect ariaLabelledBy="contact-audience-label" defaultValue="prospective-resident" name="audience" options={audienceOptions} /><span className="mt-[10px] block text-xs font-normal leading-[1.7] text-brand-muted">Prospective resident · Current resident · Property owner · Seller or Landowner · Vendor</span></div>
                <label className="block text-sm font-semibold text-brand-navy">Message (optional)<textarea name="message" placeholder="How can we help" className={`${inputClassName} min-h-[120px] resize-y p-4`} /></label>
              </div>
              <button type="submit" className="mt-6 inline-flex min-h-12 items-center gap-3 border border-brand-gold-light bg-brand-gold-light px-6 py-3 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-gold">Send message<Arrow /></button>
              <p className="mt-6 text-[13px] leading-[1.8] text-brand-muted">By submitting you agree to our <Link href="/privacy-policy" className="underline underline-offset-2">Privacy Policy</Link>. We do not sell your information.</p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
