import { __ } from '@wordpress/i18n';

export const generalStyleTabs = [
	{ name: 'general', title: __('General', 'text-typing') },
	{ name: 'style', title: __('Style', 'text-typing') }
];


// `preview` mirrors each theme's real background + typing color so the picker
// shows a representative swatch instead of a generic placeholder.
export const themePresets = [
	{
		label: "Default",
		value: "default",
		preview: { bg: '#f4f6fb', color: '#146ef5' },
	},
	{
		label: "Terminal",
		value: "terminal",
		preview: { bg: '#2B2B3C', color: '#0BA6DF' },
	},
	{
		label: "Star Flower",
		value: "starFlower",
		preview: { bg: '#22292C', color: '#ffffff' },
	},
	{
		label: "Neon Grid",
		value: "neonGrid",
		preview: { bg: '#0a0a0f', color: '#D93DC7' },
	},
	{
		label: "Aurora Glow",
		value: "auroraGlow",
		preview: { bg: 'linear-gradient(135deg, #0a0a0f 0%, #141427 100%)', color: '#2BC69C' },
	},
	{
		label: "Cyber Wave",
		value: "cyberWave",
		preview: { bg: '#0b0f17', color: '#1DCCA8' },
	}
];
