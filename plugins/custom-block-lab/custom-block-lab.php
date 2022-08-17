<?php
/*
Plugin Name: Custom Block Lab
Version: 1.0.0
*/

add_action( 'init', 'custom_block_lab__register_blocks' );
function custom_block_lab__register_blocks() {
	register_block_type( __DIR__ . '/build/sample' );
	register_block_type( __DIR__ . '/build/audiovisual' );
}
