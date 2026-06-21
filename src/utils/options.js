import { __ } from '@wordpress/i18n';

export const generalStyleTabs = [
	{ name: 'general', title: __('General', 'text-typing') },
	{ name: 'style', title: __('Style', 'text-typing') }
];

export const pricingPage = `${location.origin}/wp-admin/edit.php?post_type=text-typing&page=ttb_demo_page#/pricing`;


export const themePresets = [
	{
		label: "Default",
		value: "default",
	}
];