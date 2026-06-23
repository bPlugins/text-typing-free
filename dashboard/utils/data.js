const slug = "text-typing";

export const dashboardInfo = (info) => {
  const {
    version,
    isPremium,
    hasPro,
    licenseActiveNonce,
    adminUrl,
    uninstallNonce,
    deleteDataOnUninstall,
  } = info;

  const proSuffix = isPremium ? " Pro" : "";

  return {
    name: `Typing Text${proSuffix}`,
    displayName: `Typing Text${proSuffix} - Add Animated Typing Effects to Headings or Text`,
    description:
      "Typing Text Block is a powerful and easy-to-use WordPress block that lets you create realistic typing text animations without any coding. Perfect for hero sections, banners, headlines, and call-to-action areas, it helps you highlight key messages in an engaging and modern way.",
    slug,
    version,
    isPremium,
    hasPro,
    adminUrl,
    uninstallNonce,
    deleteDataOnUninstall,
    displayOurPlugins: true,
    media: {
      logo: `https://ps.w.org/${slug}/assets/icon-128x128.png`,
      banner: `https://ps.w.org/${slug}/assets/banner-772x250.png`,
      thumbnail: `https://bplugins.com/wp-content/themes/b-technologies/assets/images/products/${slug}.png`,
      // proThumbnail: `https://bplugins.com/wp-content/themes/b-technologies/assets/images/products/${slug}-pro.png`,
      // video: 'https://youtu.be/n3B4SpbDS30',
      // isYoutube: true
    },
    pages: {
      org: `https://wordpress.org/plugins/${slug}/`,
      landing: `https://bplugins.com/products/${slug}/`,
      docs: `https://bplugins.com/docs/typing-text-block/`,
      pricing: `https://bplugins.com/products/${slug}/pricing`,
    },
    freemius: {
      product_id: 20170,
      plan_id: 33453,
      public_key: "pk_b0a805a4574f7a1db93e8859282de",
    },

    licenseActiveNonce,

    startButton: {
      label: "Start Now",
      url: "wp-admin/post-new.php?post_type=text-typing",
    },
  };
};

