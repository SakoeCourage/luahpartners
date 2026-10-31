import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Luah Partners",
  description: "Privacy and data handling policy",
};

export default function Page() {
  return (
    <div className="max-w-page mx-auto px-6 py-20">
      <div className="max-w-3xl space-y-4">
        <h1 className="text-4xl font-bold text-brand-navy">Privacy Policy</h1>
        <p className="text-brand-muted text-lg">Privacy and data handling policy</p>
      </div>
    </div>
  );
}
