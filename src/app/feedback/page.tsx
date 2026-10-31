import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feedback | Luah Partners",
  description: "Tell us about your experience with Luah Partners",
};

export default function Page() {
  return (
    <div className="max-w-page mx-auto px-6 py-20">
      <div className="max-w-3xl space-y-4">
        <h1 className="text-4xl font-bold text-brand-navy">Feedback</h1>
        <p className="text-brand-muted text-lg">Tell us about your experience with Luah Partners</p>
      </div>
    </div>
  );
}
