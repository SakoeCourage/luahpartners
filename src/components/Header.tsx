"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { PhoneIcon, MailIcon, PinIcon } from "@/components/icons";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Listings", href: "/listing" },
  { label: "Home Improvement", href: "/home-improvement" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full font-sans">
      {/* 1. Top Utility Contact Bar */}
      <div className="bg-brand-navy text-brand-slate text-xs py-2 border-b border-white/5">
        <div className="max-w-page mx-auto px-6 sm:px-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          {/* Left contact info */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href="tel:8008002911"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <PhoneIcon size={14} className="text-brand-slate shrink-0" />
              <span>800 800 2911</span>
            </a>

            <a
              href="mailto:info@luahpartners.com"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <MailIcon size={14} className="text-brand-slate shrink-0" />
              <span>info@luahpartners.com</span>
            </a>

            <div className="inline-flex items-center gap-1.5 hidden md:flex">
              <PinIcon size={14} className="text-brand-slate shrink-0" />
              <span>Washington, DC</span>
            </div>
          </div>

          {/* Right operating hours */}
          <div className="text-brand-slate/90 hidden sm:block text-[11px] sm:text-xs">
            <span>Mon – Fri 10 AM–6 PM ET · Sat 10 AM–3 PM ET</span>
          </div>
        </div>
      </div>

      {/* 2. Main Sticky Navigation */}
      <nav className="bg-white border-b border-brand-sand/60 sticky top-0 z-50">
        <div className="max-w-page mx-auto px-6 sm:px-12 h-[88px] flex items-center justify-between gap-4">
          {/* Brand Logo & Tagline */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-11 h-11 relative shrink-0 overflow-hidden bg-brand-navy flex items-center justify-center">
              <Image
                src="/images/Luah_Partners_logo.png"
                alt="Luah Partners Logo"
                width={44}
                height={44}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[18px] font-semibold text-brand-navy tracking-tight leading-tight group-hover:text-brand-gold transition-colors">
                Luah Partners
              </span>
              <span className="text-[10px] uppercase tracking-brand text-brand-muted font-medium mt-0.5">
                Every Home, a Blessing
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`border-b-2 py-2.5 text-sm transition-colors ${
                  pathname === link.href
                    ? "border-brand-gold-light font-bold text-brand-navy"
                    : "border-transparent font-medium text-brand-navy hover:text-brand-gold"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Make a Payment CTA Button */}
          <div className="hidden lg:block shrink-0">
            <Link
              href="/make-payment"
              className="inline-flex min-h-12 items-center justify-center bg-brand-gold-light px-6 py-3 text-sm font-semibold text-brand-dark transition-colors hover:bg-brand-gold"
            >
              Make a payment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <Link
              href="/make-payment"
              className="inline-flex items-center justify-center px-3 py-1.5 bg-brand-gold-light text-brand-dark font-semibold text-xs"
            >
              Pay
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-brand-navy hover:text-brand-gold focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-brand-sand/60 px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-brand-navy hover:text-brand-gold border-b border-brand-sand/30"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/make-payment"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-brand-gold-light text-brand-dark font-semibold text-sm"
              >
                Make a payment
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
