import { useEffect, useRef } from 'react';
import { prefix } from '../../../utils/data';
import { sanitizeTypedHtml } from '../../../utils/sanitizeTypedHtml';
import './themeStyles/terminal.css';

const Terminal = (props) => {
  const { attributes } = props;
  const { prefixText, suffixText, typingContents, typeSpeed, startDelay, backSpeed, backDelay, isShuffle, isFadeOut, fadeOutDelay, isLoop, loopCount, isCursor, cursorChar, terminal = {}, themes = {} } = attributes;

  const typingContentsEl = useRef(null);
  const typed = useRef(null);

  const { theme } = themes;

  const { headerText } = terminal;

  useEffect(() => {
    const options = {
      strings: typingContents.map(data => sanitizeTypedHtml(data.text)),
      typeSpeed,
      startDelay,
      backSpeed,
      backDelay,
      shuffle: isShuffle,
      fadeOut: isFadeOut,
      fadeOutDelay,
      loop: isLoop,
      loopCount: 0 === loopCount ? Infinity : loopCount,
      showCursor: isCursor,
      cursorChar: sanitizeTypedHtml(cursorChar),
      autoInsertCss: false,
      contentType: 'html',
      preStringTyped: (pos, self) => {
        if (self && typingContents[self.sequence[pos]]) {
          const color = typingContents[self.sequence[pos]].color || '#00ff9c';
          self.el.style.color = color;
          if (isCursor) {
            self.cursor.style.color = color;
            self.cursor.style.marginTop = '-2px';
            self.cursor.style.paddingLeft = '4px';
          }
        }
      }
    };

    typed.current = new Typed(typingContentsEl.current, options);
    return () => typed.current.destroy();
  }, [typingContents, typeSpeed, startDelay, backSpeed, backDelay, isShuffle, isFadeOut, fadeOutDelay, isLoop, loopCount, isCursor, cursorChar]);

  return (
    <div className={`${prefix} ${theme}`}>
      <div className="terminal-header">
        <span className="dot red"></span>
        <span className="dot yellow"></span>
        <span className="dot green"></span>
        <span className='title'>{headerText}</span>
      </div>
      <div className="terminal-body">
        <span className='prefixText' dangerouslySetInnerHTML={{ __html: sanitizeTypedHtml(prefixText) }} />
        <div className="typingContents">
          <span ref={typingContentsEl}></span>
        </div>
        <span className='suffixText' dangerouslySetInnerHTML={{ __html: sanitizeTypedHtml(suffixText) }} />
      </div>
    </div>
  );
};

export default Terminal;
