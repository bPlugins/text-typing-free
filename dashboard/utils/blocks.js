// Block catalogue rendered by the Blocks page (#/blocks) and the Welcome-page
// Blocks card. Shape matches bpl-tools/Admin/Blocks:
//   { name, title, icon, demo, docs, status, required?, isPremium? }
// `name` MUST match the registered block name so the disable toggle maps to the
// ttbDisabledBlocks option honoured in index.php at registration time.

const demoBase = "https://bblockswp.com/demo";
const docsBase = "https://bplugins.com/docs";

const typingIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z" />
  </svg>
);

const headlineIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4 6h16M4 12h10M4 18h7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M16.5 14.5l1.2 3 3 1.2-3 1.2-1.2 3-1.2-3-3-1.2 3-1.2 1.2-3z"
      fill="currentColor"
    />
  </svg>
);

const rotatingIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4 7h9M4 12h6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M20 7a5 5 0 0 0-9-3M16 17a5 5 0 0 0 9 3"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M11 2v3h3M21 22v-3h-3"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const counterIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <rect
      x="3"
      y="5"
      width="18"
      height="11"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M7 9v3M12 8v4M17 9v3"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M8 20h8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const marqueeIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <rect
      x="2"
      y="7"
      width="20"
      height="10"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M6 12h6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M15 9l3 3-3 3"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const circularIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <circle
      cx="12"
      cy="12"
      r="9"
      stroke="currentColor"
      strokeWidth="2"
      strokeDasharray="3 2.5"
    />
    <circle cx="12" cy="12" r="2.5" fill="currentColor" />
  </svg>
);

const outlineIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6 18V6h2.5a3.5 3.5 0 0 1 0 7H6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 18l3-12 3 12M14.8 14h4.4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const maskIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4 7h6v10H4zM14 7h6M14 12h6M14 17h4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M4.5 14.5L7 12l3 3"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const highlightIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5 8h14M5 12h9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M4 17c3-1.6 13-1.6 16 0"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const tiltIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3 8.5l9-4 9 4-9 4-9-4z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M3 8.5v6l9 4 9-4v-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

const wavyIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2 14c2.5 0 2.5-5 5-5s2.5 5 5 5 2.5-5 5-5 2.5 5 5 5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 18h16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.5"
    />
  </svg>
);

const gradientIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6 18V6h3l3 8 3-8h3"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="4"
      y="20.5"
      width="16"
      height="2"
      rx="1"
      fill="currentColor"
      opacity="0.55"
    />
  </svg>
);

const neonIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6 17V7l6 7 6-7v10"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const glitchIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5 8h12M3 12h12M7 16h12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M18 7l2 1-2 1M6 15l-2 1 2 1"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.6"
    />
  </svg>
);

const stickerIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9 18V8h2.5a3 3 0 0 1 0 6H9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.4"
      transform="translate(2.5 2.5)"
    />
    <path
      d="M9 18V8h2.5a3 3 0 0 1 0 6H9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const flipIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <rect
      x="4"
      y="5"
      width="16"
      height="14"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path d="M4 12h16" stroke="currentColor" strokeWidth="2" />
    <path
      d="M9 8.5h6"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      opacity="0.6"
    />
  </svg>
);

const scrambleIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4 7h4M10 7h2M14 7h6M4 12h6M12 12h3M17 12h3M4 17h3M9 17h5M16 17h4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const reflectionIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8 10V4l4 5 4-5v6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 14v6l4-5 4 5v-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.35"
    />
    <path
      d="M4 12h16"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeDasharray="2 2"
      opacity="0.5"
    />
  </svg>
);

const longShadowIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7 16V8h2.5a2.5 2.5 0 0 1 0 5H7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11 13l5 6M13 12l4 5M15 11l3 4"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      opacity="0.4"
    />
  </svg>
);

const trackingIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5 7v10M19 7v10"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M9 12h6M9 12l2-2M9 12l2 2M15 12l-2-2M15 12l-2 2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const shineIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6 17V7l5 7 5-7v10"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19 5l.7 1.8L21.5 7.5l-1.8.7L19 10l-.7-1.8L16.5 7.5l1.8-.7L19 5z"
      fill="currentColor"
      opacity="0.7"
    />
  </svg>
);

const arcIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4 15c2.5-6 13.5-6 16 0"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M7 12.5v2M12 10.5v2M17 12.5v2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const verticalIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 4v16M12 4l-3 3M12 4l3 3"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 8h.01M7 12h.01M7 16h.01M17 8h.01M17 12h.01M17 16h.01"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.5"
    />
  </svg>
);

const rainbowIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3 18a9 9 0 0 1 18 0"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M6 18a6 6 0 0 1 12 0"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.6"
    />
    <path
      d="M9 18a3 3 0 0 1 6 0"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.35"
    />
  </svg>
);

const splitIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <rect
      x="3"
      y="13"
      width="3.5"
      height="7"
      rx="1"
      fill="currentColor"
      opacity="0.4"
    />
    <rect
      x="8"
      y="9"
      width="3.5"
      height="11"
      rx="1"
      fill="currentColor"
      opacity="0.65"
    />
    <rect
      x="13"
      y="6"
      width="3.5"
      height="14"
      rx="1"
      fill="currentColor"
      opacity="0.85"
    />
    <rect x="18" y="3" width="3.5" height="17" rx="1" fill="currentColor" />
  </svg>
);

