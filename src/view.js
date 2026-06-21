import { createRoot } from 'react-dom';

import Style from './Components/Common/Style';
import ThemeSwitch from './Components/Common/ThemeSwitch';
import './style.scss';

document.addEventListener('DOMContentLoaded', () => {
	const typingEls = document.querySelectorAll('.wp-block-ttb-text-typing');
	typingEls.forEach(typingEl => {
		const attributes = JSON.parse(typingEl.dataset.attributes);

		createRoot(typingEl).render(<>
			<Style attributes={attributes} id={typingEl.id} />

			<ThemeSwitch attributes={attributes} />
		</>);

		typingEl?.removeAttribute('data-attributes');
	});
});
