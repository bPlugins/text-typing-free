import { AlignmentToolbar, BlockControls, InspectorControls } from '@wordpress/block-editor';
import { Button, Dashicon, __experimentalNumberControl as NumberControl, PanelBody, PanelRow, TabPanel, TextControl, ToggleControl, Tooltip, __experimentalUnitControl as UnitControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import { Background, BBlocksAds, ColorControl, Device, HelpPanel, Label, Typography } from '../../../../../bpl-tools/Components';
import { BorderControl, SpaceControl } from '../../../../../bpl-tools/Components/Deprecated';
import { AdvertiseCard } from '../../../../../bpl-tools/ProControls';
import { tabController, updateData } from '../../../../../bpl-tools/utils/functions';

import { withSelect } from '@wordpress/data';
import { generalStyleTabs, pricingPage } from '../../../utils/options';

const Settings = ({ attributes, setAttributes, device }) => {
	const { prefixText, typingContents, suffixText, typeSpeed, startDelay, backSpeed, backDelay, isShuffle, isFadeOut, fadeOutDelay, isLoop, loopCount, isCursor, cursorChar, textAlign, background, padding, prefixTypo, prefixColor, typingContentsTypo, suffixTypo, suffixColor, animatedSize = {}, border = {} } = attributes;

	const updateContents = (index, type, val) => {
		setAttributes({ typingContents: updateData(typingContents, val, index, type) });
	}

	return <>
		<InspectorControls>
			<div className='bPlInspectorInfo'>
				<BBlocksAds />
			</div>

			<TabPanel className='bPlTabPanel' activeClass='activeTab' tabs={generalStyleTabs} onSelect={tabController}>{tab => <>
				{'general' == tab.name && <>
					<HelpPanel slug='text-typing' docsLink='https://bblockswp.com/docs/text-typing-block' />

					<PanelBody className='bPlPanelBody addRemoveItems' title={__('Texts', 'text-typing')}>
						<Label className='mb5 mt5'>{__('Prefix Text:', 'text-typing')}</Label>
						<TextControl value={prefixText} onChange={val => setAttributes({ prefixText: val })} />

						<Label>{__('Typing Contents:', 'text-typing')}</Label>
						{typingContents.map((content, index) => <PanelRow key={index}>
							<TextControl value={content.text} onChange={val => updateContents(index, 'text', val)} />

							<ColorControl className='mt0' label='' value={content.color} onChange={val => updateContents(index, 'color', val)} />

							{typingContents.length > 1 && (
								<Tooltip text={__('Remove this text', 'text-typing')} placement="top" position="top">
									<Button
										onClick={(e) => {
											e.preventDefault();
											setAttributes({
												typingContents: [
													...typingContents.slice(0, index),
													...typingContents.slice(index + 1),
												],
											});
										}}
									>
										<Dashicon icon="no" />
									</Button>
								</Tooltip>
							)}

						</PanelRow>)}

						<div className='addItem' style={{ marginTop: "10px" }}>
							<Button label={__('Add Typing Content', 'text-typing')} onClick={() => setAttributes({ typingContents: [...typingContents, { text: 'Text Typing', color: '#146ef5' }] })}><Dashicon icon='plus' />{__('Add Typing Content', 'text-typing')}</Button>
						</div>

						<Label>{__('Suffix Text:', 'text-typing')}</Label>
						<TextControl value={suffixText} onChange={val => setAttributes({ suffixText: val })} />
					</PanelBody>


					<PanelBody className='bPlPanelBody' title={__('Typed Settings', 'text-typing')} initialOpen={false}>
						<PanelRow>
							<Label className=''>{__('Type Speed:', 'text-typing')}</Label>
							<NumberControl value={typeSpeed} onChange={val => setAttributes({ typeSpeed: parseInt(val) })} />
						</PanelRow>

						<PanelRow className='mt20'>
							<Label className=''>{__('Start Delay:', 'text-typing')}</Label>
							<NumberControl value={startDelay} onChange={val => setAttributes({ startDelay: parseInt(val) })} />
						</PanelRow>

						<PanelRow className='mt20'>
							<Label className=''>{__('Back Delay:', 'text-typing')}</Label>
							<NumberControl value={backDelay} onChange={val => setAttributes({ backDelay: parseInt(val) })} />
						</PanelRow>

						<PanelRow className='mt20'>
							<Label className=''>{__('Back Speed:', 'text-typing')}</Label>
							<NumberControl value={backSpeed} onChange={val => setAttributes({ backSpeed: parseInt(val) })} />
						</PanelRow>

						<ToggleControl className='mt20' label={__('Enable Shuffle', 'text-typing')} checked={isShuffle} onChange={val => setAttributes({ isShuffle: val })} />

						<ToggleControl className='mt20' label={__('Enable Fade Out Effect', 'text-typing')} checked={isFadeOut} onChange={val => setAttributes({ isFadeOut: val })} />
						<small>{__('Back speed will not work if Fade Out Effect is enabled!')}</small>
						{isFadeOut && <PanelRow>
							<Label className=''>{__('Fade Out Delay:', 'text-typing')}</Label>
							<NumberControl value={fadeOutDelay} onChange={val => setAttributes({ fadeOutDelay: parseInt(val) })} />
						</PanelRow>}

						<ToggleControl className='mt20' label={__('Enable Loop', 'text-typing')} checked={isLoop} onChange={val => setAttributes({ isLoop: val })} />
						{isLoop && <>
							<PanelRow>
								<Label className=''>{__('Loop Count:', 'text-typing')}</Label>
								<NumberControl value={loopCount} onChange={val => setAttributes({ loopCount: parseInt(val) })} />
							</PanelRow>
							<small>{__('Loop count 0 to infinity')}</small>
						</>}

						<ToggleControl className='mt20' label={__('Enable Cursor', 'text-typing')} checked={isCursor} onChange={val => setAttributes({ isCursor: val })} />
						{isCursor && <PanelRow>
							<Label className=''>{__('Cursor Character:', 'text-typing')}</Label>
							<TextControl value={cursorChar} onChange={val => setAttributes({ cursorChar: val })} />
						</PanelRow>}
					</PanelBody>
				</>}


				{'style' == tab.name && <>
					<PanelBody className='bPlPanelBody' title={__('Text Typing', 'text-typing')}>
						<Background label={__('Background:', 'text-typing')} value={background} onChange={val => setAttributes({ background: val })} defaults={{ color: '#0000' }} />

						<BorderControl
							className="mt10"
							label={__('Border:', 'svp')}
							value={border}
							onChange={val => setAttributes({ border: val })}
						/>

						<PanelRow>
							<Label className='mb5'>{__('Width:', 'text-typing')}</Label>
							<Device />
						</PanelRow>

						<UnitControl
							className='mb5'
							value={animatedSize?.width[device]}
							onChange={val => setAttributes({ animatedSize: updateData(animatedSize, val, "width", device) })} beforeIcon='grid-view'
							step={1}
							max={animatedSize?.width[device].includes("%") ? 100 : ""}
							min={1}
						/>

						<SpaceControl className='mt20' label={__('Padding:', 'text-typing')} value={padding} onChange={val => setAttributes({ padding: val })} defaults={{ vertical: '10px', horizontal: '15px' }} />
					</PanelBody>


					<PanelBody className='bPlPanelBody' title={__('Text', 'text-typing')} initialOpen={false}>
						<Typography label={__('Prefix Typography:', 'text-typing')} value={prefixTypo} onChange={val => setAttributes({ prefixTypo: val })} defaults={{ fontSize: { desktop: 22, tablet: 20, mobile: 18 }, fontWeight: 400 }} />

						<ColorControl label={__('Prefix Color:', 'text-typing')} value={prefixColor} onChange={val => setAttributes({ prefixColor: val })} defaultColor='#333' />

						<Typography label={__('Typing Contents Typography:', 'text-typing')} value={typingContentsTypo} onChange={val => setAttributes({ typingContentsTypo: val })} defaults={{ fontSize: { desktop: 22, tablet: 20, mobile: 18 }, fontWeight: 400 }} />

						{
							suffixText && suffixText.trim() !== "" && (
								<>
									<Typography label={__('Suffix Typography:', 'text-typing')} value={suffixTypo} onChange={val => setAttributes({ suffixTypo: val })} defaults={{ fontSize: { desktop: 22, tablet: 20, mobile: 18 } }} />

									<ColorControl label={__('Suffix Color:', 'text-typing')} value={suffixColor} onChange={val => setAttributes({ suffixColor: val })} defaultColor='#333' />
								</>
							)
						}
					</PanelBody>
				</>}
			</>}</TabPanel>

			<AdvertiseCard planLink={pricingPage} />
		</InspectorControls>


		<BlockControls>
			<AlignmentToolbar value={textAlign} onChange={val => setAttributes({ textAlign: val })} />
		</BlockControls>
	</>;
};

export default withSelect((select) => {
	const { getDeviceType } = select('core/editor');

	return {
		device: getDeviceType()?.toLowerCase()
	}
})(Settings);
