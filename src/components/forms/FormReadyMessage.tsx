import type { ReactNode } from "react";

export function FormReadyMessage({
  visible,
  children = "Your details have passed validation. Online submissions will be connected when Luah Partners confirms its preferred system.",
}: {
  visible: boolean;
  children?: ReactNode;
}) {
  if (!visible) return null;

  return (
    <p className="mt-4 border-l-2 border-brand-gold bg-brand-sand-light px-3 py-2 text-sm text-brand-navy" aria-live="polite">
      {children}
    </p>
  );
}
