<?php
/**
 * Freemius Lite SDK bootstrap for Text Typing - Block (Free).
 *
 * Defines the `ttb_fs()` helper. This is the FREE edition, so it ships and
 * loads only the lite SDK (/freemius-lite) — there is no Pro/full-Freemius
 * code path here. Mirrors video-gallery-block's includes/fs-lite.php.
 *
 * Requires TTB_DIR_PATH to be defined by index.php before this file is loaded.
 *
 * @package TTB
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'ttb_fs' ) ) {
	// Create a helper function for easy SDK access.
	function ttb_fs() {
		global $ttb_fs;

		if ( ! isset( $ttb_fs ) ) {
			// Include the Freemius Lite SDK.
			require_once TTB_DIR_PATH . 'freemius-lite/start.php';

			$ttb_fs = fs_dynamic_init( array(
				'id'                  => '20170',
				'slug'                => 'text-typing',
				// Resolve the SDK against the plugin root, not this includes/ file.
				'__FILE__'            => TTB_DIR_PATH . 'index.php',
				'premium_slug'        => 'text-typing-pro',
				'type'                => 'plugin',
				'public_key'          => 'pk_b0a805a4574f7a1db93e8859282de',
				'is_premium'          => false,
				'premium_suffix'      => 'Pro',
				'has_premium_version' => true,
				'has_addons'          => false,
				'has_paid_plans'      => true,
				'menu'                => array(
					'slug'       => 'edit.php?post_type=text-typing',
					'first-path' => 'edit.php?post_type=text-typing&page=ttb_demo_page',
					'support'    => false,
				),
			) );
		}

		return $ttb_fs;
	}

	// Init Freemius Lite.
	ttb_fs();
	// Show this plugin's own icon on the Freemius opt-in screen. Without it the SDK
	// looks inside its own folder and falls back to a grey plug.
	ttb_fs()->add_filter( 'plugin_icon', function () {
		return wp_normalize_path( TTB_DIR_PATH . 'public/icon.svg' );
	} );
	// Signal that the SDK was initiated.
	do_action( 'ttb_fs_loaded' );
}
