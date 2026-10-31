import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Improvement | Luah Partners",
  description: "Contractor repairs and renovations across DC & Maryland",
};

export default function Page() {
  return (
    <div className="max-w-page mx-auto px-6 py-20">
      <div className="max-w-3xl space-y-4">
        <h1 className="text-4xl font-bold text-brand-navy">Home Improvement</h1>
        <p className="text-brand-muted text-lg">Contractor repairs and renovations across DC & Maryland</p>
      </div>
    </div>
  );
}
