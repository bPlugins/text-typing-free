<?php
/**
 * Uninstall handler for Text Typing - Block (Free).
 *
 * Cleans up plugin data when the plugin is deleted from the admin.
 * Only runs if the user has opted in via the dashboard "Delete data on uninstall" setting.
 *
 * @package TTB
 */

// Exit if not called by WordPress.
if ( ! defined( 'WP_UNINSTALL_PLUGIN' ) ) {
	exit;
}

$ttb_is_delete_data = get_option( 'ttb_delete_data_on_uninstall', false );

if ( ! $ttb_is_delete_data ) {
	return;
}

// 1. Delete all 'text-typing' custom post type posts and their meta/revisions.
$ttb_post_ids = get_posts( array(
	'post_type'   => 'text-typing',
	'post_status' => 'any',
	'numberposts' => -1,
	'fields'      => 'ids',
) );

if ( ! empty( $ttb_post_ids ) ) {
	foreach ( $ttb_post_ids as $ttb_post_id ) {
		wp_delete_post( $ttb_post_id, true ); // Force delete (bypass trash).
	}
}

// 2. Delete plugin options.
$ttb_options_to_delete = array(
	'ttb_delete_data_on_uninstall',
	'ttbUtils',
);

foreach ( $ttb_options_to_delete as $ttb_option ) {
	delete_option( $ttb_option );
}
