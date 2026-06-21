import { registerBlockType } from '@wordpress/blocks';

import './editor.scss';
import metadata from './block.json';
import Edit from './Components/Backend/Edit';
import { typingIcon } from './utils/icons';

registerBlockType(metadata, {
	icon: typingIcon,

	edit: Edit,

	save: () => null
});