export const welcomeInfo = (adminUrl = "") => ({
  // Hero card keyword chips (rendered by the canonical Welcome/Overview).
  keywordsLabel: "Themes",
  keywords: [
    "Default",
    "Terminal",
    "Star Flower",
    "Neon Grid",
    "Aurora Glow",
    "Cyber Wave",
  ],

  // Tabbed getting-started guide shown beside the hero card.
  gettingStarted: {
    tabs: [
      {
        key: "block-editor",
        label: "Block Editor",
        steps: [
          {
            num: 1,
            title: "Open the Editor",
            body: "Edit any post or page, or create a new one.",
            link: { url: `${adminUrl}post-new.php`, label: "New Post" },
          },
          {
            num: 2,
            title: "Insert the Typing Text Block",
            body: "Click the <strong>+</strong> inserter and search <strong>Typing Text</strong>, then drop it into your content.",
          },
          {
            num: 3,
            title: "Add Your Phrases",
            body: "Type the words or sentences you want animated. Add a <strong>prefix/suffix</strong> or multiple lines to cycle through.",
          },
          {
            num: 4,
            title: "Style & Publish",
            body: "Pick a theme, tune cursor, speed, colors, and loop in the sidebar, then <strong>Publish</strong>.",
          },
        ],
      },
      {
        key: "shortcode",
        label: "Shortcode",
        steps: [
          {
            num: 1,
            title: "Create a Typing Text",
            body: "Go to <strong>Text Typing &rsaquo; Add New ShortCode</strong> and build your animation.",
            link: {
              url: `${adminUrl}post-new.php?post_type=text-typing`,
              label: "Add New",
            },
          },
          {
            num: 2,
            title: "Copy the Shortcode",
            body: 'From the <strong>ShortCode Generator</strong> list, copy the <code>[text-typing id="…"]</code> shortcode.',
            link: {
              url: `${adminUrl}edit.php?post_type=text-typing`,
              label: "ShortCode Generator",
            },
          },
          {
            num: 3,
            title: "Paste Anywhere",
            body: "Drop the shortcode into any post, page, widget, or template that accepts shortcodes.",
          },
          {
            num: 4,
            title: "Reuse & Update",
            body: "Edit the source once and every place that uses the shortcode updates automatically.",
          },
        ],
      },
      {
        key: "elementor",
        label: "Elementor",
        steps: [
          {
            num: 1,
            title: "Create a Typing Text",
            body: "Go to <strong>Text Typing &rsaquo; Add New ShortCode</strong> to build and save your animation, then copy its shortcode.",
            link: {
              url: `${adminUrl}post-new.php?post_type=text-typing`,
              label: "Add New",
            },
          },
          {
            num: 2,
            title: "Edit with Elementor",
            body: "Open any post or page in the <strong>Elementor</strong> editor.",
          },
          {
            num: 3,
            title: "Add Shortcode Widget",
            body: "Search for the <strong>Shortcode</strong> widget in the Elementor elements panel and drag it into your layout.",
          },
          {
            num: 4,
            title: "Paste Shortcode",
            body: 'Paste your shortcode (e.g. <code>[text-typing id="…"]</code>) into the widget input field and save your changes.',
          },
        ],
      },
      {
        key: "php",
        label: "PHP",
        steps: [
          {
            num: 1,
            title: "Get the ID",
            body: "Go to <strong>Text Typing &rsaquo; ShortCode Generator</strong> and note the <strong>ID</strong> of the typing text you want to embed.",
            link: {
              url: `${adminUrl}edit.php?post_type=text-typing`,
              label: "ShortCode Generator",
            },
          },
          {
            num: 2,
            title: "Copy PHP Function",
            body: "Use the WordPress <code>do_shortcode</code> function: <pre><code>&lt;?php echo do_shortcode('[text-typing id=\"YOUR_ID\"]'); ?&gt;</code></pre>",
          },
          {
            num: 3,
            title: "Insert in Template",
            body: "Open your theme or template files (e.g. <code>single.php</code>, <code>page.php</code>) in an editor.",
          },
          {
            num: 4,
            title: "Replace ID & Save",
            body: "Paste the code into your PHP file and replace <code>YOUR_ID</code> with the actual ID of your typing text.",
          },
        ],
      },
    ],
  },

  // Release notes — Changelog renders a colored badge from `type`.
  changelogs: [
    {
      version: "2.0.6 - 28 Feb 26",
      type: "update",
      list: [
        "<strong>Update:</strong> Redesigned dashboard and renamed the admin menu item.",
        "<strong>Update:</strong> Rebuilt as a fully free edition — removed all locked/premium features so the plugin is completely free and functional, per WordPress.org directory guidelines.",
        "<strong>Update:</strong> Premium themes and advanced effects are now available only in the separate Text Typing Pro plugin, which now ships an expanded collection of 22 themes — Terminal, Star Flower, Neon Grid, Aurora Glow, Cyber Wave, Code Editor, Gradient Flow, Glitch Pulse, Vintage Typewriter, Block Stack, Liquid Morph, Ink Signature, Bounce Pop, LED Marquee, Holo Foil, Inferno Blaze, Matrix Rain, Comic Pop, Golden Luxe, Watercolor Ink, Frosted Glass, and Decrypt Cipher — with per-theme effect controls.",
        "<strong>Security:</strong> Hardened shortcode output escaping and input sanitization.",
        "<strong>Update:</strong> Documented the build process and bundled third-party libraries in the readme, and removed an unused third-party script.",
      ],
    },
    {
      version: "2.0.5 – 15 Feb 26",
      type: "update",
      list: [
        "<strong>Add:</strong> Instantly switch between predefined themes to change the typing text appearance.",
        "<strong>Improve:</strong> Some Pro features now preview on the frontend without a license.",
        "<strong>Improve:</strong> Premium-quality Pro upgrade modal.",
      ],
    },
    {
      version: "2.0.4 – 17 Jan 26",
      type: "update",
      list: ["<strong>Update:</strong> Dashboard info updated."],
    },
    {
      version: "2.0.3 – 16 Nov 25",
      type: "update",
      list: [
        "<strong>Update:</strong> Freemius SDK updated to the latest version.",
        "<strong>Add:</strong> Demo page created for this plugin.",
      ],
    },
  ],
  changelogsLimit: 5,
  changelogsReadMoreLabel: "View Full Changelog",

  // Pro upsell bullets shown in ProAds (free users only).
  proFeatures: [
    "Choose from a variety of pre-designed themes for unique text animations",
    "Custom Colors & Gradients: Text, cursor, background, with smooth gradient support",
    "Access premium animation styles for stunning visuals",
    "Loop & Delay Options: Repeat or pause typing with precise timing",
    "Cursor Styling: Change style, size, and color for a personalized look",
    "Prefix & Suffix Text: Add extra words before or after typing text",
    "Optional Icons for Each Text: Users can add icons before/after text or skip entirely",
    "Premium Animations: Exclusive smooth effects available only in Pro",
  ],
});

// Shared icon used by the additional theme demo entries below.
const demoIcon = (
  <svg
    stroke="#000"
    fill="#000"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M5 9V7H7V9H5Z" fill="currentColor"></path>
    <path d="M9 9H19V7H9V9Z" fill="currentColor"></path>
    <path d="M5 15V17H7V15H5Z" fill="currentColor"></path>
    <path d="M19 17H9V15H19V17Z" fill="currentColor"></path>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V6ZM4 5H20C20.5523 5 21 5.44772 21 6V11H3V6C3 5.44772 3.44772 5 4 5ZM3 13V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V13H3Z"
      fill="currentColor"></path>
  </svg>
);

