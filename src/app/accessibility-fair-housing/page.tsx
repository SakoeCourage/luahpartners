import {
  createLegalPolicyMetadata,
  LegalPolicyPage,
  type LegalPolicySection,
} from "@/components/legal/LegalPolicyPage";

const description =
  "Learn about Luah Partners’ commitment to equal housing opportunity, reasonable accommodations, and website accessibility.";

export const metadata = createLegalPolicyMetadata({
  title: "Accessibility & Fair Housing",
  path: "/accessibility-fair-housing",
  description,
});

const policySections: LegalPolicySection[] = [
  {
    number: "01",
    id: "equal-housing-opportunity",
    title: "Equal Housing Opportunity",
    body:
      "Luah Partners, Inc. is an Equal Housing Opportunity company. We comply with the federal Fair Housing Act, the District of Columbia Human Rights Act, and Maryland fair housing law. We do not refuse to rent or sell, set different terms, or otherwise discriminate on the basis of race, color, religion, national origin, sex, familial status, disability, age, marital status, personal appearance, sexual orientation, gender identity or expression, family responsibilities, matriculation, political affiliation, source of income, or any other characteristic protected by applicable law.",
  },
  {
    number: "02",
    id: "reasonable-accommodations",
    title: "Reasonable accommodations",
    body:
      "Residents and applicants with disabilities may request a reasonable accommodation in rules, policies, practices, or services, or a reasonable modification to a dwelling. Submit requests to Info@luahpartners.com or 800 800 2911. We respond to accommodation requests promptly and treat them confidentially.",
  },
  {
    number: "03",
    id: "website-accessibility",
    title: "Website accessibility",
    body:
      "We work to keep luahpartners.com usable by everyone, including people who use screen readers, keyboard navigation, or magnification, and we aim to meet WCAG 2.1 Level AA. If any part of this site is a barrier to you, tell us what you were trying to do and we will provide the information or complete the transaction with you by phone during business hours.",
  },
  {
    number: "04",
    id: "reporting-a-barrier",
    title: "Reporting a barrier",
    body:
      "Call 800 800 2911, fax 202 803 6801, or email Info@luahpartners.com. We acknowledge accessibility reports within one business day.",
  },
  {
    number: "05",
    id: "licensing",
    title: "Licensing",
    body:
      "Luah Partners, Inc. is licensed and bonded for the services it performs and is registered to do business in the State of Maryland and the District of Columbia. Licensing details are available on request.",
  },
];

export default function AccessibilityFairHousingPage() {
  return (
    <LegalPolicyPage
      title="Accessibility & Fair Housing"
      currentPath="/accessibility-fair-housing"
      sections={policySections}
    />
  );
}
