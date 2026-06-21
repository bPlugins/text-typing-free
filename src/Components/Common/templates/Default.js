import { useEffect, useRef } from 'react';
import { prefix } from '../../../utils/data';

const Default = (props) => {
  const { attributes } = props;
  const { prefixText, typingContents, suffixText, typeSpeed, startDelay, backSpeed, backDelay, isShuffle, isFadeOut, fadeOutDelay, isLoop, loopCount, isCursor, cursorChar, themes = {} } = attributes;

  const { theme } = themes;

  const typingContentsEl = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: typingContents.map(data => data.text), // array of strings
      stringsElement: null, // stringsElement ID of element containing string children
      typeSpeed,
      startDelay,
      backSpeed,
      backDelay,
      smartBackspace: false, // smartBackspace only backspace what doesn't match the previous string
      shuffle: isShuffle,
      fadeOut: isFadeOut, // fadeOut Fade out instead of backspace
      fadeOutClass: 'typed-fade-out', // fadeOutClass css class for fade animation
      fadeOutDelay,
      loop: isLoop,
      loopCount: 0 === loopCount ? Infinity : loopCount,
      showCursor: isCursor,
      cursorChar,
      autoInsertCss: false, // autoInsertCss insert CSS for cursor and fadeOut into HTML <head>
      attr: null, // attr attribute for typing. Ex: input placeholder, value, or just HTML text
      bindInputFocusEvents: false, // bindInputFocusEvents bind to focus and blur if el is text input
      contentType: 'html', // contentType 'html' or 'null' for plaintext
      preStringTyped: (pos, self) => {
        if (self && typingContents[self.sequence[pos]]) {
          self.el.style.color = typingContents[self.sequence[pos]].color || '#333';

          if (isCursor) {
            self.cursor.style.color = typingContents[self.sequence[pos]].color || '#333';
          }
        }
      }
    }

    typed.current = new Typed(typingContentsEl.current, options);

    return () => typed.current.destroy();
  }, [typingContentsEl.current, typingContents, typeSpeed, startDelay, backSpeed, backDelay, isShuffle, isFadeOut, fadeOutDelay, isLoop, loopCount, isCursor, cursorChar]);

  return <div className={`${prefix} ${theme}`}>
    <span className='prefixText' dangerouslySetInnerHTML={{ __html: prefixText + '&nbsp;' }} />
    <span className='typingContents' ref={typingContentsEl}></span>
    <span className='suffixText' dangerouslySetInnerHTML={{ __html: suffixText }} />
  </div>
}
export default Default;