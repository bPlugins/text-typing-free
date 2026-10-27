/**
 * Every block's Style.js assembles a CSS string from block attributes
 * (colors, fonts, custom values from bpl-tools/utils/getCSS helpers, which
 * do no escaping of their own) and injects it into a live `<style>` tag via
 * dangerouslySetInnerHTML. `<style>` content is parsed as raw text up to the
 * first literal `</style>` sequence, so a crafted attribute value containing
 * that sequence breaks out of the tag and can inject a real `<script>`.
 *
 * CSS never legitimately needs a literal "<", so stripping it closes every
 * variant of that breakout (`</style>`, a smuggled `<script>`, etc.) without
 * needing to touch the shared, unescaped getCSS helpers themselves.
 */
export const sanitizeStyleTag = (css) => String(css ?? '').replace(/</g, '');

export default sanitizeStyleTag;
