import {
  createLegalPolicyMetadata,
  LegalPolicyPage,
  type LegalPolicySection,
} from "@/feature-slices/legal/LegalPolicyPage";

const description =
  "Read Luah Partners’ policies for refunds, cancellations, payment disputes, deposits, rent, and application fees.";

export const metadata = createLegalPolicyMetadata({
  title: "Refund & Cancellation",
  path: "/refund-cancellation",
  description,
});

const policySections: LegalPolicySection[] = [
  {
    number: "01",
    id: "summary",
    title: "Summary",
    body:
      "Luah Partners provides real estate and property management services. Because payments made through this site are applied to rent, deposits, fees, and invoices under a written agreement, refunds are governed by that agreement and by applicable law. The rules below tell you exactly what to expect and how to reach us.",
  },
  {
    number: "02",
    id: "duplicate-and-erroneous-payments",
    title: "Duplicate and erroneous payments",
    body:
      "If you are charged twice for the same obligation, or are charged an amount you did not authorize, contact us within 60 days of the charge. Verified duplicate or erroneous charges are refunded in full to the original payment method. We initiate the refund within 5 business days of verification; your bank or card issuer typically posts it within 5 to 10 additional business days.",
  },
  {
    number: "03",
    id: "rent-payments",
    title: "Rent payments",
    body:
      "Rent that has been correctly applied to your ledger is not refundable, because it satisfies an obligation you owe under your lease. Overpayments are either credited to your ledger for the next period or refunded at your request.",
  },
  {
    number: "04",
    id: "security-deposits",
    title: "Security deposits",
    body:
      "Security deposits are held and returned in accordance with the law of the jurisdiction where the property is located — the District of Columbia or Maryland — and with your lease. After you vacate, the deposit, together with any interest required by law and an itemized statement of lawful deductions, is returned within the period that law requires. Damage beyond ordinary wear and tear and unpaid amounts under the lease may be deducted.",
  },
  {
    number: "05",
    id: "application-fees",
    title: "Application fees",
    body:
      "Application fees cover the cost of screening and are non-refundable once screening has begun. If you cancel an application before screening starts, the fee is refunded in full. If we are unable to process your application for a reason within our control, the fee is refunded in full.",
  },
  {
    number: "06",
    id: "holding-and-reservation-deposits",
    title: "Holding and reservation deposits",
    body:
      "A holding deposit taken to reserve a unit is applied to your first payment if you take occupancy. If you withdraw after the unit has been taken off the market, the deposit may be retained to the extent permitted by your reservation agreement and applicable law. If we withdraw the unit, the deposit is refunded in full.",
  },
  {
    number: "07",
    id: "management-and-service-fees",
    title: "Management and service fees",
    body:
      "Recurring management fees are earned as services are performed and are not refundable for periods already served. Either party may terminate a management agreement in accordance with its notice provisions; fees for any period paid in advance and not yet served are prorated and refunded.",
  },
  {
    number: "08",
    id: "cancellation",
    title: "Cancellation",
    body:
      "To cancel a scheduled service, an application, or a management engagement, email Info@luahpartners.com or call 800 800 2911 during business hours. Cancellations are effective when we confirm them in writing. Cancellation of a lease is governed by the lease itself and by applicable landlord-tenant law.",
  },
  {
    number: "09",
    id: "how-to-request-a-refund",
    title: "How to request a refund",
    body:
      "Email Info@luahpartners.com or call 800 800 2911 with your name, property address and unit, the payment date, and the amount. We acknowledge every request within one business day and give you a written decision within five business days. Approved refunds are returned to the original payment method through Stripe; we do not issue refunds by cash, wire to an individual, gift card, or peer-to-peer payment app.",
  },
  {
    number: "10",
    id: "disputes",
    title: "Disputes",
    body:
      "If you believe a charge is wrong, please contact us first — we can usually resolve it faster than a card dispute. You retain every right you have under your card network's rules and under applicable law. Contact: Luah Partners, Inc., 818 18th St NW, Suite 810 – 1323, Washington, DC 20006 · 800 800 2911 · Info@luahpartners.com",
  },
];

export default function RefundCancellationPage() {
  return (
    <LegalPolicyPage
      title="Refund & Cancellation Policy"
      currentPath="/refund-cancellation"
      sections={policySections}
    />
  );
}
