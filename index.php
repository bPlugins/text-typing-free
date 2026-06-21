<?php
/**
 * Plugin Name: Text Typing - Block
 * Description: Make your text in amazing typing effect.
 * Version: 2.1.0
 * Tested up to: 7.0
 * Requires PHP: 7.4
 * Author: bPlugins
 * Author URI: https://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: text-typing
 * @fs_premium_only /freemius
 * @fs_free_only, /freemius-lite
 */

// ABS PATH
if ( !defined( 'ABSPATH' ) ) { 
	exit; 
}



if(function_exists('ttb_fs')){
	ttb_fs()->set_basename(true, __FILE__);
}else{
// Constant
define( 'TTB_PLUGIN_VERSION', isset( $_SERVER['HTTP_HOST'] ) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '2.1.0' );
define( 'TTB_DIR_URL', plugin_dir_url( __FILE__ ) );
define( 'TTB_DIR_PATH', plugin_dir_path( __FILE__ ) );

// Freemius Lite SDK bootstrap — defines the ttb_fs() helper.
require_once TTB_DIR_PATH . 'includes/fs-lite.php';

if( !class_exists( 'TTBPlugin' ) ) {
	class TTBPlugin {
		function __construct(){
			add_action( 'enqueue_block_assets', [$this, 'enqueueBlockAssets'] );
			add_action( 'init', [$this, 'onInit'] );

			// sub menu function hooks
			add_action('admin_menu', [$this, 'addSubmenu']);
			add_action('admin_enqueue_scripts', [$this, 'adminEnqueueScripts']);

			// dashboard settings: delete data on uninstall
			add_action('wp_ajax_ttbSaveUninstallOption', [$this, 'ttbSaveUninstallOption']);

			// Post Type function hooks 
			add_action('init', array($this, 'ttb_text_typing_post_type'));

			// shortcode type function hooks 
			add_shortcode('text-typing', [$this, 'ttb_shortcode_handler']);

			//manage column 
			add_filter('manage_text-typing_posts_columns', [$this, 'textTypingManageColumns'], 10);

			// Custom manage column 
			add_action('manage_text-typing_posts_custom_column', [$this, 'textTypingManageCustomColumns'], 10, 2);
		}

		//manage column
		function textTypingManageColumns($defaults)
		{
			unset($defaults['date']);
			$defaults['shortcode'] = 'ShortCode';
			$defaults['date'] = 'Date';
			return $defaults;
		}

		// custom manage column
		function textTypingManageCustomColumns($column_name, $post_ID)
		{
			if ($column_name == 'shortcode') {
				echo '<div class="bPlAdminShortcode" id="bPlAdminShortcode-' . esc_attr($post_ID) . '">
			 <input value="[text-typing id=' . esc_attr($post_ID) . ']" onclick="copyBPlAdminShortcode(\'' . esc_attr($post_ID) . '\')" readonly>
			 <span class="tooltip">Copy To Clipboard</span>
		 </div>';
			}
		}

		public function ttb_shortcode_handler($atts) {
				$post_id = isset($atts['id']) ? absint($atts['id']) : 0;
				if (!$post_id) {
					return '';
				}
				$post = get_post($post_id);
				if (!$post) {
					return '';
				}
				if (post_password_required($post)) {
					return get_the_password_form($post);
				}
				switch ($post->post_status) {
					case 'publish':
						return $this->displayContent($post);
					case 'private':
						if (current_user_can('read_private_posts')) {
							return $this->displayContent($post);
						}
						return '';
					case 'draft':
					case 'pending':
					case 'future':
						if (current_user_can('edit_post', $post_id)) {
							return $this->displayContent($post);
						}
						return '';
					default:
						return '';
				}
			}

			public function displayContent($post) {
				$blocks = parse_blocks($post->post_content);

				// The block's render.php already escapes all dynamic data (esc_attr).
				// Restrict the returned markup to the wrapper div + the data attribute
				// the front-end script reads, so shortcode output is explicitly escaped.
				$allowed_html = array(
					'div' => array(
						'class'           => true,
						'id'              => true,
						'style'           => true,
						'data-attributes' => true,
					),
				);

				return wp_kses( render_block( $blocks[0] ), $allowed_html );
			}

			// Custom Post Type function calls
			function ttb_text_typing_post_type()
			{

				$menuIcon = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z"></path></svg>';

				register_post_type(
					'text-typing',
					array(
						'label' => 'Text Typing',
						'labels' => [
							'name' => 'Text Typing',
							'singular_name' => 'Text Typing',
							'menu_name' => 'Text Typing',
							'all_items' => 'ShortCode Generator',
							'add_new' => 'Add New ShortCode',
							'add_new_item' => 'Add New ShortCode',
							'edit_item' => 'Edit Animated',
							'not_found' => 'There is no please add one',
							'item_published' => 'Published',
							'item_updated' => 'Updated'
						],
						'public' => false,
						'show_ui' => true,
						'show_in_rest' => true,
						'menu_icon' =>  'data:image/svg+xml;base64,' . base64_encode($menuIcon),
						'template' => [['ttb/text-typing']],
						'template_lock' => 'all',
					)
				);
			}

			// Save the "delete data on uninstall" preference from the dashboard Settings page.
			function ttbSaveUninstallOption() {
				$nonce = isset( $_POST['nonce'] ) ? sanitize_text_field( wp_unslash( $_POST['nonce'] ) ) : null;
				if ( ! wp_verify_nonce( $nonce, 'ttb_uninstall' ) ) {
					wp_send_json_error( [ 'message' => __( 'Invalid security token.', 'text-typing' ) ] );
				}

				if ( ! current_user_can( 'manage_options' ) ) {
					wp_send_json_error( [ 'message' => __( 'You do not have permission to perform this action.', 'text-typing' ) ] );
				}

				$enabled = isset( $_POST['enabled'] ) && ( 'true' === $_POST['enabled'] || true === $_POST['enabled'] || 1 == $_POST['enabled'] );
				update_option( 'ttb_delete_data_on_uninstall', $enabled );

				wp_send_json_success( [
					'enabled' => $enabled,
					'message' => __( 'Setting saved successfully.', 'text-typing' ),
				] );
			}

		function enqueueBlockAssets(){
			wp_register_script( 'typedJS', TTB_DIR_URL . 'public/js/typed.min.js', [], '2.0.12', true );
		}

		function onInit() {
			register_block_type( __DIR__ . '/build' );
		}

		function addSubmenu() {
				add_submenu_page(
					'edit.php?post_type=text-typing',
					'Help & Demo',
					'Help & Demos',
					'manage_options',
					'ttb_demo_page',
					[$this, 'ttb_render_demo_page']
				);
			}

			function ttb_render_demo_page() {
				?>
				<div id="ttbDashboard"
						data-info="<?php echo esc_attr(wp_json_encode([
							'version'=>TTB_PLUGIN_VERSION,
							'isPremium' => false,
							'hasPro' => false,
							'adminUrl' => admin_url(),
							'uninstallNonce' => wp_create_nonce( 'ttb_uninstall' ),
							'deleteDataOnUninstall' => (bool) get_option( 'ttb_delete_data_on_uninstall', false )
						]))?>"
						>
				</div>
				<?php
		}

			function adminEnqueueScripts()
			{
				$screen = get_current_screen();

				if (isset($screen->post_type) && $screen->post_type === 'text-typing') {
					// dashboard shortcode copy function
					wp_enqueue_style('dashboard-post-css', TTB_DIR_URL . 'build/dashboard-post-css.css', [], TTB_PLUGIN_VERSION);
					wp_enqueue_script('dashboard-post-js', TTB_DIR_URL . 'build/dashboard-post-js.js', [], TTB_PLUGIN_VERSION, true);
				}


				if (isset($screen->base) && $screen->base === 'text-typing_page_ttb_demo_page') {
					wp_enqueue_script('ttb-dashboard-help', TTB_DIR_URL . 'build/dashboard.js', ['wp-element', 'wp-components', 'wp-api', 'wp-util'], TTB_PLUGIN_VERSION, true);
					wp_enqueue_style( 'ttb-dashboard-style', TTB_DIR_URL . 'build/dashboard.css', ['wp-components','wp-edit-blocks','wp-block-editor'], TTB_PLUGIN_VERSION );
					wp_set_script_translations('ttb-admin-help', 'text-typing', TTB_DIR_PATH . 'languages');
				}
			}

		}
		new TTBPlugin();
	}
}
