<?php
/**
 * Bundled block patterns.
 *
 * The block arrives from the inserter as one typing line on an empty page,
 * which is a long way from the hero, launch screen or call-to-action band
 * people actually came here to build. These patterns are those sections,
 * ready made: insert one, rewrite the words, done.
 *
 * Every pattern turns the icon off. It is on by default and points at an image
 * on a third-party host, so a pattern that left it alone would put an outbound
 * request on the page before the user had chosen anything.
 *
 * @package text-typing
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Serialise the typing block into block markup.
 *
 * The block renders from render.php and saves nothing between its delimiters,
 * so a self-closing comment is the whole of it.
 *
 * @param array $attrs Block attributes.
 * @return string
 */
function ttb_pattern_block( $attrs = array() ) {
	$attrs = array_merge(
		array(
			// Default is true, pointing at a remote image. Patterns never do that.
			'isIcon'        => false,
			// Explicit per-line colours only mean something with this off.
			'isRandomColor' => false,
		),
		$attrs
	);

	return '<!-- wp:ttb/text-typing ' . wp_json_encode( $attrs, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE ) . ' /-->';
}

/**
 * A centred core heading.
 *
 * @param string $text  Heading text.
 * @param int    $level Heading level.
 * @return string
 */
function ttb_pattern_heading( $text, $level = 2 ) {
	$level = (int) $level;

	return '<!-- wp:heading {"textAlign":"center","level":' . $level . '} -->'
		. '<h' . $level . ' class="wp-block-heading has-text-align-center">' . esc_html( $text ) . '</h' . $level . '>'
		. '<!-- /wp:heading -->';
}

/**
 * A centred core paragraph.
 *
 * @param string $text     Paragraph text.
 * @param string $classes  Extra classes, e.g. has-small-font-size.
 * @return string
 */
function ttb_pattern_paragraph( $text, $classes = '' ) {
	$class = trim( 'has-text-align-center ' . $classes );

	return '<!-- wp:paragraph {"align":"center"} -->'
		. '<p class="' . esc_attr( $class ) . '">' . esc_html( $text ) . '</p>'
		. '<!-- /wp:paragraph -->';
}

/**
 * A centred row of core buttons.
 *
 * @param array $buttons List of button labels.
 * @return string
 */
function ttb_pattern_buttons( $buttons ) {
	$markup = '';
	foreach ( $buttons as $i => $label ) {
		// The second button reads as secondary.
		$outline = $i > 0 ? ' {"className":"is-style-outline"}' : '';
		$class   = $i > 0 ? 'wp-block-button is-style-outline' : 'wp-block-button';

		$markup .= '<!-- wp:button' . $outline . ' -->'
			. '<div class="' . esc_attr( $class ) . '"><a class="wp-block-button__link wp-element-button">' . esc_html( $label ) . '</a></div>'
			. '<!-- /wp:button -->';
	}

	return '<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->'
		. '<div class="wp-block-buttons">' . $markup . '</div>'
		. '<!-- /wp:buttons -->';
}

/**
 * A vertical spacer.
 *
 * @param int $px Height in pixels.
 * @return string
 */
function ttb_pattern_spacer( $px = 32 ) {
	$px = (int) $px;

	return '<!-- wp:spacer {"height":"' . $px . 'px"} -->'
		. '<div style="height:' . $px . 'px" aria-hidden="true" class="wp-block-spacer"></div>'
		. '<!-- /wp:spacer -->';
}

/**
 * Wrap a pattern's blocks in a group.
 *
 * @param string $inner Inner block markup.
 * @param string $align full, wide or empty.
 * @return string
 */
function ttb_pattern_group( $inner, $align = '' ) {
	$attrs   = $align ? '{"align":"' . $align . '","layout":{"type":"constrained"}}' : '{"layout":{"type":"constrained"}}';
	$classes = $align ? 'wp-block-group align' . $align : 'wp-block-group';

	return '<!-- wp:group ' . $attrs . ' -->'
		. '<div class="' . esc_attr( $classes ) . '">' . $inner . '</div>'
		. '<!-- /wp:group -->';
}

/**
 * Register the pattern category and the patterns themselves.
 *
 * @return void
 */
