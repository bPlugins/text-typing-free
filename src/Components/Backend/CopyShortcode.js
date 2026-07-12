import { useRef } from "react";
import { __ } from "@wordpress/i18n";

import "./CopyShortcode.scss";

const CopyShortcode = ({ shortcode }) => {
  const inputRef = useRef(null);
  const tooltip = useRef(null);

  const handleCopy = () => {
    const input = inputRef.current;
    if (!input) return;

    input.select();

    const done = () => {
      if (tooltip.current) {
        tooltip.current.innerHTML = __("Copied Successfully!", "text-typing");
        setTimeout(() => {
          if (tooltip.current) {
            tooltip.current.innerHTML = __("Copy To Clipboard", "text-typing");
          }
        }, 1500);
      }
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(shortcode).then(done).catch(() => {});
    } else {
      document.execCommand("copy");
      done();
    }
  };

  return (
    <div className="ttb-shortcode-bar">
      <div className="ttb-shortcode-input-group">
        <input ref={inputRef} readOnly value={shortcode} />
        <button
          type="button"
          onClick={handleCopy}
          className="ttb-copy-button"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
          <span ref={tooltip} className="ttb-tooltip">
            {__("Copy To Clipboard", "text-typing")}
          </span>
        </button>
      </div>
      <span className="ttb-shortcode-label">
        {__("Copy the shortcode and use it anywhere.", "text-typing")}
      </span>
    </div>
  );
};

export default CopyShortcode;