const blockCatalog = [
  {
    name: "ttb/text-typing",
    title: "Text Typing",
    icon: typingIcon,
    docs: `${docsBase}/typing-text-block/`,
    status: "published",
    required: true,
  },
  {
    name: "ttb/animated-headline",
    title: "Animated Headline",
    icon: headlineIcon,
    docs: `${docsBase}/typing-text-block/`,
    status: "published",
    isPremium: true,
  },
  {
    name: "ttb/rotating-words",
    title: "Rotating Words",
    icon: rotatingIcon,
    docs: `${docsBase}/typing-text-block/`,
    status: "published",
    isPremium: true,
  },
  {
    name: "ttb/number-counter",
    title: "Number Counter",
    icon: counterIcon,
    docs: `${docsBase}/typing-text-block/`,
    status: "published",
    isPremium: true,
  },
  {
    name: "ttb/text-marquee",
    title: "Text Marquee",
    icon: marqueeIcon,
    docs: `${docsBase}/typing-text-block/`,
    status: "published",
    isPremium: true,
  },
  {
    name: "ttb/circular-text",
    title: "Circular Text",
    icon: circularIcon,
    docs: `${docsBase}/typing-text-block/`,
    status: "published",
    isPremium: true,
  },
  {
    name: "ttb/outline-text",
    title: "Outline Text",
    icon: outlineIcon,
    docs: `${docsBase}/typing-text-block/`,
    status: "published",
    isPremium: true,
  },
  {
    name: "ttb/text-mask",
    title: "Text Mask",
    icon: maskIcon,
    docs: `${docsBase}/typing-text-block/`,
    status: "published",
    isPremium: true,
  },
  {
    name: "ttb/animated-highlight",
    title: "Animated Highlight",
    icon: highlightIcon,
    docs: `${docsBase}/typing-text-block/`,
    status: "published",
    isPremium: true,
  },
  {
    name: "ttb/tilt-text",
    title: "3D Tilt Text",
    icon: tiltIcon,
    docs: `${docsBase}/typing-text-block/`,
    status: "published",
    isPremium: true,
  },
  {
    name: "ttb/wavy-text",
    title: "Wavy Text",
    icon: wavyIcon,
    docs: `${docsBase}/typing-text-block/`,
    status: "published",
    isPremium: true,
  },
  {
    name: "ttb/gradient-text",
    title: "Gradient Text",
    icon: gradientIcon,
    docs: `${docsBase}/typing-text-block/`,
    status: "published",
    isPremium: true,
  },
  {
    name: "ttb/neon-text",
    title: "Neon Text",
    icon: neonIcon,
    docs: `${docsBase}/typing-text-block/`,
    status: "published",
    isPremium: true,
  },
  {
    name: "ttb/glitch-text",
    title: "Glitch Text",
    icon: glitchIcon,
    docs: `${docsBase}/typing-text-block/`,
    status: "published",
    isPremium: true,
  },
  {
    name: "ttb/sticker-text",
    title: "Sticker Text",
    icon: stickerIcon,
    docs: `${docsBase}/typing-text-block/`,
    status: "published",
    isPremium: true,
  },
  {
    name: "ttb/flip-text",
    title: "Split-Flap Text",
    icon: flipIcon,
    docs: `${docsBase}/typing-text-block/`,
    status: "published",
    isPremium: true,
  },
  {
    name: "ttb/scramble-text",
    title: "Scramble Text",
    icon: scrambleIcon,
    docs: `${docsBase}/typing-text-block/`,
    status: "published",
    isPremium: true,
  },
  {
    name: "ttb/reflection-text",
    title: "Reflection Text",
    icon: reflectionIcon,
    docs: `${docsBase}/typing-text-block/`,
    status: "published",
    isPremium: true,
  },
  {
    name: "ttb/long-shadow-text",
    title: "Long Shadow Text",
    icon: longShadowIcon,
    docs: `${docsBase}/typing-text-block/`,
    status: "published",
    isPremium: true,
  },
  {
    name: "ttb/tracking-text",
    title: "Tracking-In Text",
    icon: trackingIcon,
    docs: `${docsBase}/typing-text-block/`,
    status: "published",
    isPremium: true,
  },
  {
    name: "ttb/shine-text",
    title: "Shine Text",
    icon: shineIcon,
    docs: `${docsBase}/typing-text-block/`,
    status: "published",
    isPremium: true,
  },
  {
    name: "ttb/arc-text",
    title: "Curved Text",
    icon: arcIcon,
    docs: `${docsBase}/typing-text-block/`,
    status: "published",
    isPremium: true,
  },
  {
    name: "ttb/vertical-text",
    title: "Vertical Text",
    icon: verticalIcon,
    docs: `${docsBase}/typing-text-block/`,
    status: "published",
    isPremium: true,
  },
  {
    name: "ttb/rainbow-text",
    title: "Rainbow Text",
    icon: rainbowIcon,
    docs: `${docsBase}/typing-text-block/`,
    status: "published",
    isPremium: true,
  },
  {
    name: "ttb/split-text",
    title: "Split Text",
    icon: splitIcon,
    docs: `${docsBase}/typing-text-block/`,
    status: "published",
    isPremium: true,
  },
];

// The core Text Typing block has its own standalone demo page; every other
// block links to its section on the all-in-one demo page via ?block=<slug>,
// which that page isolates to show only that one demo.
export const allBlocks = blockCatalog.map((block) => {
  const slug = block.name.replace("ttb/", "");
  return {
    ...block,
    demo:
      block.name === "ttb/text-typing"
        ? `${demoBase}/text-typing/`
        : `${demoBase}/text-typing-block/?block=${slug}#${slug}`,
  };
});
