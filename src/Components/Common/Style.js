import { mobileBreakpoint, tabBreakpoint } from '../../../../bpl-tools/utils/data';
import { getBackgroundCSS, getBorderCSS, getSpaceCSS, getTypoCSS, isValidCSS } from '../../../../bpl-tools/utils/getCSS';

import { prefix } from '../../utils/data';

const Style = ({ attributes, id }) => {
	const { textAlign, background = {}, padding, prefixTypo, prefixColor, typingContentsTypo, suffixTypo, suffixColor, animatedSize = {}, border = {} } = attributes;

	const textTypingSl = `#${id} .${prefix}`;
	const defaultThemeSl = `${textTypingSl}.default`;

	return <style dangerouslySetInnerHTML={{
		__html: `
		${getTypoCSS('', prefixTypo)?.googleFontLink}
		${getTypoCSS('', typingContentsTypo)?.googleFontLink}
		${getTypoCSS('', suffixTypo)?.googleFontLink}
		${getTypoCSS(`${textTypingSl} .prefixText`, prefixTypo)?.styles}
		${getTypoCSS(`${textTypingSl} .typingContents, ${textTypingSl} .typed-cursor`, typingContentsTypo)?.styles}
		${getTypoCSS(`${textTypingSl} .suffixText`, suffixTypo)?.styles}

		${defaultThemeSl}{
			${getBackgroundCSS(background)};
			${isValidCSS('width', animatedSize?.width['desktop'])};
			text-align: ${textAlign};
			box-sizing: border-box;
			display: block;
		}
		${textTypingSl}{
			${isValidCSS('padding', getSpaceCSS(padding))}
			${getBorderCSS(border)}
		}
		${textTypingSl} .prefixText{
			${isValidCSS('color', prefixColor)}
			margin: 0;
		}
		${textTypingSl} .suffixText{
			${isValidCSS('color', suffixColor)}
			margin: 0;
		}

		${tabBreakpoint}{
			${defaultThemeSl}{
				${isValidCSS('width', animatedSize?.width['tablet'])}
			}
		}

		${mobileBreakpoint}{
			${defaultThemeSl}{
				${isValidCSS('width', animatedSize?.width['mobile'])}
			}
		}
		`.replace(/\s+/g, ' ')
	}} />;
}
export default Style;
