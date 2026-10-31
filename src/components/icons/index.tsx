import type { SVGProps } from "react";

export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

/**
 * Top bar phone icon (Figma exact vector)
 */
export function PhoneIcon({ size = 16, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M 9.07 10.66 C 9.32 10.78 9.61 10.70 9.78 10.49 L 9.98 10.22 C 10.20 9.92 10.55 9.75 10.92 9.75 H 12.67 C 13.31 9.75 13.83 10.27 13.83 10.92 V 12.67 C 13.83 13.31 13.31 13.83 12.67 13.83 C 6.87 13.83 2.17 9.13 2.17 3.33 C 2.17 2.69 2.69 2.17 3.33 2.17 H 5.08 C 5.73 2.17 6.25 2.69 6.25 3.33 V 5.08 C 6.25 5.45 6.08 5.80 5.78 6.02 L 5.51 6.22 C 5.29 6.39 5.22 6.69 5.34 6.94 C 6.14 8.56 7.45 9.87 9.07 10.66" />
    </svg>
  );
}

/**
 * Top bar mail icon (Figma exact vector)
 */
export function MailIcon({ size = 16, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M 13.83 5.08 L 8.58 8.42 C 8.22 8.63 7.77 8.63 7.41 8.42 L 2.16 5.08" />
      <path d="M 3.33 3.33 H 12.66 C 13.30 3.33 13.83 3.86 13.83 4.50 V 11.50 C 13.83 12.14 13.30 12.67 12.66 12.67 H 3.33 C 2.68 12.67 2.16 12.14 2.16 11.50 V 4.50 C 2.16 3.86 2.68 3.33 3.33 3.33 Z" />
    </svg>
  );
}

/**
 * Location pin icon (Figma exact vector)
 */
export function PinIcon({ size = 16, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M 12.66 6.83 C 12.66 9.75 9.43 12.78 8.35 13.72 C 8.14 13.87 7.85 13.87 7.65 13.72 C 6.56 12.78 3.33 9.75 3.33 6.83 C 3.33 4.26 5.42 2.17 8.00 2.17 C 10.57 2.17 12.66 4.26 12.66 6.83" />
      <path d="M 6.25 6.83 C 6.25 7.80 7.03 8.58 8.00 8.58 C 8.96 8.58 9.75 7.80 9.75 6.83 C 9.75 5.87 8.96 5.08 8.00 5.08 C 7.03 5.08 6.25 5.87 6.25 6.83 Z" />
    </svg>
  );
}

/**
 * Trust badge: Registered entity (Shield outline)
 */
export function ShieldIcon({ size = 24, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M 20.00 13.00 C 20.00 18.00 16.50 20.50 12.34 21.95 C 12.12 22.02 11.89 22.02 11.67 21.94 C 7.50 20.50 4.00 18.00 4.00 13.00 V 6.00 C 4.00 5.45 4.45 5.00 5.00 5.00 C 7.00 5.00 9.50 3.80 11.24 2.28 C 11.68 1.91 12.32 1.91 12.76 2.28 C 14.51 3.81 17.00 5.00 19.00 5.00 C 19.55 5.00 20.00 5.45 20.00 6.00 V 13.00" />
    </svg>
  );
}

/**
 * Trust badge: Licensed and bonded (Checkmark in circle)
 */
export function CheckCircleIcon({ size = 24, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M 2.00 12.00 C 2.00 17.52 6.48 22.00 12.00 22.00 C 17.52 22.00 22.00 17.52 22.00 12.00 C 22.00 6.48 17.52 2.00 12.00 2.00 C 6.48 2.00 2.00 6.48 2.00 12.00 Z" />
      <path d="M 16.00 9.00 L 10.50 14.50 L 8.00 12.00" />
    </svg>
  );
}

/**
 * Trust badge: Secure payments (Padlock outline)
 */
export function LockIcon({ size = 24, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M 5.00 11.00 H 19.00 C 20.10 11.00 21.00 11.90 21.00 13.00 V 20.00 C 21.00 21.10 20.10 22.00 19.00 22.00 H 5.00 C 3.90 22.00 3.00 21.10 3.00 20.00 V 13.00 C 3.00 11.90 3.90 11.00 5.00 11.00 Z" />
      <path d="M 7.00 11.00 V 7.00 C 7.00 4.24 9.24 2.00 12.00 2.00 C 14.76 2.00 17.00 4.24 17.00 7.00 V 11.00" />
    </svg>
  );
}

/**
 * Trust badge: Reachable (Speech bubble outline)
 */
export function ChatIcon({ size = 24, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M 3.11 16.31 C 3.26 16.68 3.29 17.08 3.21 17.47 L 2.14 20.76 C 2.07 21.10 2.18 21.45 2.43 21.69 C 2.69 21.93 3.04 22.02 3.38 21.93 L 6.79 20.93 C 7.16 20.86 7.54 20.89 7.89 21.03 C 12.30 23.08 17.55 21.67 20.33 17.68 C 23.11 13.68 22.61 8.27 19.15 4.85 C 15.69 1.43 10.27 1.00 6.31 3.83 C 2.35 6.66 1.00 11.92 3.11 16.31" />
    </svg>
  );
}

/**
 * Arrow right icon used on CTA buttons and links
 */
export function ArrowRightIcon({ size = 16, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M 3.92 8.00 H 12.08 M 8.00 3.92 L 12.08 8.00 L 8.00 12.08" />
    </svg>
  );
}
