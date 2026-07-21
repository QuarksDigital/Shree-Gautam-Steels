/**
 * Vector stainless-steel plate (thali), top-down. Monochrome, fully transparent
 * background (no box). The circular drop shadow is applied via CSS on the <svg>
 * element in Hero so it follows the plate's round shape, not a square.
 */
export default function SteelPlate({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 600"
      className={className}
      role="img"
      aria-label="Stainless steel plate"
    >
      <defs>
        <radialGradient id="plateBody" cx="40%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="24%" stopColor="#e9ecee" />
          <stop offset="50%" stopColor="#c5cbd0" />
          <stop offset="74%" stopColor="#9ea6ad" />
          <stop offset="90%" stopColor="#828a92" />
          <stop offset="100%" stopColor="#adb3b9" />
        </radialGradient>
        <radialGradient id="plateWell" cx="42%" cy="34%" r="70%">
          <stop offset="0%" stopColor="#fbfbfc" />
          <stop offset="45%" stopColor="#dce0e3" />
          <stop offset="82%" stopColor="#b3bac0" />
          <stop offset="100%" stopColor="#8f979e" />
        </radialGradient>
        <radialGradient id="boss" cx="42%" cy="34%" r="72%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="62%" stopColor="#e6e9eb" />
          <stop offset="100%" stopColor="#c0c6cb" />
        </radialGradient>
        <linearGradient id="sheen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="36%" stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="74%" stopColor="#ffffff" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <filter id="blurHi" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="16" />
        </filter>
      </defs>

      {/* Body + raised rim */}
      <circle cx="300" cy="300" r="274" fill="url(#plateBody)" />
      <circle cx="300" cy="300" r="274" fill="none" stroke="#6b747c" strokeOpacity="0.5" strokeWidth="2" />
      <circle cx="300" cy="300" r="266" fill="none" stroke="#ffffff" strokeOpacity="0.6" strokeWidth="2" />

      {/* Rim step down to well */}
      <circle cx="300" cy="300" r="246" fill="none" stroke="#7c848b" strokeOpacity="0.55" strokeWidth="2" />
      <circle cx="300" cy="300" r="240" fill="none" stroke="#ffffff" strokeOpacity="0.55" strokeWidth="1.5" />

      {/* Well */}
      <circle cx="300" cy="300" r="230" fill="url(#plateWell)" />
      <circle cx="300" cy="300" r="158" fill="none" stroke="#7c848b" strokeOpacity="0.4" strokeWidth="2" />
      <circle cx="300" cy="300" r="152" fill="none" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="1.5" />

      {/* Center boss (where the logo sits) */}
      <circle cx="300" cy="300" r="158" fill="url(#boss)" />

      {/* Anisotropic sheen sweep */}
      <circle cx="300" cy="300" r="274" fill="url(#sheen)" />

      {/* Specular highlights */}
      <ellipse cx="208" cy="172" rx="120" ry="66" fill="#ffffff" opacity="0.45" filter="url(#blurHi)" />
      <ellipse cx="398" cy="436" rx="86" ry="36" fill="#ffffff" opacity="0.16" filter="url(#blurHi)" />
    </svg>
  );
}
