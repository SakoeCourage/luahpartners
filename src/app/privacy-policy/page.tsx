import {
  createLegalPolicyMetadata,
  LegalPolicyPage,
  type LegalPolicySection,
} from "@/components/legal/LegalPolicyPage";

const description =
  "Learn how Luah Partners collects, uses, protects, and shares personal information through our website and payment services.";

export const metadata = createLegalPolicyMetadata({
  title: "Privacy Policy",
  path: "/privacy-policy",
  description,
});

const policySections: LegalPolicySection[] = [
  {
    number: "01",
    id: "scope",
    title: "Scope",
    body:
      "This policy explains what personal information Luah Partners, Inc. collects through luahpartners.com, how we use it, and the choices you have. It applies to this website and to payments submitted through it.",
  },
  {
    number: "02",
    id: "information-we-collect",
    title: "Information we collect",
    body:
      "Contact information you give us: name, email address, phone number, property address and unit, and the content of messages you send. Payment information: the amount, payment type, and reference details you enter. Card numbers and bank account credentials are collected directly by Stripe on Stripe-hosted pages and are never received or stored by Luah Partners. Technical information: IP address, browser type, pages viewed, and similar analytics data collected through cookies and our website platform.",
  },
  {
    number: "03",
    id: "how-we-use-it",
    title: "How we use it",
    body:
      "To process and apply your payment; to issue receipts; to respond to inquiries; to administer leases, management agreements, and applications; to detect and prevent fraud; to maintain accounting and tax records; and to comply with legal obligations.",
  },
  {
    number: "04",
    id: "who-we-share-it-with",
    title: "Who we share it with",
    body:
      "Service providers who work on our behalf: our payment processor (Stripe, Inc.), our website platform, email and accounting providers, and, where applicable, screening, maintenance, insurance, banking, or legal professionals. We share only what each provider needs. We do not sell your personal information and we do not share it for cross-context behavioral advertising. We may disclose information where required by law, subpoena, or court order, or to protect our rights, our residents, or the public.",
  },
  {
    number: "05",
    id: "cookies",
    title: "Cookies",
    body:
      "We use strictly necessary cookies to operate the site and secure the payment flow, and analytics cookies to understand how the site is used. You can block or delete cookies through your browser; the payment flow may not function correctly without necessary cookies.",
  },
  {
    number: "06",
    id: "retention-and-security",
    title: "Retention and security",
    body:
      "We retain payment and lease records for as long as required by applicable tax, accounting, and landlord-tenant law, and thereafter only as needed for legitimate business purposes. We maintain administrative and technical safeguards appropriate to the sensitivity of the information. Payment card data is handled entirely within Stripe’s PCI-DSS compliant environment.",
  },
  {
    number: "07",
    id: "your-choices",
    title: "Your choices",
    body:
      "You may request access to, correction of, or deletion of your personal information, subject to records we are legally required to keep. Email Info@luahpartners.com or call 800 800 2911. You may opt out of marketing email at any time using the unsubscribe link; transactional messages such as payment receipts and lease notices will continue.",
  },
  {
    number: "08",
    id: "children",
    title: "Children",
    body:
      "This website is not directed to children under 13 and we do not knowingly collect personal information from them.",
  },
  {
    number: "09",
    id: "contact",
    title: "Contact",
    body:
      "Questions about this policy or about your information: Luah Partners, Inc., 818 18th St NW, Suite 810 – 1323, Washington, DC 20006 · 800 800 2911 · Info@luahpartners.com",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPolicyPage
      title="Privacy Policy"
      currentPath="/privacy-policy"
      sections={policySections}
    />
  );
}
