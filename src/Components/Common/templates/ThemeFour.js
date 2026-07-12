import { useEffect, useRef } from "react";
import { prefix } from "../../../utils/data";
import "./themeStyles/themeFour.css";

const ThemeFour = ({ attributes }) => {
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
    isRandomColor = true
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
      ...(isRandomColor == false && {
        preStringTyped: (pos, self) => {
          if (self && typingContents[self.sequence[pos]]) {
            const color = typingContents[self.sequence[pos]].color || "#00ff9c";
            self.el.style.color = color;
            if (isCursor && self.cursor) {
              self.cursor.style.color = color;
            }
          }
        },
      }),
    };

    typedInstance.current = new window.Typed(typingEl.current, options);

    return () => {
      if (typedInstance.current) typedInstance.current.destroy();
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
    isRandomColor
  ]);

  return (
    <div className={`${prefix} ${theme}`}>
      <div className="auroraGlow-frame">
        {
          isIcon && <>
            <div className="auroraGlow-icon">
              {uploadIconUrl && <img src={uploadIconUrl} alt="icon" />}
            </div>
          </>
        }
        {prefixText && (
          <div
            className="auroraGlow-prefix"
            dangerouslySetInnerHTML={{ __html: prefixText }}
          />
        )}
        <div className="auroraGlow-typing" style={
          isRandomColor ? {
            background: "linear-gradient(90deg, #ff00ff, #00ffff, #00ff6a, #ffae00)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "gradientMove 3s linear infinite",
          }
            : {}
        }>
          <span ref={typingEl}></span>
        </div>
        {suffixText && (
          <div
            className="auroraGlow-suffix"
            dangerouslySetInnerHTML={{ __html: suffixText }}
          />
        )}
      </div>
    </div>
  );
};

export default ThemeFour;
