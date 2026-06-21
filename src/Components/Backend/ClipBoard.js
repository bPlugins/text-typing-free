import { useState } from "react";

const ClipBoard = ({ shortcode }) => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(shortcode);
      } else {
        // Fallback for insecure contexts or browsers without Clipboard API
        const textarea = document.createElement("textarea");
        textarea.value = shortcode;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }

      setHasCopied(true);
      setTimeout(() => setHasCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <section className="clipBoard">
      <div className="clipBtnWrapper">
        <p>
          Copy this shortcode and paste it into your post, page, or text widget content.
        </p>
        <button onClick={handleCopy}>
          {hasCopied ? "Successfully copied!" : shortcode}
        </button>
      </div>
    </section>
  );
};

export default ClipBoard;
