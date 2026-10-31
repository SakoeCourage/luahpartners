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
    <section className="w-full bg-white border-b border-brand-sand/50 font-sans py-14 sm:py-16">
      <div className="max-w-page mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-8 h-px bg-brand-gold" />
          <span className="text-xs font-semibold uppercase tracking-tag text-brand-muted">
            Trusted Stewardship
          </span>
        </div>

        {/* 4-Column Grid with Sand Border Dividers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-brand-sand/60 divide-y sm:divide-y-0 sm:divide-x divide-brand-sand/60 bg-white">
          {trustBadges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.title}
                className={`p-6 sm:p-8 flex flex-col justify-start ${
                  idx === 2 ? "sm:border-t lg:border-t-0 border-brand-sand/60" : ""
                } ${idx === 3 ? "sm:border-t lg:border-t-0 border-brand-sand/60" : ""}`}
              >
                <div className="w-10 h-10 flex items-center justify-start text-brand-gold">
                  <Icon size={24} />
                </div>
                <h3 className="mt-4 text-base font-bold text-brand-navy">
                  {badge.title}
                </h3>
                <p className="mt-2 text-xs text-brand-muted leading-relaxed">
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

