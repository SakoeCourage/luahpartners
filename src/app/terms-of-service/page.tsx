import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Luah Partners",
  description: "Terms of service",
};

export default function Page() {
  return (
    <div className="max-w-page mx-auto px-6 py-20">
      <div className="max-w-3xl space-y-4">
        <h1 className="text-4xl font-bold text-brand-navy">Terms of Service</h1>
        <p className="text-brand-muted text-lg">Terms of service</p>
      </div>
    </div>
  );
}
