/**
 * Typed.js is initialized with `contentType: 'html'` so authors can put simple
 * inline markup (e.g. `<b>bold</b>`) inside a typing-contents string, and it
 * types that markup into the DOM via innerHTML. Because the raw attribute
 * value is user-editable (stored as JSON inside the block comment, so it's
 * reachable even by a Contributor without `unfiltered_html`), it must be
 * reduced to a small inline-formatting allowlist before Typed.js ever sees
 * it — otherwise a value like `<img src=x onerror=alert(1)>` runs for every
 * site visitor.
 *
 * This keeps the "bold/italic word" feature working while closing that hole:
 * it parses the string as HTML, rebuilds it keeping only allowlisted inline
 * tags, and drops every attribute (these tags need none to render correctly),
 * so no `onerror`/`style`/`href` vector survives either.
 */
const ALLOWED_TAGS = new Set([
  'B', 'STRONG', 'I', 'EM', 'U', 'S', 'STRIKE', 'DEL',
  'MARK', 'SMALL', 'SUB', 'SUP', 'BR', 'SPAN',
]);

const sanitizeNode = (sourceNode, doc) => {
  const out = [];
  sourceNode.childNodes.forEach((child) => {
    if (child.nodeType === Node.TEXT_NODE) {
      out.push(doc.createTextNode(child.textContent));
      return;
    }
    if (child.nodeType !== Node.ELEMENT_NODE) {
      // Comments, processing instructions, etc. — drop entirely.
      return;
    }
    const sanitizedChildren = sanitizeNode(child, doc);
    if (ALLOWED_TAGS.has(child.tagName)) {
      const clean = doc.createElement(child.tagName);
      sanitizedChildren.forEach((n) => clean.appendChild(n));
      out.push(clean);
    } else {
      // Disallowed tag: unwrap it, keep its sanitized contents.
      sanitizedChildren.forEach((n) => out.push(n));
    }
  });
  return out;
};

export const sanitizeTypedHtml = (html) => {
  if (!html) return '';
  if (typeof window === 'undefined' || typeof DOMParser === 'undefined') {
    // No DOM available (shouldn't happen in view.js/Edit.js, but fail safe).
    return '';
  }
  const parsed = new DOMParser().parseFromString(String(html), 'text/html');
  const wrapper = document.createElement('div');
  sanitizeNode(parsed.body, document).forEach((n) => wrapper.appendChild(n));
  return wrapper.innerHTML;
};

export default sanitizeTypedHtml;
