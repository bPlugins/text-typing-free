const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="600" viewBox="0 0 900 600" fill="none">
  <defs>
    <linearGradient id="term" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#2A3042"/>
      <stop offset="1" stop-color="#12141C"/>
    </linearGradient>
  </defs>

  <rect x="0" y="0" width="900" height="600" fill="url(#term)"/>

  <g>
    <circle cx="96" cy="92" r="17" fill="#FF5F57"/>
    <circle cx="146" cy="92" r="17" fill="#FEBC2E"/>
    <circle cx="196" cy="92" r="17" fill="#28C840"/>
  </g>

  <path d="M 120 232 L 170 286 L 120 340" fill="none" stroke="#4ADE80" stroke-width="22" stroke-linecap="round" stroke-linejoin="round"/>

  <rect x="212" y="262" height="48" rx="24" fill="#FFFFFF" fill-opacity="0.92" width="10">
    <animate attributeName="width" values="10;300;300;10;10" keyTimes="0;0.5;0.82;0.95;1" dur="4s" calcMode="spline" keySplines="0.4 0 0.2 1;0 0 1 1;0.6 0 0.4 1;0 0 1 1" repeatCount="indefinite"/>
  </rect>

  <rect y="252" width="52" height="68" rx="10" fill="#F97316" x="234">
    <animate attributeName="x" values="234;524;524;234;234" keyTimes="0;0.5;0.82;0.95;1" dur="4s" calcMode="spline" keySplines="0.4 0 0.2 1;0 0 1 1;0.6 0 0.4 1;0 0 1 1" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="1;1;0;1;0;1" dur="1s" repeatCount="indefinite"/>
  </rect>

  <rect x="120" y="388" width="640" height="36" rx="18" fill="#FFFFFF" fill-opacity="0.30"/>
  <rect x="120" y="452" width="470" height="36" rx="18" fill="#FFFFFF" fill-opacity="0.30"/>
</svg>`;

export const textTypingBanner = `data:image/svg+xml,${encodeURIComponent(svg)}`;
