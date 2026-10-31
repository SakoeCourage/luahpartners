import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | Luah Partners",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <section className="flex min-h-[640px] flex-col items-center bg-brand-surface px-6 py-24 text-center sm:px-12 sm:py-28">
      <p className="text-sm font-bold text-brand-gold-light">ERROR 404</p>
      <span aria-hidden="true" className="mt-8 h-0.5 w-12 bg-brand-gold-light" />
      <h1 className="mt-8 text-5xl font-bold leading-[1.1] tracking-tight text-brand-navy sm:text-6xl lg:text-[64px]">
        You&apos;ve reached nowhere
      </h1>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-12 items-center gap-3 bg-brand-gold-light px-6 py-3 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-gold"
      >
        Back to Homepage
        <span aria-hidden="true" className="text-lg leading-none">→</span>
      </Link>
    </section>
  );
}