function ttb_register_patterns() {
	if ( ! function_exists( 'register_block_pattern' ) ) {
		return;
	}

	$category = 'text-typing';

	register_block_pattern_category(
		$category,
		array( 'label' => __( 'Typing Text & Headlines', 'text-typing' ) )
	);

	$patterns = array();

	/* Agency hero -------------------------------------------------------- */
	$patterns['agency-hero'] = array(
		'title'       => __( 'Agency hero with rotating services', 'text-typing' ),
		'description' => __( 'A centred hero whose headline cycles through the services you offer, with a short line of copy and two buttons.', 'text-typing' ),
		'keywords'    => array( 'hero', 'agency', 'headline', 'typing' ),
		'content'     => ttb_pattern_group(
			ttb_pattern_heading( __( 'Digital products, built properly.', 'text-typing' ), 1 )
			. ttb_pattern_block(
				array(
					'themes'             => array( 'theme' => 'default' ),
					'prefixText'         => __( 'We build ', 'text-typing' ),
					'typingContents'     => array(
						array(
							'text'  => __( 'WordPress plugins', 'text-typing' ),
							'color' => '#146ef5',
						),
						array(
							'text'  => __( 'design systems', 'text-typing' ),
							'color' => '#0f766e',
						),
						array(
							'text'  => __( 'Shopify storefronts', 'text-typing' ),
							'color' => '#9a3412',
						),
						array(
							'text'  => __( 'brand identities', 'text-typing' ),
							'color' => '#7c2d92',
						),
					),
					'prefixTypo'         => array( 'fontSize' => array( 'desktop' => 40, 'tablet' => 32, 'mobile' => 24 ) ),
					'typingContentsTypo' => array(
						'fontSize'   => array( 'desktop' => 40, 'tablet' => 32, 'mobile' => 24 ),
						'fontWeight' => 700,
					),
					'animatedSize'       => array(
						'width'  => array( 'desktop' => '100%', 'tablet' => '', 'mobile' => '' ),
						'height' => array( 'desktop' => '140px', 'tablet' => '', 'mobile' => '' ),
					),
				)
			)
			. ttb_pattern_paragraph( __( 'A small team that ships. Twelve years of it, mostly for people who had been let down once already.', 'text-typing' ) )
			. ttb_pattern_spacer( 24 )
			. ttb_pattern_buttons( array( __( 'See our work', 'text-typing' ), __( 'Start a project', 'text-typing' ) ) ),
			'wide'
		),
	);

	/* Developer terminal ------------------------------------------------- */
	$patterns['developer-terminal'] = array(
		'title'       => __( 'Developer terminal hero', 'text-typing' ),
		'description' => __( 'A portfolio opener in the Terminal theme, typing out what you are working on as if into a shell.', 'text-typing' ),
		'keywords'    => array( 'terminal', 'developer', 'portfolio', 'code' ),
		'content'     => ttb_pattern_group(
			ttb_pattern_heading( __( 'Sarah Jenkins — full-stack developer', 'text-typing' ), 1 )
			. ttb_pattern_paragraph( __( 'Berlin. Mostly PHP and TypeScript. Occasionally Rust, when nobody is looking.', 'text-typing' ) )
			. ttb_pattern_spacer( 24 )
			. ttb_pattern_block(
				array(
					'themes'             => array( 'theme' => 'terminal' ),
					'terminal'           => array( 'headerText' => 'sarah@portfolio: ~' ),
					'prefixText'         => '$ ',
					'typingContents'     => array(
						array(
							'text'  => __( 'building accessible interfaces', 'text-typing' ),
							'color' => '#0BA6DF',
						),
						array(
							'text'  => __( 'reviewing pull requests', 'text-typing' ),
							'color' => '#2BC69C',
						),
						array(
							'text'  => __( 'shipping on Fridays anyway', 'text-typing' ),
							'color' => '#e8874f',
						),
					),
					'prefixTypo'         => array( 'fontSize' => array( 'desktop' => 20, 'tablet' => 18, 'mobile' => 16 ) ),
					'typingContentsTypo' => array(
						'fontSize'   => array( 'desktop' => 20, 'tablet' => 18, 'mobile' => 16 ),
						'fontWeight' => 500,
					),
					'typeSpeed'          => 70,
					'backSpeed'          => 40,
				)
			),
			'wide'
		),
	);

	/* SaaS hero ---------------------------------------------------------- */
	$patterns['saas-hero'] = array(
		'title'       => __( 'SaaS hero with gradient headline', 'text-typing' ),
		'description' => __( 'A product hero in the Aurora Glow theme, rotating through what the product replaces, with a single call to action.', 'text-typing' ),
		'keywords'    => array( 'saas', 'hero', 'product', 'gradient' ),
		'content'     => ttb_pattern_group(
			ttb_pattern_paragraph( __( 'Now in open beta', 'text-typing' ), 'has-small-font-size' )
			. ttb_pattern_heading( __( 'Stop stitching five tools together.', 'text-typing' ), 1 )
			. ttb_pattern_spacer( 16 )
			. ttb_pattern_block(
				array(
					'themes'             => array( 'theme' => 'auroraGlow' ),
					'prefixText'         => __( 'One place for ', 'text-typing' ),
					'typingContents'     => array(
						array(
							'text'  => __( 'your roadmap', 'text-typing' ),
							'color' => '#2BC69C',
						),
						array(
							'text'  => __( 'your changelog', 'text-typing' ),
							'color' => '#7cc6e8',
						),
						array(
							'text'  => __( 'your whole team', 'text-typing' ),
							'color' => '#ffd166',
						),
					),
					'prefixTypo'         => array( 'fontSize' => array( 'desktop' => 34, 'tablet' => 28, 'mobile' => 22 ) ),
					'typingContentsTypo' => array(
						'fontSize'   => array( 'desktop' => 34, 'tablet' => 28, 'mobile' => 22 ),
						'fontWeight' => 700,
					),
				)
			)
			. ttb_pattern_spacer( 24 )
			. ttb_pattern_buttons( array( __( 'Start free trial', 'text-typing' ) ) )
			. ttb_pattern_paragraph( __( 'No card. Cancel whenever.', 'text-typing' ), 'has-small-font-size' ),
			'wide'
		),
	);

	/* Coming soon -------------------------------------------------------- */
	$patterns['coming-soon'] = array(
		'title'       => __( 'Coming soon screen', 'text-typing' ),
		'description' => __( 'A full-width launch screen in the Neon Grid theme, for a site that is not ready yet but wants to collect interest.', 'text-typing' ),
		'keywords'    => array( 'coming soon', 'launch', 'waitlist', 'neon' ),
		'content'     => ttb_pattern_group(
			ttb_pattern_heading( __( 'Coming soon', 'text-typing' ), 1 )
			. ttb_pattern_spacer( 16 )
			. ttb_pattern_block(
				array(
					'themes'             => array( 'theme' => 'neonGrid' ),
					'prefixText'         => '',
					'typingContents'     => array(
						array(
							'text'  => __( 'Something is being built here.', 'text-typing' ),
							'color' => '#D93DC7',
						),
						array(
							'text'  => __( 'It goes live this autumn.', 'text-typing' ),
							'color' => '#7cc6e8',
						),
						array(
							'text'  => __( 'Leave your email and we will say when.', 'text-typing' ),
							'color' => '#2BC69C',
						),
					),
					'typingContentsTypo' => array(
						'fontSize'   => array( 'desktop' => 28, 'tablet' => 24, 'mobile' => 18 ),
						'fontWeight' => 600,
					),
					'typeSpeed'          => 60,
					'backDelay'          => 1200,
				)
			)
			. ttb_pattern_spacer( 24 )
			. ttb_pattern_buttons( array( __( 'Join the waitlist', 'text-typing' ) ) ),
			'full'
		),
	);

	/* Mid-page section intro --------------------------------------------- */
	$patterns['section-intro'] = array(
		'title'       => __( 'Section heading with rotating focus', 'text-typing' ),
		'description' => __( 'A smaller typing headline for the middle of a page, where a full hero would be too much.', 'text-typing' ),
		'keywords'    => array( 'section', 'heading', 'services', 'about' ),
		'content'     => ttb_pattern_group(
			ttb_pattern_block(
				array(
					'themes'             => array( 'theme' => 'default' ),
					'prefixText'         => __( 'Specialists in ', 'text-typing' ),
					'typingContents'     => array(
						array(
							'text'  => __( 'accessibility', 'text-typing' ),
							'color' => '#0f766e',
						),
						array(
							'text'  => __( 'performance', 'text-typing' ),
							'color' => '#9a3412',
						),
						array(
							'text'  => __( 'WordPress at scale', 'text-typing' ),
							'color' => '#146ef5',
						),
					),
					'prefixTypo'         => array( 'fontSize' => array( 'desktop' => 26, 'tablet' => 22, 'mobile' => 18 ) ),
					'typingContentsTypo' => array(
						'fontSize'   => array( 'desktop' => 26, 'tablet' => 22, 'mobile' => 18 ),
						'fontWeight' => 600,
					),
					'animatedSize'       => array(
						'width'  => array( 'desktop' => '100%', 'tablet' => '', 'mobile' => '' ),
						'height' => array( 'desktop' => '90px', 'tablet' => '', 'mobile' => '' ),
					),
				)
			)
			. ttb_pattern_paragraph( __( 'Three of us, all senior, all hands on. Nothing gets handed to a junior the week after you sign.', 'text-typing' ) )
		),
	);

	/* Call-to-action band ------------------------------------------------ */
	$patterns['cta-band'] = array(
		'title'       => __( 'Call-to-action band', 'text-typing' ),
		'description' => __( 'A full-width band in the Cyber Wave theme to close a landing page, with one button.', 'text-typing' ),
		'keywords'    => array( 'cta', 'call to action', 'banner', 'footer' ),
		'content'     => ttb_pattern_group(
			ttb_pattern_block(
				array(
					'themes'             => array( 'theme' => 'cyberWave' ),
					'prefixText'         => __( 'Ready to ', 'text-typing' ),
					'typingContents'     => array(
						array(
							'text'  => __( 'see it running?', 'text-typing' ),
							'color' => '#1DCCA8',
						),
						array(
							'text'  => __( 'talk it through?', 'text-typing' ),
							'color' => '#7cc6e8',
						),
						array(
							'text'  => __( 'get started?', 'text-typing' ),
							'color' => '#ffd166',
						),
					),
					'prefixTypo'         => array( 'fontSize' => array( 'desktop' => 30, 'tablet' => 26, 'mobile' => 20 ) ),
					'typingContentsTypo' => array(
						'fontSize'   => array( 'desktop' => 30, 'tablet' => 26, 'mobile' => 20 ),
						'fontWeight' => 700,
					),
					'animatedSize'       => array(
						'width'  => array( 'desktop' => '100%', 'tablet' => '', 'mobile' => '' ),
						'height' => array( 'desktop' => '120px', 'tablet' => '', 'mobile' => '' ),
					),
				)
			)
			. ttb_pattern_spacer( 16 )
			. ttb_pattern_buttons( array( __( 'Book a demo', 'text-typing' ) ) ),
			'full'
		),
	);

	/*
	 * Pattern search matches title, description and keywords — not the category
	 * label. Someone who has just read "Typing Text & Headlines" in the category
	 * list and types it into the search box gets nothing back, so the category's
	 * own wording goes on every pattern as a keyword.
	 */
	$base_keywords = array(
		__( 'typing', 'text-typing' ),
		__( 'typing text', 'text-typing' ),
		__( 'text typing', 'text-typing' ),
		__( 'headlines', 'text-typing' ),
		__( 'animated text', 'text-typing' ),
	);

	foreach ( $patterns as $slug => $pattern ) {
		register_block_pattern(
			'text-typing/' . $slug,
			array(
				'title'       => $pattern['title'],
				'description' => $pattern['description'],
				'categories'  => array( $category ),
				'keywords'    => array_values( array_unique( array_merge( $base_keywords, $pattern['keywords'] ) ) ),
				'content'     => $pattern['content'],
			)
		);
	}
}

/**
 * Late on init: register_block_pattern() silently drops a pattern whose blocks
 * are not registered yet, and the block registers on init at the default
 * priority.
 */
add_action( 'init', 'ttb_register_patterns', 20 );
