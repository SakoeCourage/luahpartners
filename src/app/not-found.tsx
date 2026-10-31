import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | Luah Partners",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="max-w-page mx-auto px-6 py-32 text-center">
      <span className="text-xs font-semibold uppercase tracking-tag text-brand-gold">Error 404</span>
      <h1 className="mt-3 text-5xl font-bold tracking-tight text-brand-navy">Page Not Found</h1>
      <p className="mt-4 text-base text-brand-muted max-w-md mx-auto">
        The page you are looking for doesn’t exist or has been moved.
      </p>
      <div className="mt-8">
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 text-sm font-semibold bg-brand-gold text-white hover:bg-brand-gold-dark transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
