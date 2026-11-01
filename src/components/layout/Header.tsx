"use client";

import { useEffect, useState } from "react";
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

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="w-full font-sans max-lg:fixed max-lg:inset-x-0 max-lg:top-0 max-lg:z-50">
      {/* 1. Top Utility Contact Bar */}
      <div className="relative z-20 hidden border-b border-white/5 bg-brand-navy py-2 text-xs text-brand-slate lg:block">
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
      <nav className="relative z-20 bg-white border-b border-brand-sand/60 lg:sticky lg:top-0 lg:z-50">
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
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="relative grid size-11 place-items-center border border-brand-sand bg-white text-brand-navy transition-colors duration-200 hover:border-brand-gold hover:text-brand-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
              aria-label="Toggle navigation menu"
              aria-controls="mobile-navigation"
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Menu</span>
              <span className={`absolute h-px w-5 bg-current transition-transform duration-200 ease-out ${mobileMenuOpen ? "rotate-45" : "-translate-y-1.5"}`} />
              <span className={`absolute h-px w-5 bg-current transition-opacity duration-150 ${mobileMenuOpen ? "opacity-0" : "opacity-100"}`} />
              <span className={`absolute h-px w-5 bg-current transition-transform duration-200 ease-out ${mobileMenuOpen ? "-rotate-45" : "translate-y-1.5"}`} />
            </button>
          </div>
        </div>

        {/* Full-screen mobile navigation */}
        <div
          id="mobile-navigation"
          aria-hidden={!mobileMenuOpen}
          className={`fixed inset-0 z-30 flex min-h-dvh flex-col bg-brand-navy px-6 py-6 text-white transition-[opacity,transform,visibility] duration-300 ease-out lg:hidden ${
            mobileMenuOpen
              ? "visible translate-y-0 opacity-100"
              : "pointer-events-none invisible translate-y-3 opacity-0"
          }`}
        >
          <div className="mx-auto flex w-full max-w-page items-center justify-between border-b border-white/20 pb-6">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3"
            >
              <div className="grid size-10 place-items-center border border-white/20 bg-brand-navy-light">
                <Image
                  src="/images/Luah_Partners_logo.png"
                  alt="Luah Partners"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="text-base font-semibold tracking-tight">Luah Partners</span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="relative grid size-11 place-items-center border border-white/30 text-white transition-colors duration-200 hover:border-brand-gold-light hover:text-brand-gold-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold-light"
              aria-label="Close navigation menu"
            >
              <span className="absolute h-px w-5 rotate-45 bg-current" />
              <span className="absolute h-px w-5 -rotate-45 bg-current" />
            </button>
          </div>
          <div className="mx-auto flex w-full max-w-page flex-1 flex-col justify-center py-10">
            <p className="text-xs font-bold uppercase tracking-tag text-brand-gold-light">Navigation</p>
            <nav aria-label="Mobile navigation" className="mt-6 border-t border-white/20">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between border-b border-white/20 py-4 text-2xl font-semibold tracking-tight transition-colors duration-150 hover:text-brand-gold-light ${
                  pathname === link.href ? "text-brand-gold-light" : "text-white"
                }`}
              >
                {link.label}
                <span aria-hidden="true" className="text-lg font-normal">→</span>
              </Link>
            ))}
            </nav>
            <div className="pt-7">
              <Link
                href="/make-payment"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex min-h-12 w-full items-center justify-center bg-brand-gold-light px-6 py-3 text-sm font-semibold text-brand-dark transition-colors duration-150 hover:bg-brand-gold"
              >
                Make a payment
              </Link>
            </div>
          </div>
          <div className="mx-auto flex w-full max-w-page items-center justify-between border-t border-white/20 pt-5 text-xs text-brand-slate">
            <a href="tel:8008002911" className="transition-colors hover:text-white">800 800 2911</a>
            <a href="mailto:info@luahpartners.com" className="transition-colors hover:text-white">info@luahpartners.com</a>
          </div>
        </div>
      </nav>
      </header>
      <div aria-hidden="true" className="h-[88px] lg:hidden" />
    </>
  );
}
