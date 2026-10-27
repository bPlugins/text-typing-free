<?php
if ( !defined( 'ABSPATH' ) ) { exit; }

$id = wp_unique_id( 'ttbTextTyping-' );
?>

<div
	<?php // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- get_block_wrapper_attributes() is properly escaped ?>
	<?php echo get_block_wrapper_attributes(); ?>
	id='<?php echo esc_attr( $id ); ?>'
	data-attributes='<?php echo ttb_json_attr( $attributes ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- double-encoded by ttb_json_attr(). ?>'
></div>