export const demoInfo = {
  allInOneLabel: "See All Demos",
  allInOneLink: "https://bblockswp.com/demo/text-typing/",
  demos: [
    {
      title: "Default Style",
      description: "Clean typing animation with the default look.",
      url: "https://bblockswp.com/demo/typing-text-default/",
      icon: (
        <svg
          stroke="#000"
          fill="#000"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M5 9V7H7V9H5Z" fill="currentColor"></path>
          <path d="M9 9H19V7H9V9Z" fill="currentColor"></path>
          <path d="M5 15V17H7V15H5Z" fill="currentColor"></path>
          <path d="M19 17H9V15H19V17Z" fill="currentColor"></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V6ZM4 5H20C20.5523 5 21 5.44772 21 6V11H3V6C3 5.44772 3.44772 5 4 5ZM3 13V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V13H3Z"
            fill="currentColor"></path>
        </svg>
      ),
      type: "iframe",
    },
    {
      title: "Terminal",
      description: "Command-line terminal look with a blinking block cursor.",
      url: "https://bblockswp.com/demo/typing-text-terminal/",
      icon: (
        <svg
          stroke="#000"
          fill="#000"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M5 9V7H7V9H5Z" fill="currentColor"></path>
          <path d="M9 9H19V7H9V9Z" fill="currentColor"></path>
          <path d="M5 15V17H7V15H5Z" fill="currentColor"></path>
          <path d="M19 17H9V15H19V17Z" fill="currentColor"></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V6ZM4 5H20C20.5523 5 21 5.44772 21 6V11H3V6C3 5.44772 3.44772 5 4 5ZM3 13V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V13H3Z"
            fill="currentColor"></path>
        </svg>
      ),
      type: "iframe",
    },
    {
      title: "Star Flower",
      description: "Decorative star-flower accents around the typing text.",
      url: "https://bblockswp.com/demo/typing-text-star-flower/",
      icon: (
        <svg
          stroke="#000"
          fill="#000"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M5 9V7H7V9H5Z" fill="currentColor"></path>
          <path d="M9 9H19V7H9V9Z" fill="currentColor"></path>
          <path d="M5 15V17H7V15H5Z" fill="currentColor"></path>
          <path d="M19 17H9V15H19V17Z" fill="currentColor"></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V6ZM4 5H20C20.5523 5 21 5.44772 21 6V11H3V6C3 5.44772 3.44772 5 4 5ZM3 13V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V13H3Z"
            fill="currentColor"></path>
        </svg>
      ),
      type: "iframe",
    },
    {
      title: "Neon Grid",
      description: "Glowing neon text over a retro grid backdrop.",
      url: "https://bblockswp.com/demo/typing-text-neon-grid/",
      icon: (
        <svg
          stroke="#000"
          fill="#000"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M5 9V7H7V9H5Z" fill="currentColor"></path>
          <path d="M9 9H19V7H9V9Z" fill="currentColor"></path>
          <path d="M5 15V17H7V15H5Z" fill="currentColor"></path>
          <path d="M19 17H9V15H19V17Z" fill="currentColor"></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V6ZM4 5H20C20.5523 5 21 5.44772 21 6V11H3V6C3 5.44772 3.44772 5 4 5ZM3 13V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V13H3Z"
            fill="currentColor"></path>
        </svg>
      ),
      type: "iframe",
    },
    {
      title: "Aurora Glow",
      description: "Shows every available control option.",
      url: "https://bblockswp.com/demo/typing-text-aurora-glow/",
      icon: (
        <svg
          stroke="#000"
          fill="#000"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M5 9V7H7V9H5Z" fill="currentColor"></path>
          <path d="M9 9H19V7H9V9Z" fill="currentColor"></path>
          <path d="M5 15V17H7V15H5Z" fill="currentColor"></path>
          <path d="M19 17H9V15H19V17Z" fill="currentColor"></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V6ZM4 5H20C20.5523 5 21 5.44772 21 6V11H3V6C3 5.44772 3.44772 5 4 5ZM3 13V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V13H3Z"
            fill="currentColor"></path>
        </svg>
      ),
      type: "iframe",
    },
    {
      title: "Cyber Wave",
      description: "Retro synthwave look with neon cyber tones.",
      url: "https://bblockswp.com/demo/typing-text-cyber-wave/",
      icon: (
        <svg
          stroke="#000"
          fill="#000"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M5 9V7H7V9H5Z" fill="currentColor"></path>
          <path d="M9 9H19V7H9V9Z" fill="currentColor"></path>
          <path d="M5 15V17H7V15H5Z" fill="currentColor"></path>
          <path d="M19 17H9V15H19V17Z" fill="currentColor"></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V6ZM4 5H20C20.5523 5 21 5.44772 21 6V11H3V6C3 5.44772 3.44772 5 4 5ZM3 13V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V13H3Z"
            fill="currentColor"></path>
        </svg>
      ),
      type: "iframe",
    },
    {
      title: "Code Editor",
      description: "Code-editor styling with a syntax-highlight feel.",
      url: "https://bblockswp.com/demo/typing-text-code-editor/",
      icon: demoIcon,
      type: "iframe",
    },
    {
      title: "Gradient Flow",
      description: "Gradient-filled text with a flowing color sweep.",
      url: "https://bblockswp.com/demo/typing-text-gradient-flow/",
      icon: demoIcon,
      type: "iframe",
    },
    {
      title: "Glitch Pulse",
      description: "Cyberpunk RGB-split glitch with a scanline overlay.",
      url: "https://bblockswp.com/demo/typing-text-glitch-pulse/",
      icon: demoIcon,
      type: "iframe",
    },
    {
      title: "Vintage Typewriter",
      description: "Aged-parchment typewriter with a mechanical ink press.",
      url: "https://bblockswp.com/demo/typing-text-vintage-typewriter/",
      icon: demoIcon,
      type: "iframe",
    },
    {
      title: "Block Stack",
      description: "Bold 3D extruded headline that pops up per character.",
      url: "https://bblockswp.com/demo/typing-text-block-stack/",
      icon: demoIcon,
      type: "iframe",
    },
    {
      title: "Liquid Morph",
      description: "Gooey liquid-metal characters that merge like mercury.",
      url: "https://bblockswp.com/demo/typing-text-liquid-morph/",
      icon: demoIcon,
      type: "iframe",
    },
    {
      title: "Ink Signature",
      description: "Fountain-pen script with ink bleed and a signed flourish.",
      url: "https://bblockswp.com/demo/typing-text-ink-signature/",
      icon: demoIcon,
      type: "iframe",
    },
    {
      title: "Bounce Pop",
      description: "Playful elastic letters that spring into place.",
      url: "https://bblockswp.com/demo/typing-text-bounce-pop/",
      icon: demoIcon,
      type: "iframe",
    },
    {
      title: "LED Marquee",
      description: "Retro LED dot-matrix board with a marquee scan.",
      url: "https://bblockswp.com/demo/typing-text-led-marquee/",
      icon: demoIcon,
      type: "iframe",
    },
    {
      title: "Holo Foil",
      description: "Iridescent holographic foil shimmer with a moving glint.",
      url: "https://bblockswp.com/demo/typing-text-holo-foil/",
      icon: demoIcon,
      type: "iframe",
    },
    {
      title: "Inferno Blaze",
      description: "Flaming text with rising embers and heat haze.",
      url: "https://bblockswp.com/demo/typing-text-inferno-blaze/",
      icon: demoIcon,
      type: "iframe",
    },
    {
      title: "Matrix Rain",
      description: "Hacker digital rain cascading behind glowing green text.",
      url: "https://bblockswp.com/demo/typing-text-matrix-rain/",
      icon: demoIcon,
      type: "iframe",
    },
    {
      title: "Comic Pop",
      description: "Comic-book action panel with halftone dots and a starburst.",
      url: "https://bblockswp.com/demo/typing-text-comic-pop/",
      icon: demoIcon,
      type: "iframe",
    },
    {
      title: "Golden Luxe",
      description: "Brushed-gold foil headline with a slow shine sweep.",
      url: "https://bblockswp.com/demo/typing-text-golden-luxe/",
      icon: demoIcon,
      type: "iframe",
    },
    {
      title: "Watercolor Ink",
      description: "Soft watercolor pigment bleed on a paper wash.",
      url: "https://bblockswp.com/demo/typing-text-watercolor-ink/",
      icon: demoIcon,
      type: "iframe",
    },
    {
      title: "Frosted Glass",
      description: "Translucent frosted-glass card with a drifting color blob.",
      url: "https://bblockswp.com/demo/typing-text-frosted-glass/",
      icon: demoIcon,
      type: "iframe",
    },
    {
      title: "Decrypt Cipher",
      description: "HUD terminal decrypt effect cycling through cipher glyphs.",
      url: "https://bblockswp.com/demo/typing-text-decrypt-cipher/",
      icon: demoIcon,
      type: "iframe",
    },
  ],
};

export const pricingInfo = {
  logo: `https://ps.w.org/${slug}/assets/icon-128x128.png`, // Optional
  pluginId: 17879,
  planId: 29699,
  licenses: [1, 3, null],
  button: {
    label: "Buy Now ➜",
  },
  featured: {
    selected: 3, // choose from licenses item
  },
};
