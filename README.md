# Luah Partners

> **"Every Home, a Blessing"**  
> *Building and stewarding homes in the capital region (Washington, DC & Maryland).*

This repository contains the in-house Next.js web application for **Luah Partners, Inc.**, replacing the legacy Wix website to lower operating costs, enhance performance, and provide full control over custom business workflows, payment integrations, and client portals.

## Hosted Preview

View the current work-in-progress site at [luahpartners.minzo.skcourage.tech](https://luahpartners.minzo.skcourage.tech/). This URL is provided for reviewers to preview the migration; it is **not** the final production domain.

> **Design Note:** Visual styling and color tokens from the legacy Wix site have been intentionally excluded. A new design created in **Figma** will serve as the design foundation for the homepage and design tokens moving forward.

---

## 1. Company & Platform Overview

Luah Partners operates as a **full-cycle, vertically integrated residential platform**. Rather than brokering deals out to third parties, the company controls residential real estate from land acquisition and construction through lease-up, management, and long-term stewardship.

### The 7 Platform Pillars

1. **Acquisition & Ownership:** Sourcing and underwriting residential assets to hold long-term.
2. **Financing:** Structuring debt and equity for land purchases, construction, and acquisitions.
3. **Residential Development:** Managing projects from land acquisition through construction and delivery.
4. **Sale of Completed Homes:** Bringing finished residential dwellings to market.
5. **Leasing:** Marketing, prospective resident screening, and lease execution.
6. **Property Management:** Dedicated in-house management, maintenance stewardship, and resident support.
7. **Home Improvement:** Direct residential contracting for homeowners (kitchens, bathrooms, concrete, flooring, painting, decks) with upfront written pricing and installment payment options.

---

## 2. Site Structure & Page Inventory

| Category | Page Route | Description & Purpose |
| :--- | :--- | :--- |
| **Main Marketing** | `/` (Home) | Core brand introduction, value proposition, 4 trust badges, platform pillars, and CTAs. *(To be built based on new Figma design)* |
| | `/about` | Company history, mission, and the 4 foundational commitments (Integrity, Quality control, Accountability, Local focus). |
| | `/services` | Comprehensive overview of the 7 residential business pillars. |
| **Rentals & Properties** | `/listing` | Move-in ready residential units, properties in renovation pipeline, and notification capture. |
| **Contracting** | `/home-improvement` | Direct renovation and repair services, licensing info, and flexible financing/installment details. |
| **Payments** | `/make-payment` | Self-service Stripe payment portal for rent, deposits, fees, and invoices. |
| | `/payment-request-page`| Direct invoice and custom payment settlement page. |
| **Lead Capture & Hiring**| `/contact` | Multi-audience contact form (prospective residents, owners, general inquiries). |
| | `/careers` | Application portal for DC/MD local real estate, construction, and management talent. |
| | `/feedback` | Structured compliment and grievance intake for residents, vendors, and clients. |
| **Legal & Compliance** | `/terms-of-service` | Platform terms and legal conditions. |
| | `/privacy-policy` | Privacy policy and data handling compliance. |
| | `/refund-cancellation` | Refund and payment cancellation policies. |
| | `/accessibility-fair-housing` | Statement on Equal Housing Opportunity and ADA compliance. |

---

## 3. Interactive Workflows & Business Logic

* **Stripe Checkout Portal (`/make-payment`):**
  * Collects USD payments without storing card credentials.
  * Payment categories: **Rent**, **Security Deposit**, **Application Fee**, **Invoice**.
  * Dynamic receipt details: Full Name, Email, Custom Amount (`amount_p7`).
  * Statement descriptor: `LUAH PARTNERS`.
* **Home Improvement Quote Funnel (`/home-improvement`):**
  * Service category selectors (Bathroom remodeling, Kitchen remodeling, Concrete, Flooring, Painting, Decks, etc.).
  * Intake inputs: Name, Email, Phone, Property Address, Project Details.
  * Installment payment messaging (*"Can't pay in full? Break it into payments"*).
* **Listings Notification System (`/listing`):**
  * Grid of available units and pipeline renovations.
  * Lead capture: Name, Email, Phone, Preferred Neighborhood/Area with a *"NOTIFY ME"* trigger.
* **Careers Application Intake (`/careers`):**
  * Tailored for Washington, DC and Maryland local knowledge.
  * Collects: Candidate name, email, phone, location, resume attachment, portfolio/LinkedIn URL, and *"Why this role"* statement.
* **Feedback & Accountability Loop (`/feedback`):**
  * Supports both compliments and service shortfall grievances.
  * Collects: Name (optional), Email, Phone, Property/Project, Team Member named, Incident description.
  * Toggles for public review consent and explicit follow-up requests.

---

## 4. Entity & Trust Credentials

* **Entity:** Luah Partners, Inc.
* **Licensing:** Licensed, insured, and bonded to operate in Washington, DC and Maryland.
* **Headquarters:** 818 18th St NW, Suite 810 – 1323, Washington, DC 20006
* **Phone:** (800) 800-2911 | **Fax:** (202) 803-6801
* **Email:** info@luahpartners.com
* **Operating Hours:** Mon–Fri 10:00 AM – 6:00 PM ET | Sat 10:00 AM – 3:00 PM ET

---

## 5. Technology Stack & Development

* **Framework:** [Next.js](https://nextjs.org/) (App Router, Turbopack)
* **Language:** TypeScript
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
* **Payments:** Stripe
* **Code Quality:** ESLint

### Getting Started

Install dependencies and start the local development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the application.

### Available Scripts

* `npm run dev`: Starts the Next.js development server with Turbopack.
* `npm run build`: Generates the optimized production build.
* `npm run start`: Runs the built production server.
* `npm run lint`: Runs ESLint code quality checks.
