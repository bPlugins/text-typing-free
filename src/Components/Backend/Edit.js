import { useBlockProps } from '@wordpress/block-editor';
import { withSelect } from "@wordpress/data";
import { useEffect, useState } from 'react';

import { tabController } from '../../../../bpl-tools/utils/functions';

import Style from '../Common/Style';
import ThemeSwitch from '../Common/ThemeSwitch';
import Settings from './Settings/Settings';

import { prefix } from '../../utils/data';
import CopyShortcode from './CopyShortcode';

const Edit = props => {
	const { attributes, setAttributes, clientId, isSelected, currentPostId, CTPType } = props;

	useEffect(() => tabController(), [isSelected]);
	const [device, setDevice] = useState('Desktop');

	const shortcode = `[text-typing id=${currentPostId}]`;
	const isBlockEditor = window?.wp?.blockEditor;

	const id = `${prefix}-${clientId}`;


	return <>
		<Settings attributes={attributes} setAttributes={setAttributes} device={device} setDevice={setDevice} clientId={clientId} />

		<div {...useBlockProps()} id={id}>
			<Style attributes={attributes} id={id} />

			{isBlockEditor && (CTPType === "text-typing") && <CopyShortcode shortcode={shortcode} />}

			<ThemeSwitch attributes={attributes} />
		</div>
	</>;
};


export default withSelect((select) => {
	const currentPostId = select('core/editor').getCurrentPostId();
	const CTPType = select('core/editor').getCurrentPostType?.();

	return {
		currentPostId,
		CTPType
	}
})(Edit);