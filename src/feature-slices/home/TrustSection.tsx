import {
  ShieldIcon,
  CheckCircleIcon,
  LockIcon,
  ChatIcon,
} from "@/components/icons";

const trustBadges = [
  {
    icon: ShieldIcon,
    title: "Registered entity",
    description:
      "Luah Partners, Inc. — registered to do business in Maryland and the District of Columbia.",
  },
  {
    icon: CheckCircleIcon,
    title: "Licensed and bonded",
    description:
      "We carry the licensing, bonding, and insurance required for the work we perform.",
  },
  {
    icon: LockIcon,
    title: "Secure payments",
    description:
      "Rent and deposits collected through Stripe. We never store card or bank credentials.",
  },
  {
    icon: ChatIcon,
    title: "Reachable",
    description:
      "Mon–Fri 10 AM–6 PM ET, Sat 10 AM–3 PM ET. One business day response on every inquiry.",
  },
];

export function TrustSection() {
  return (
    <section className="w-full bg-white font-sans py-12">
      <div className="max-w-page mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-8 h-px bg-brand-gold" />
          <span className="text-xs font-semibold uppercase tracking-tag text-brand-muted">
            Trusted Stewardship
          </span>
        </div>

        {/* The Figma cards are framed only above and below, with dividers between cards. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-y border-brand-sand bg-white">
          {trustBadges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.title}
                className={`flex flex-col justify-start py-6 lg:py-2 ${
                  idx < trustBadges.length - 1
                    ? "border-b border-brand-sand lg:border-b-0 lg:border-r"
                    : ""
                } ${
                  idx === 0
                    ? "lg:pr-7"
                    : idx === trustBadges.length - 1
                      ? "lg:pl-7"
                      : "lg:px-7"
                }`}
              >
                <div className="w-10 h-10 flex items-center justify-start text-brand-gold">
                  <Icon size={24} />
                </div>
                <h3 className="mt-2 text-lg font-semibold leading-7 text-brand-navy">
                  {badge.title}
                </h3>
                <p className="mt-2 text-sm text-brand-muted leading-6">
                  {badge.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
