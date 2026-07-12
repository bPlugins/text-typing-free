import { useEffect, useRef } from "react";
import { prefix } from "../../../utils/data";
import "./themeStyles/themeThree.css";

const ThemeThree = ({ attributes }) => {
  const {
    prefixText,
    suffixText,
    typingContents,
    typeSpeed,
    startDelay,
    backSpeed,
    backDelay,
    isShuffle,
    isFadeOut,
    fadeOutDelay,
    isLoop,
    loopCount,
    isCursor,
    cursorChar,
    themes = {},
    iconList = {},
    isIcon = true,
  } = attributes;

  const typingEl = useRef(null);
  const typedInstance = useRef(null);

  const { theme } = themes;
  const { uploadIconUrl } = iconList;

  useEffect(() => {
    if (!typingContents || typingContents.length === 0) return;

    const options = {
      strings: typingContents.map((data) => data.text),
      typeSpeed,
      startDelay,
      backSpeed,
      backDelay,
      shuffle: isShuffle,
      fadeOut: isFadeOut,
      fadeOutDelay,
      loop: isLoop,
      loopCount: loopCount === 0 ? Infinity : loopCount,
      showCursor: isCursor,
      cursorChar,
      autoInsertCss: false,
      contentType: "html",
      preStringTyped: (pos, self) => {
        if (self && typingContents[self.sequence[pos]]) {
          const color = typingContents[self.sequence[pos]].color || "#00ff9c";
          self.el.style.color = color;
          if (isCursor && self.cursor) {
            self.cursor.style.color = color;
          }
        }
      },
    };

    typedInstance.current = new window.Typed(typingEl.current, options);

    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
    };
  }, [
    typingContents,
    typeSpeed,
    startDelay,
    backSpeed,
    backDelay,
    isShuffle,
    isFadeOut,
    fadeOutDelay,
    isLoop,
    loopCount,
    isCursor,
    cursorChar,
  ]);

  return (
    <div className={`${prefix} ${theme}`}>
      {
        isIcon && <>
          <div className="neonGrid-icon">
            {uploadIconUrl && <img src={uploadIconUrl} alt="icon" />}
          </div>
        </>
      }
      {prefixText && (
        <div
          className="neonGrid-prefix"
          dangerouslySetInnerHTML={{ __html: prefixText }}
        />
      )}
      <div className="neonGrid-typing">
        <span ref={typingEl}></span>
      </div>
      {suffixText && (
        <div
          className="neonGrid-suffix"
          dangerouslySetInnerHTML={{ __html: suffixText }}
        />
      )}
    </div>
  );
};

export default ThemeThree;