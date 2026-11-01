import {
  createLegalPolicyMetadata,
  LegalPolicyPage,
  type LegalPolicySection,
} from "@/feature-slices/legal/LegalPolicyPage";

const description =
  "Read the terms governing use of the Luah Partners website, payments, housing services, and related policies.";

export const metadata = createLegalPolicyMetadata({
  title: "Terms of Service",
  path: "/terms-of-service",
  description,
});

const policySections: LegalPolicySection[] = [
  {
    number: "01",
    id: "who-we-are",
    title: "Who we are",
    body:
      "This website is operated by Luah Partners, Inc. (“Luah Partners,” “we,” “us”), a corporation registered to do business in the State of Maryland and the District of Columbia, with offices at 818 18th St NW, Suite 810 – 1323, Washington, DC 20006. You can reach us at 800 800 2911, by fax at 202 803 6801, or by email at Info@luahpartners.com. Our business hours are Monday through Friday, 10:00 AM to 6:00 PM Eastern Time, and Saturday, 10:00 AM to 3:00 PM Eastern Time.",
  },
  {
    number: "02",
    id: "what-we-sell",
    title: "What we sell",
    body:
      "Luah Partners provides residential real estate services: the acquisition, ownership, financing, leasing, and management of residential property; residential development including land acquisition, construction, and sale of single-family and multi-family dwellings; and related property management services. We do not sell physical goods and we do not ship products. Services are performed in Washington, DC and Maryland.",
  },
  {
    number: "03",
    id: "payments-accepted-through-this-site",
    title: "Payments accepted through this site",
    body:
      "Through the Make a Payment page you may pay rent, security deposits, application fees, and invoices issued by us. All charges are stated and processed in United States dollars (USD). Card and bank payments are processed by our payment processor, Stripe, Inc. Luah Partners does not receive or store your full card number or bank account credentials. Charges will appear on your statement as LUAH PARTNERS.",
  },
  {
    number: "04",
    id: "authorization-and-accuracy",
    title: "Authorization and accuracy",
    body:
      "By submitting a payment you represent that you are authorized to use the payment method and that the property address, unit, and amount you entered are accurate. Payments applied to the wrong account because of inaccurate information may be delayed while we correct the record. We do not charge a surcharge, convenience fee, or processing fee on top of the amount you enter unless that fee is disclosed to you in writing before you submit the payment.",
  },
  {
    number: "05",
    id: "leases-and-separate-agreements",
    title: "Leases and separate agreements",
    body:
      "Nothing on this website is a lease, an offer to lease, a loan commitment, or an offer to sell securities. Rental, management, purchase, and development relationships are governed exclusively by the written agreement executed between you and Luah Partners. Where this website and a signed agreement conflict, the signed agreement controls.",
  },
  {
    number: "06",
    id: "late-payments-and-returned-items",
    title: "Late payments and returned items",
    body:
      "Late fees, grace periods, and returned-item charges are governed by your lease or service agreement and by the law of the jurisdiction where the property is located — the District of Columbia or Maryland. If a payment is returned unpaid by your bank or card issuer, the underlying obligation remains outstanding and any fee permitted by your agreement and by law may be applied.",
  },
  {
    number: "07",
    id: "acceptable-use",
    title: "Acceptable use",
    body:
      "You agree not to use this website to submit fraudulent payments, to impersonate another person, to interfere with the operation of the site, or to attempt unauthorized access to any system or account. We may suspend access to the payment page where we reasonably suspect fraud or unauthorized use.",
  },
  {
    number: "08",
    id: "fair-housing",
    title: "Fair housing",
    body:
      "Luah Partners complies with the federal Fair Housing Act and with applicable District of Columbia and Maryland fair housing laws. We do not discriminate in the sale, rental, financing, or management of housing on any protected basis.",
  },
  {
    number: "09",
    id: "disclaimers-and-limitation-of-liability",
    title: "Disclaimers and limitation of liability",
    body:
      "The content of this website is provided for general information and may be updated at any time. To the maximum extent permitted by law, Luah Partners is not liable for indirect, incidental, or consequential damages arising from use of this website. Nothing in these terms limits any liability that cannot be limited under applicable law, and nothing here waives your rights under your lease or under applicable landlord-tenant law.",
  },
  {
    number: "10",
    id: "governing-law-and-changes",
    title: "Governing law and changes",
    body:
      "These terms are governed by the laws of the District of Columbia, without regard to conflict-of-laws principles. We may update these terms; the “last updated” date above reflects the current version. Material changes affecting payments will be posted on this page before they take effect. Questions: Luah Partners, Inc., 818 18th St NW, Suite 810 – 1323, Washington, DC 20006 · 800 800 2911 · Info@luahpartners.com",
  },
];

export default function TermsOfServicePage() {
  return (
    <LegalPolicyPage
      title="Terms of Service"
      currentPath="/terms-of-service"
      sections={policySections}
    />
  );
}
