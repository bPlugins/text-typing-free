import {
  AlignmentToolbar,
  BlockControls,
  InspectorControls,
} from "@wordpress/block-editor";
import {
  Button,
  Dashicon,
  __experimentalNumberControl as NumberControl,
  PanelBody,
  PanelRow,
  SelectControl,
  TabPanel,
  TextControl,
  ToggleControl,
  Tooltip,
  __experimentalUnitControl as UnitControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";

import {
  Background,
  ColorControl,
  Device,
  HelpPanel,
  InlineMediaUpload,
  Label,
  Typography,
} from "../../../../../bpl-tools/Components";
import {
  BorderControl,
  SpaceControl,
} from "../../../../../bpl-tools/Components/Deprecated";
import {
  tabController,
  updateData,
} from "../../../../../bpl-tools/utils/functions";

import { withSelect } from "@wordpress/data";
import { produce } from "immer";
import { themeSwitch } from "../../../utils/function";
import { generalStyleTabs, themePresets } from "../../../utils/options";
import ThemeSwitcher from "../../../utils/panel/ThemeSwitcher";

const Settings = ({ attributes, setAttributes, device }) => {
  const {
    prefixText,
    typingContents,
    suffixText,
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
    textAlign,
    background,
    padding,
    prefixTypo,
    prefixColor,
    typingContentsTypo,
    suffixTypo,
    suffixColor,
    themes = {},
    terminal = {},
    animatedSize = {},
    isRandomColor = true,
    color,
    terminalHeadingBg = {},
    terminalHeadingTextColor = "#ccc",
    terminalHeadTypo = {},
    isIcon = true,
    iconList = {},
    isCustomBG = false,
    iconSize = {},
    border = {},
  } = attributes;

  const { theme } = themes;
  const { headerText } = terminal;
  const { uploadIconUrl } = iconList;

  const updateContents = (index, type, val) => {
    setAttributes({
      typingContents: updateData(typingContents, val, index, type),
    });
  };

  return (
    <>
      <InspectorControls>
        <TabPanel
          className="bPlTabPanel"
          activeClass="activeTab"
          tabs={generalStyleTabs}
          onSelect={tabController}>
          {(tab) => (
            <>
              {"general" == tab.name && (
                <>
                  <HelpPanel
                    slug="text-typing"
                    docsLink="https://bblockswp.com/docs/text-typing-block"
                  />

                  <PanelBody
                    className="bPlPanelBody"
                    title={__("Theme", "text-typing")}>
                    <SelectControl
                      className="mt10"
                      label={__("Choose Themes", "text-typing")}
                      value={theme}
                      options={themePresets}
                      onChange={(val) =>
                        setAttributes(themeSwitch(val, attributes))
                      }
                    />
                  </PanelBody>

                  <PanelBody
                    className="bPlPanelBody addRemoveItems"
                    title={__("Texts", "text-typing")}>
                    {theme === "terminal" && (
                      <>
                        <Label className="mb5">
                          {__("Terminal Heading Text:", "text-typing")}
                        </Label>
                        <TextControl
                          value={headerText}
                          onChange={(val) =>
                            setAttributes({
                              terminal: {
                                ...attributes.terminal,
                                headerText: val,
                              },
                            })
                          }
                        />
                      </>
                    )}

                    {(theme === "neonGrid" ||
                      theme === "auroraGlow" ||
                      theme === "cyberWave") && (
                      <>
                        <ToggleControl
                          className="mt10"
                          style={{ marginBottom: "10px" }}
                          label={__("Enable Icon", "text-typing")}
                          checked={isIcon}
                          onChange={(val) => setAttributes({ isIcon: val })}
                        />

                        {isIcon && (
                          <>
                            <InlineMediaUpload
                              label={__("Upload Image URL", "text-typing")}
                              className="mb10 mt10"
                              value={uploadIconUrl}
                              onChange={(val) => {
                                const newUploadIcon = produce(
                                  iconList,
                                  (draft) => {
                                    draft.uploadIconUrl = val;
                                  },
                                );
                                setAttributes({ iconList: newUploadIcon });
                              }}
                            />
                          </>
                        )}
                      </>
                    )}

                    <Label className="mb5 mt5">
                      {__("Prefix Text:", "text-typing")}
                    </Label>
                    <TextControl
                      value={prefixText}
                      onChange={(val) => setAttributes({ prefixText: val })}
                    />

                    {theme === "auroraGlow" && (
                      <>
                        <ToggleControl
                          className="mt20"
                          label={__(
                            "Enable typing Glitch color",
                            "text-typing",
                          )}
                          checked={isRandomColor}
                          onChange={(val) =>
                            setAttributes({ isRandomColor: val })
                          }
                        />
                      </>
                    )}

                    <Label>{__("Typing Contents:", "text-typing")}</Label>
                    {typingContents.map((content, index) => (
                      <PanelRow key={index}>
                        <TextControl
                          value={content.text}
                          onChange={(val) => updateContents(index, "text", val)}
                        />

                        {(theme == "default" ||
                          theme === "terminal" ||
                          theme === "neonGrid" ||
                          theme === "cyberWave") && (
                          <>
                            <ColorControl
                              className="mt0"
                              label=""
                              value={content.color}
                              onChange={(val) =>
                                updateContents(index, "color", val)
                              }
                            />
                          </>
                        )}

                        {theme === "auroraGlow" && isRandomColor == false && (
                          <>
                            <ColorControl
                              className="mt0"
                              label=""
                              value={content.color}
                              onChange={(val) =>
                                updateContents(index, "color", val)
                              }
                            />
                          </>
                        )}

                        {typingContents.length > 1 && (
                          <Tooltip
                            text={__("Remove this text", "text-typing")}
                            placement="top"
                            position="top">
                            <Button
                              onClick={(e) => {
                                e.preventDefault();
                                setAttributes({
                                  typingContents: [
                                    ...typingContents.slice(0, index),
                                    ...typingContents.slice(index + 1),
                                  ],
                                });
                              }}>
                              <Dashicon icon="no" />
                            </Button>
                          </Tooltip>
                        )}
                      </PanelRow>
                    ))}

                    <div className="addItem" style={{ marginTop: "10px" }}>
                      <Button
                        label={__("Add Typing Content", "text-typing")}
                        onClick={() =>
                          setAttributes({
                            typingContents: [
                              ...typingContents,
                              { text: "Text Typing", color: "#146ef5" },
                            ],
                          })
                        }>
                        <Dashicon icon="plus" />
                        {__("Add Typing Content", "text-typing")}
                      </Button>
                    </div>

                    {theme === "starFlower" && (
                      <>
                        <ToggleControl
                          className="mt20"
                          label={__("Enable Random Color", "text-typing")}
                          checked={isRandomColor}
                          onChange={(val) =>
                            setAttributes({ isRandomColor: val })
                          }
                        />
                      </>
                    )}

                    {isRandomColor === false && (
                      <>
                        <ColorControl
                          className="mt0"
                          label="Typing Text Color"
                          value={color}
                          onChange={(val) => {
                            setAttributes({ color: val });
                          }}
                        />
                      </>
                    )}

                    <Label>{__("Suffix Text:", "text-typing")}</Label>
                    <TextControl
                      value={suffixText}
                      onChange={(val) => setAttributes({ suffixText: val })}
                    />
                  </PanelBody>

                  <PanelBody
                    className="bPlPanelBody"
                    title={__("Typed Settings", "text-typing")}
                    initialOpen={false}>
                    {(theme === "default" ||
                      theme === "terminal" ||
                      theme === "starFlower" ||
                      theme === "neonGrid" ||
                      theme === "auroraGlow" ||
                      theme === "cyberWave") && (
                      <>
                        <PanelRow>
                          <Label className="">
                            {__("Type Speed:", "text-typing")}
                          </Label>
                          <NumberControl
                            value={typeSpeed}
                            onChange={(val) =>
                              setAttributes({ typeSpeed: parseInt(val) })
                            }
                          />
                        </PanelRow>

                        <PanelRow className="mt20">
                          <Label className="">
                            {__("Start Delay:", "text-typing")}
                          </Label>
                          <NumberControl
                            value={startDelay}
                            onChange={(val) =>
                              setAttributes({ startDelay: parseInt(val) })
                            }
                          />
                        </PanelRow>

                        <PanelRow className="mt20">
                          <Label className="">
                            {__("Back Delay:", "text-typing")}
                          </Label>
                          <NumberControl
                            value={backDelay}
                            onChange={(val) =>
                              setAttributes({ backDelay: parseInt(val) })
                            }
                          />
                        </PanelRow>
                      </>
                    )}

                    {(theme === "default" ||
                      theme === "terminal" ||
                      theme === "neonGrid" ||
                      theme === "auroraGlow" ||
                      theme === "cyberWave") && (
                      <>
                        <PanelRow className="mt20">
                          <Label className="">
                            {__("Back Speed:", "text-typing")}
                          </Label>
                          <NumberControl
                            value={backSpeed}
                            onChange={(val) =>
                              setAttributes({ backSpeed: parseInt(val) })
                            }
                          />
                        </PanelRow>
                      </>
                    )}

                    {theme === "default" && (
                      <>
                        <ToggleControl
                          className="mt20"
                          label={__("Enable Shuffle", "text-typing")}
                          checked={isShuffle}
                          onChange={(val) => setAttributes({ isShuffle: val })}
                        />

                        <ToggleControl
                          className="mt20"
                          label={__("Enable Fade Out Effect", "text-typing")}
                          checked={isFadeOut}
                          onChange={(val) => setAttributes({ isFadeOut: val })}
                        />
                        <small>
                          {__(
                            "Back speed will not work if Fade Out Effect is enabled!",
                          )}
                        </small>
                        {isFadeOut && (
                          <PanelRow>
                            <Label className="">
                              {__("Fade Out Delay:", "text-typing")}
                            </Label>
                            <NumberControl
                              value={fadeOutDelay}
                              onChange={(val) =>
                                setAttributes({ fadeOutDelay: parseInt(val) })
                              }
                            />
                          </PanelRow>
                        )}
                      </>
                    )}

                    <ToggleControl
                      className="mt20"
                      label={__("Enable Loop", "text-typing")}
                      checked={isLoop}
                      onChange={(val) => setAttributes({ isLoop: val })}
                    />
                    {isLoop && (
                      <>
                        <PanelRow>
                          <Label className="">
                            {__("Loop Count:", "text-typing")}
                          </Label>
                          <NumberControl
                            value={loopCount}
                            onChange={(val) =>
                              setAttributes({ loopCount: parseInt(val) })
                            }
                          />
                        </PanelRow>
                        <small>{__("Loop count 0 to infinity")}</small>
                      </>
                    )}

                    {(theme === "default" ||
                      theme === "terminal" ||
                      theme === "auroraGlow" ||
                      theme === "cyberWave") && (
                      <>
                        <ToggleControl
                          className="mt20"
                          label={__("Enable Cursor", "text-typing")}
                          checked={isCursor}
                          onChange={(val) => setAttributes({ isCursor: val })}
                        />
                        {isCursor && (
                          <PanelRow>
                            <Label className="">
                              {__("Cursor Character:", "text-typing")}
                            </Label>
                            <TextControl
                              value={cursorChar}
                              onChange={(val) =>
                                setAttributes({ cursorChar: val })
                              }
                            />
                          </PanelRow>
                        )}
                      </>
                    )}
                  </PanelBody>
                </>
              )}

              {"style" == tab.name && (
                <>
                  <PanelBody
                    className="bPlPanelBody"
                    title={__("Text Typing", "text-typing")}>
                    {theme === "terminal" && (
                      <>
                        <Background
                          label={__("Heading BG:", "text-typing")}
                          value={terminalHeadingBg}
                          onChange={(val) =>
                            setAttributes({ terminalHeadingBg: val })
                          }
                          defaults={{ color: "#2B2B3C" }}
                        />

                        <ColorControl
                          className="mt0"
                          label="Header Color"
                          value={terminalHeadingTextColor}
                          onChange={(val) => {
                            setAttributes({ terminalHeadingTextColor: val });
                          }}
                        />

                        <Typography
                          label={__(
                            "Header Contents Typography:",
                            "text-typing",
                          )}
                          value={terminalHeadTypo}
                          onChange={(val) =>
                            setAttributes({ terminalHeadTypo: val })
                          }
                          defaults={{
                            fontSize: { desktop: 12, tablet: 12, mobile: 12 },
                          }}
                        />
                      </>
                    )}

                    {(theme === "default" ||
                      theme === "terminal" ||
                      theme === "starFlower" ||
                      theme === "auroraGlow") && (
                      <Background
                        label={__("Background:", "text-typing")}
                        value={background}
                        onChange={(val) => setAttributes({ background: val })}
                        defaults={{ color: "#0000" }}
                      />
                    )}

                    {(theme === "neonGrid" || theme === "cyberWave") && (
                      <>
                        <ToggleControl
                          className="mt10"
                          label={__("Use Custom Background", "text-typing")}
                          checked={isCustomBG}
                          onChange={(val) => setAttributes({ isCustomBG: val })}
                        />

                        {isCustomBG && (
                          <Background
                            label={__("Background:", "text-typing")}
                            value={background}
                            onChange={(val) =>
                              setAttributes({ background: val })
                            }
                          />
                        )}
                      </>
                    )}

                    <BorderControl
                      className="mt10"
                      label={__("Border:", "svp")}
                      value={border}
                      onChange={(val) => setAttributes({ border: val })}
                    />

                    {(theme === "default" ||
                      theme === "terminal" ||
                      theme === "starFlower" ||
                      theme === "neonGrid" ||
                      theme === "auroraGlow" ||
                      theme === "cyberWave") && (
                      <>
                        <PanelRow>
                          <Label className="mb5">
                            {__("Width:", "text-typing")}
                          </Label>
                          <Device />
                        </PanelRow>

                        <UnitControl
                          className="mb5"
                          value={animatedSize?.width[device]}
                          onChange={(val) =>
                            setAttributes({
                              animatedSize: updateData(
                                animatedSize,
                                val,
                                "width",
                                device,
                              ),
                            })
                          }
                          beforeIcon="grid-view"
                          step={1}
                          max={
                            animatedSize?.width[device].includes("%") ? 100 : ""
                          }
                          min={1}
                        />
                      </>
                    )}

                    {theme === "starFlower" && (
                      <>
                        {/* Height options */}
                        <PanelRow>
                          <Label className="mb5">
                            {__("Max Height:", "text-typing")}
                          </Label>
                          <Device />
                        </PanelRow>

                        <UnitControl
                          className="mb5"
                          value={animatedSize?.height[device]}
                          onChange={(val) =>
                            setAttributes({
                              animatedSize: updateData(
                                animatedSize,
                                val,
                                "height",
                                device,
                              ),
                            })
                          }
                          beforeIcon="grid-view"
                          step={1}
                          min={1}
                        />
                      </>
                    )}

                    <SpaceControl
                      className="mt20"
                      label={__("Padding:", "text-typing")}
                      value={padding}
                      onChange={(val) => setAttributes({ padding: val })}
                      defaults={{ vertical: "10px", horizontal: "15px" }}
                    />

                    {(theme === "neonGrid" ||
                      theme === "auroraGlow" ||
                      theme === "cyberWave") &&
                      isIcon == true && (
                        <>
                          <PanelRow>
                            <Label className="mb5">
                              {__("Icon Size:", "text-typing")}
                            </Label>
                            <Device />
                          </PanelRow>

                          <UnitControl
                            className="mb5"
                            value={iconSize?.width[device]}
                            onChange={(val) =>
                              setAttributes({
                                iconSize: updateData(
                                  iconSize,
                                  val,
                                  "width",
                                  device,
                                ),
                              })
                            }
                            beforeIcon="grid-view"
                            step={1}
                            min={1}
                          />
                        </>
                      )}
                  </PanelBody>

                  <PanelBody
                    className="bPlPanelBody"
                    title={__("Text", "text-typing")}
                    initialOpen={false}>
                    <Typography
                      label={__("Prefix Typography:", "text-typing")}
                      value={prefixTypo}
                      onChange={(val) => setAttributes({ prefixTypo: val })}
                      defaults={{
                        fontSize: { desktop: 22, tablet: 20, mobile: 18 },
                        fontWeight: 400,
                      }}
                    />

                    <ColorControl
                      label={__("Prefix Color:", "text-typing")}
                      value={prefixColor}
                      onChange={(val) => setAttributes({ prefixColor: val })}
                      defaultColor="#333"
                    />

                    <Typography
                      label={__("Typing Contents Typography:", "text-typing")}
                      value={typingContentsTypo}
                      onChange={(val) =>
                        setAttributes({ typingContentsTypo: val })
                      }
                      defaults={{
                        fontSize: { desktop: 22, tablet: 20, mobile: 18 },
                        fontWeight: 400,
                      }}
                    />

                    {suffixText && suffixText.trim() !== "" && (
                      <>
                        <Typography
                          label={__("Suffix Typography:", "text-typing")}
                          value={suffixTypo}
                          onChange={(val) => setAttributes({ suffixTypo: val })}
                          defaults={{
                            fontSize: { desktop: 22, tablet: 20, mobile: 18 },
                          }}
                        />

                        <ColorControl
                          label={__("Suffix Color:", "text-typing")}
                          value={suffixColor}
                          onChange={(val) =>
                            setAttributes({ suffixColor: val })
                          }
                          defaultColor="#333"
                        />
                      </>
                    )}
                  </PanelBody>
                </>
              )}
            </>
          )}
        </TabPanel>
      </InspectorControls>

      <BlockControls>
        <AlignmentToolbar
          value={textAlign}
          onChange={(val) => setAttributes({ textAlign: val })}
        />

        <ThemeSwitcher
          themes={themePresets}
          value={theme}
          visibleCount={4}
          buttonLabel="More Themes"
          onChange={(val) =>
            setAttributes(themeSwitch(val, attributes))
          }></ThemeSwitcher>
      </BlockControls>
    </>
  );
};

export default withSelect((select) => {
  const { getDeviceType } = select("core/editor");

  return {
    device: getDeviceType()?.toLowerCase(),
  };
})(Settings);
