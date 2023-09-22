<?php
/**
 * Plugin Name: WooCommerce Block Template Inspector
 * Plugin URI: https://github.com/woocommerce/woocommerce-block-template-inspector
 * Description: Enables an experimental block template inspector to help with development and debugging of the new product editor. For use only on development sites. Do not use on production sites.
 * Author: WooCommerce
 * Author URI: https://woocommerce.com/
 * Version: 0.1.0
 * Requires at least: 6.2
 * Requires PHP: 7.4
 *
 * WC requires at least: 8.2.0
 */
/**
 * Plugin Name: WooCommerce Block Template Inspector
 */
if ( ! function_exists( 'woocommerce_block_template_inspector_enqueue_script' ) ) {
	function woocommerce_block_template_inspector_enqueue_script() {
		$js_script_src = plugin_dir_url( __FILE__ ) . 'woocommerce-block-template-inspector.js';

		wp_enqueue_script(
			'woocommerce-block-template-inspector',
			plugin_dir_url( __FILE__ ) . 'woocommerce-block-template-inspector.js',
			[],
			filemtime( dirname( __FILE__ ) . '/woocommerce-block-template-inspector.js' ),
			true
		);
	}

	add_action( 'admin_enqueue_scripts', 'woocommerce_block_template_inspector_enqueue_script' );
}
