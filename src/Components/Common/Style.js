import {
  mobileBreakpoint,
  tabBreakpoint,
} from "../../../../bpl-tools/utils/data";
import {
  getBackgroundCSS,
  getBorderCSS,
  getSpaceCSS,
  getTypoCSS,
  isValidCSS,
} from "../../../../bpl-tools/utils/getCSS";

import { prefix } from "../../utils/data";
import { sanitizeStyleTag } from '../../utils/sanitizeStyleTag';

const Style = ({ attributes, id }) => {
  const {
    textAlign,
    background = {},
    padding,
    prefixTypo,
    prefixColor,
    typingContentsTypo,
    suffixTypo,
    suffixColor,
    animatedSize = {},
    color,
    terminalHeadingBg = {},
    terminalHeadingTextColor = "#ccc",
    terminalHeadTypo = {},
    isCustomBG = false,
    iconSize = {},
    border = {},
  } = attributes;

  const textTypingSl = `#${id} .${prefix}`;

  const defaultThemeSl = `${textTypingSl}.default`;
  const terminalThemeSl = `${textTypingSl}.terminal`;
  const terminalHeaderSl = `${terminalThemeSl} .terminal-header`;
  const terminalHeadTextSl = `${terminalHeaderSl} .title`;
  const starFlowerThemeSl = `${textTypingSl}.starFlower`;
  const starFlowInlineSl = `${starFlowerThemeSl} .starFlower-inline`;

  const themeThreeSl = `${textTypingSl}.neonGrid`;
  const themeThreeIconSl = `${themeThreeSl} .neonGrid-icon`;

  const themeThreePrefixSl = `${themeThreeSl} .neonGrid-prefix`;
  const themeThreeTypingSl = `${themeThreeSl} .neonGrid-typing`;
  const themeThreeSuffixSl = `${themeThreeSl} .neonGrid-suffix`;

  const themeFourSl = `${textTypingSl}.auroraGlow`;
  const themeFourIconSl = `${themeFourSl} .auroraGlow-icon`;
  const themeFourPrefixSl = `${themeFourSl} .auroraGlow-prefix`;
  const themeFourTypingSl = `${themeFourSl} .auroraGlow-typing`;
  const themeFourSuffixSl = `${themeFourSl} .auroraGlow-suffix`;

  const themeFiveSl = `${textTypingSl}.cyberWave`;
  const themeFiveFrameSl = `${themeFiveSl} .cyberWave`;
  const themeFiveIconSl = `${themeFiveFrameSl} .cyberWave-icon`;
  const themeFivePrefixSl = `${themeFiveFrameSl} .cyberWave-prefix`;
  const themeFiveTypingSl = `${themeFiveFrameSl} .cyberWave-typing`;
  const themeFiveSuffixSl = `${themeFiveFrameSl} .cyberWave-suffix`;

  const bgStyle = isCustomBG
    ? getBackgroundCSS(background) // eta asbe "background: rgba(...)"
    : `background: repeating-linear-gradient(
      -45deg,
      #0a0a0f,
      #0a0a0f 20px,
      #141427 20px,
      #141427 40px
    )`;

  const bgStyle2 = isCustomBG
    ? getBackgroundCSS(background) // already "background: rgba(...)"
    : `background: radial-gradient(circle at 20% 30%, rgba(0, 255, 200, 0.15), transparent 70%),
										radial-gradient(circle at 80% 70%, rgba(200, 0, 255, 0.15), transparent 70%),
										#0a0a0f !important`;

  const checkBgHide = "#0000";
  const checkBg = `background: repeating-linear-gradient(
												60deg,
												rgba(0, 255, 200, 0.08) 0,
												rgba(0, 255, 200, 0.08) 2px,
												transparent 2px,
												transparent 6px
											)`;

  const checkList = (background) => {
    if (background?.color == "#0000") {
      return checkBgHide;
    } else {
      return checkBg;
    }
  };

  const fiveBeforeEffect = `background: conic-gradient(from 0deg,
		#ff00ff,
		#00ffff,
		#00ff6a,
		#ffae00,
		#ff00ff)`;

  const checkListFive = (background) => {
    if (background?.color == "#0000") {
      return;
    } else {
      return fiveBeforeEffect;
    }
  };

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: sanitizeStyleTag(`
		${getTypoCSS("", prefixTypo)?.googleFontLink}
		${getTypoCSS("", typingContentsTypo)?.googleFontLink}
		${getTypoCSS("", suffixTypo)?.googleFontLink}
		@keyframes typingCursorBlink { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }

		${getTypoCSS(`${textTypingSl} .prefixText`, prefixTypo)?.styles}
		${
      getTypoCSS(
        `${textTypingSl} .typingContents, ${textTypingSl} .typed-cursor`,
        typingContentsTypo,
      )?.styles
    }
		${getTypoCSS(`${textTypingSl} .suffixText`, suffixTypo)?.styles}
		${getTypoCSS(`${terminalHeadTextSl}`, terminalHeadTypo)?.styles}
		${getTypoCSS(`${starFlowInlineSl} .textAnimate`, typingContentsTypo)?.styles}
		${getTypoCSS(`${themeThreePrefixSl}`, prefixTypo)?.styles}
		${getTypoCSS(`${themeThreeTypingSl}`, typingContentsTypo)?.styles}
		${getTypoCSS(`${themeThreeSuffixSl}`, suffixTypo)?.styles}
		${getTypoCSS(`${themeFourPrefixSl}`, prefixTypo)?.styles}
		${getTypoCSS(`${themeFourTypingSl}`, typingContentsTypo)?.styles}
		${getTypoCSS(`${themeFourSuffixSl}`, suffixTypo)?.styles}
		${getTypoCSS(`${themeFivePrefixSl}`, prefixTypo)?.styles}
		${getTypoCSS(`${themeFiveTypingSl}`, typingContentsTypo)?.styles}
		${getTypoCSS(`${themeFiveSuffixSl}`, suffixTypo)?.styles}


		${themeFiveSl} {
    		${bgStyle};
				text-align: ${textAlign};
  		}
		${themeFiveSl}::before{
			${checkListFive}
		}
		${themeFiveFrameSl}{
			${bgStyle};
			}
		${defaultThemeSl}{
			${getBackgroundCSS(background)};
			${isValidCSS("width", animatedSize?.width["desktop"])};
			text-align: ${textAlign};
			box-sizing: border-box;
			display: block;
			}
		${themeThreeSl}{
			${bgStyle2};
			${isValidCSS("width", animatedSize?.width["desktop"])}
			${getBorderCSS(border)};
			text-align: ${textAlign};
	}
			
	${themeThreeIconSl} img {
		${isValidCSS("width", iconSize?.width["desktop"])}
		}

		${textTypingSl}{
			${isValidCSS("padding", getSpaceCSS(padding))}
			${getBorderCSS(border)}
		}
		${textTypingSl} .prefixText{
			${isValidCSS("color", prefixColor)}
			margin: 0;
		}
		${textTypingSl} .suffixText{
			${isValidCSS("color", suffixColor)}
			margin: 0;
		}
		${terminalThemeSl}{
			${getBackgroundCSS(background)}
			${isValidCSS("padding", getSpaceCSS(padding))}
			${isValidCSS("width", animatedSize?.width["desktop"])}
			${getBorderCSS(border)}
			text-align: ${textAlign}
		}
		${terminalHeaderSl}{
			${getBackgroundCSS(terminalHeadingBg)}
		}
		${terminalHeadTextSl}{
			${isValidCSS("color", terminalHeadingTextColor)}

		}
		${starFlowerThemeSl}{
			${isValidCSS("color", color)};
			${getBackgroundCSS(background)};
			${isValidCSS("padding", getSpaceCSS(padding))};
			${isValidCSS("width", animatedSize?.width["desktop"])};
			${isValidCSS("height", animatedSize?.height["desktop"])};
			${getBorderCSS(border)};
			justify-content: ${textAlign};
		}
		
		${themeThreePrefixSl}{
			${isValidCSS("color", prefixColor)}
		}
		${themeThreeSuffixSl}{
			${isValidCSS("color", suffixColor)}
		}
		
		${themeFourSl}{
			${getBackgroundCSS(background)}
			${isValidCSS("width", animatedSize?.width["desktop"])}
			${getBorderCSS(border)};
			text-align: ${textAlign};
		}

		${themeFourSl}::before{
			${checkList(background)}
		}

		${themeFourIconSl} img{
			${isValidCSS("width", iconSize?.width["desktop"])}
		}
		${themeFourPrefixSl}{
			${isValidCSS("color", prefixColor)}
		}
		${themeFourSuffixSl}{
			${isValidCSS("color", suffixColor)}
		}
		${themeFiveSl}{
			${isValidCSS("width", animatedSize?.width["desktop"])}
		}
		${themeFiveIconSl} img{
			${isValidCSS("width", iconSize?.width["desktop"])}
		}
		${themeFivePrefixSl}{
			${isValidCSS("color", prefixColor)}
		}
		${themeFiveSuffixSl}{
			${isValidCSS("color", suffixColor)}
		}

		${tabBreakpoint}{
			${terminalThemeSl}{
				${isValidCSS("width", animatedSize?.width["tablet"])}
			}
			${starFlowerThemeSl}{
				${isValidCSS("width", animatedSize?.width["tablet"])}
				${isValidCSS("height", animatedSize?.height["tablet"])}
      }
			${themeThreeIconSl} img{
				${isValidCSS("width", iconSize?.width["tablet"])}
			}
			${themeFourSl}{
				${isValidCSS("width", animatedSize?.width["tablet"])}
			}
			${themeFourIconSl} img{
				${isValidCSS("width", iconSize?.width["tablet"])}
			}
			${themeFiveSl}{
				${isValidCSS("width", animatedSize?.width["tablet"])}
			}
			${themeFiveIconSl} img{
				${isValidCSS("width", iconSize?.width["tablet"])}
			}
		}

		${mobileBreakpoint}{
			${terminalThemeSl}{
				${isValidCSS("width", animatedSize?.width["mobile"])}
			}
			${starFlowerThemeSl}{
				${isValidCSS("width", animatedSize?.width["mobile"])}
				${isValidCSS("height", animatedSize?.height["mobile"])}
				}
			${themeThreeIconSl} img{
				${isValidCSS("width", iconSize?.width["mobile"])}
			}
			${themeFourSl}{
				${isValidCSS("width", animatedSize?.width["mobile"])}
			}
			${themeFourIconSl} img{
				${isValidCSS("width", iconSize?.width["mobile"])}
			}
			${themeFiveSl}{
				${isValidCSS("width", animatedSize?.width["mobile"])}
			}
			${themeFiveIconSl} img{
				${isValidCSS("width", iconSize?.width["mobile"])}
			}
		}
		`).replace(/\s+/g, " "),
      }}
    />
  );
};
export default Style;
