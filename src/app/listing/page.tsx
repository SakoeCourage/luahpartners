import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Listings | Luah Partners",
  description: "Available rental properties and renovation pipeline",
};

export default function Page() {
  return (
    <div className="max-w-page mx-auto px-6 py-20">
      <div className="max-w-3xl space-y-4">
        <h1 className="text-4xl font-bold text-brand-navy">Listings</h1>
        <p className="text-brand-muted text-lg">Available rental properties and renovation pipeline</p>
      </div>
    </div>
  );
}
