import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Make a Payment | Luah Partners",
  description: "Secure online payment portal for rent, deposits, and fees",
};

export default function Page() {
  return (
    <div className="max-w-page mx-auto px-6 py-20">
      <div className="max-w-3xl space-y-4">
        <h1 className="text-4xl font-bold text-brand-navy">Make a Payment</h1>
        <p className="text-brand-muted text-lg">Secure online payment portal for rent, deposits, and fees</p>
      </div>
    </div>
  );
}
