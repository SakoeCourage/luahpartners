import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Luah Partners",
  description: "Four commitments we hold ourselves to",
};

export default function Page() {
  return (
    <div className="max-w-page mx-auto px-6 py-20">
      <div className="max-w-3xl space-y-4">
        <h1 className="text-4xl font-bold text-brand-navy">About</h1>
        <p className="text-brand-muted text-lg">Four commitments we hold ourselves to</p>
      </div>
    </div>
  );
}
