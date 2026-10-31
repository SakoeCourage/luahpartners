<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Agent Guidelines: Luah Partners Platform Migration

## 1. Project Objective & Context
We are migrating **Luah Partners** (`www.luahpartners.com`) from Wix to an in-house Next.js 16 (App Router) + Tailwind CSS application. The goal is to eliminate recurring Wix platform fees, drastically improve page performance, and take complete control over custom business logic, interactive forms, and payment workflows.

---

## 2. Figma Design Access Instructions

The UI and styling source of truth is the Figma design file.

* **Figma File URL:** `https://www.figma.com/design/gxSQbOXc849ArMwE7UBEme/Minzo-Side-project-Folder`
* **File Key:** `gxSQbOXc849ArMwE7UBEme`
* **Canvas Name:** `wix to custom site page`
* **Authentication:** A contributor access token is configured in `.env` as `FIGMA_ACCESS_TOKEN`.

### Accessing Nodes via API:
When an agent needs design data, layout coordinates, text content, colors, or image exports, query Figma's REST API using the token in `.env`:

```bash
# Extract environment variable
FIGMA_ACCESS_TOKEN=$(grep FIGMA_ACCESS_TOKEN .env | cut -d '=' -f2)

# 1. Fetch node JSON tree (layout, typography, styles)
curl -s -H "X-Figma-Token: $FIGMA_ACCESS_TOKEN" \
  "https://api.figma.com/v1/files/gxSQbOXc849ArMwE7UBEme/nodes?ids=<NODE_ID>"

# 2. Render and download node preview or image asset (PNG / SVG)
curl -s -H "X-Figma-Token: $FIGMA_ACCESS_TOKEN" \
  "https://api.figma.com/v1/images/gxSQbOXc849ArMwE7UBEme?ids=<NODE_ID>&format=png&scale=2"
```

---

## 3. Strict Scope & Target Screens

> **CRITICAL SCOPE BOUNDARY:** The Figma canvas contains screens for other projects (such as *Blessing Partners* and *Luah on the Go*). **DO NOT** implement or reference non-Luah Partners screens.

Focus exclusively on the **14 Luah Partners screens**:

| # | Figma Screen Name | Node ID | Target Route / File | Description |
| :--- | :--- | :--- | :--- | :--- |
| 1 | `luah partners homepage redesign` | `15:640` | `src/app/page.tsx` | Main Homepage (Hero, platform pillars, DC/MD focus, trust badges) |
| 2 | `Luah Partners — About` | `85:1216` | `src/app/about/page.tsx` | About page (Company mission & 4 core commitments) |
| 3 | `Luah Partners — Services` | `85:1342` | `src/app/services/page.tsx` | Detailed breakdown of the 7 business pillars |
| 4 | `Luah Partners — Listings` | `86:1461` | `src/app/listing/page.tsx` | Available rental properties & vacancy alert signup |
| 5 | `Luah Partners — Home Improvement` | `89:1639` | `src/app/home-improvement/page.tsx` | Residential contractor services & quote request funnel |
| 6 | `Luah Partners — Careers` | `93:1848` | `src/app/careers/page.tsx` | Hiring & local talent application portal |
| 7 | `Luah Partners — Contact` | `93:2049` | `src/app/contact/page.tsx` | Contact inquiries, office address, and hours |
| 8 | `Luah Partners — Make a Payment` | `94:2168` | `src/app/make-payment/page.tsx` | Stripe payment portal for rent, deposits, fees, invoices |
| 9 | `Luah Partners — Feedback` | `95:2327` | `src/app/feedback/page.tsx` | Customer compliments & grievance reporting |
| 10 | `Luah Partners — Page not found` | `97:2516` | `src/app/not-found.tsx` | Custom 404 error page |
| 11 | `Luah Partners — Accessibility & Fair Housing` | `97:2584` | `src/app/accessibility-fair-housing/page.tsx` | Equal Housing Opportunity & ADA statement |
| 12 | `Luah Partners — Refund & Cancellation` | `97:2693` | `src/app/refund-cancellation/page.tsx` | Payment cancellation and refund terms |
| 13 | `Luah Partners — Privacy Policy` | `97:2827` | `src/app/privacy-policy/page.tsx` | Privacy and data protection policy |
| 14 | `Luah Partners — Terms of Service` | `97:2956` | `src/app/terms-of-service/page.tsx` | Platform terms of service |

---

## 4. Design & Implementation Rules

1. **Design System & Tokens:**
   - Use the Figma frames as the absolute source of truth for colors, typography, border radii, shadows, and spacing.
   - Ignore any obsolete color tokens from the legacy Wix site.
2. **Component Architecture:**
   - Reusable components should be placed in `src/components/` (e.g. `Header`, `Footer`, `Button`, `Card`, `Badge`).
   - Global layout in `src/app/layout.tsx` should house the global navigation header and footer shared across the 14 pages.
3. **Form & Payment Integrity:**
   - The `/make-payment` flow interfaces with Stripe Checkout for secure USD processing without storing card details.
   - Forms (Contact, Home Improvement Quote, Careers, Feedback, Listing Alerts) should follow the field labels and structures specified in the designs.
