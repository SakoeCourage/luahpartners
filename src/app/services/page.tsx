import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Luah Partners",
  description: "A full-cycle residential platform across Washington, DC & Maryland",
};

export default function Page() {
  return (
    <div className="max-w-page mx-auto px-6 py-20">
      <div className="max-w-3xl space-y-4">
        <h1 className="text-4xl font-bold text-brand-navy">Services</h1>
        <p className="text-brand-muted text-lg">A full-cycle residential platform across Washington, DC & Maryland</p>
      </div>
    </div>
  );
}
