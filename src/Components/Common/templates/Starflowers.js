import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { prefix } from "../../../utils/data";
import './themeStyles/StarFlower.css';

const colors = [
  { main: "#FBDB4A", shades: ["#FAE073", "#FCE790", "#FADD65", "#E4C650"] },
  { main: "#F3934A", shades: ["#F7B989", "#F9CDAA", "#DD8644", "#F39C59"] },
  { main: "#EB547D", shades: ["#EE7293", "#F191AB", "#D64D72", "#C04567"] },
  { main: "#9F6AA7", shades: ["#B084B6", "#C19FC7", "#916198", "#82588A"] },
  { main: "#5476B3", shades: ["#6382B9", "#829BC7", "#4D6CA3", "#3E5782"] },
  { main: "#2BB19B", shades: ["#4DBFAD", "#73CDBF", "#27A18D", "#1F8171"] },
  { main: "#70B984", shades: ["#7FBE90", "#98CBA6", "#68A87A", "#5E976E"] }
];

const shapes = ["■", "▲", "▼", "◆", "◢", "◣", "◤", "◥", "★"];

const Starflower = ({ attributes }) => {
  const { typingContents, textAlignment, themes = {}, color, prefixText, suffixText, backDelay, startDelay, loopCount, isLoop, isRandomColor = true, typeSpeed } = attributes;
  const { theme } = themes;

  const textRef = useRef(null);
  const offscreenTextRef = useRef(null);
  const lettersRef = useRef([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [completedLoops, setCompletedLoops] = useState(0);


  useEffect(() => {
    if (!typingContents || typingContents.length === 0) return;

    const timer = setTimeout(() => {
      animateFullText(typingContents[0].text);
    }, startDelay);

    return () => clearTimeout(timer);
  }, []);

  // currentIndex change হলে animate হবে
  useEffect(() => {
    if (!typingContents || typingContents.length === 0) return;
    if (currentIndex === 0 && completedLoops === 0) return;

    // ✅ Stop condition (loopCount != 0 হলে)
    if (!isLoop) return;
    if (loopCount !== 0 && completedLoops >= loopCount) return;

    animateFullText(typingContents[currentIndex].text);
  }, [currentIndex, completedLoops]);

  useEffect(() => {
    if (textAlignment && textRef.current) {
      textRef.current.style.textAlign = textAlignment;
    }
  }, [textAlignment]);

  const animateFullText = (text) => {
    if (!text || isAnimating) return;

    setIsAnimating(true);
    lettersRef.current = [];
    textRef.current.innerHTML = "";
    offscreenTextRef.current.innerHTML = "";

    text.split("").forEach((char, i) => {
      setTimeout(() => {
        const formattedChar = char === " " ? "\u00A0" : char;
        const letter = document.createElement("span");
        const oLetter = document.createElement("span");
        letter.textContent = formattedChar;
        oLetter.textContent = formattedChar;

        const colorValue = isRandomColor ? colors[i % colors.length] : color;
        letter.style.color = colorValue.main;

        if (textRef.current) {
          textRef.current.appendChild(letter);
        }

        if (offscreenTextRef.current) {
          offscreenTextRef.current.appendChild(oLetter);
        }

        lettersRef.current.push({ onScreen: letter, offScreen: oLetter, char: formattedChar });

        animateLetterIn(letter);

        if (i === text.length - 1) {
          setTimeout(() => {
            setIsAnimating(false);

            // ✅ Next Index
            if (currentIndex === typingContents.length - 1) {
              // এক রাউন্ড শেষ
              setCompletedLoops(prev => prev + 1);

              // Infinity হলে আবার 0
              if (loopCount === 0 || completedLoops + 1 < loopCount) {
                setCurrentIndex(0);
              }
            } else {
              // পরের index এ যাবে
              setCurrentIndex(prev => prev + 1);
            }

          }, backDelay);
        }
      }, i * typeSpeed);
    });
  };


  const animateLetterIn = (letter) => {
    const yOffset = (0.5 + Math.random() * 0.5) * 50;
    gsap.fromTo(letter,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.4, ease: "back.out" }
    );
    gsap.to(letter, {
      y: -yOffset,
      duration: 0.2,
      ease: "power3.inOut",
      yoyo: true,
      repeat: 1
    });
    gsap.to(letter, {
      rotation: -50 + Math.random() * 100,
      duration: 0.2,
      ease: "power3.inOut",
      yoyo: true,
      repeat: 1
    });

    generateConfetti(letter);
  };

  const generateConfetti = (letter) => {
    // Use the letter's OWN document/window so confetti works both on the
    // frontend and inside the editor iframe (WP 6.3+ iframes the canvas).
    // Referencing the global `document`/`window` here would append confetti to
    // the outer document while positioning it with iframe-relative coordinates.
    const ownerDoc = letter.ownerDocument;
    const ownerWin = ownerDoc.defaultView || window;

    for (let i = 0; i < 10 + Math.floor(Math.random() * 2); i++) {
      const confetti = ownerDoc.createElement("span");
      confetti.textContent = shapes[Math.floor(Math.random() * shapes.length)];
      confetti.style.position = "absolute";
      confetti.style.color = colors[Math.floor(Math.random() * colors.length)].main;
      confetti.style.fontSize = "25px";
      confetti.style.pointerEvents = "none";
      confetti.style.zIndex = "9999";
      confetti.classList.add('noornabi_shapes');

      ownerDoc.body.appendChild(confetti);

      const rect = letter.getBoundingClientRect();
      confetti.style.left = `${rect.left + rect.width / 2 + ownerWin.scrollX}px`;
      confetti.style.top = `${rect.top + rect.height / 2 + ownerWin.scrollY}px`;

      const xDirection = (Math.random() - 0.5) * 200;
      const yDirection = (Math.random() - 0.5) * 200;

      gsap.to(confetti, {
        x: xDirection,
        y: yDirection,
        opacity: 0,
        scale: 0.5,
        duration: 1,
        ease: "power2.out",
        onComplete: () => confetti.remove(),
      });
    }
  };

  return (
    <div className={`${prefix} ${theme}`}>
      <div className="starFlower-inline">
        {prefixText && (
          <span
            className="prefixText"
            dangerouslySetInnerHTML={{ __html: prefixText + " " }}
          />
        )}
        <span ref={offscreenTextRef} className="offscreen-text" />
        <span ref={textRef} className="textAnimate" />
        {suffixText && (
          <span
            className="suffixText"
            style={{ marginTop: '5px' }}
            dangerouslySetInnerHTML={{ __html: " " + suffixText }}
          />
        )}
      </div>
    </div>
  );
};

export default Starflower;
