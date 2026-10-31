import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Luah Partners",
  description: "Join our DC and Maryland residential real estate team",
};

export default function Page() {
  return (
    <div className="max-w-page mx-auto px-6 py-20">
      <div className="max-w-3xl space-y-4">
        <h1 className="text-4xl font-bold text-brand-navy">Careers</h1>
        <p className="text-brand-muted text-lg">Join our DC and Maryland residential real estate team</p>
      </div>
    </div>
  );
}
