import { Button, Dashicon, Popover, Tooltip } from "@wordpress/components";
import { useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import "./style.scss";
const ThemeSwitcher = ({
  themes = [],
  isTooltip = false,
  visibleCount = 5,
  value = "default",
  buttonLabel = "More Themes",
  onChange = () => {},
}) => {
  const [open, setOpen] = useState(false);
  const visibleThemes = themes?.slice(0, visibleCount);
  const existingThemes = themes?.slice(visibleCount);

  const handleSelect = (themeValue) => {
    onChange(themeValue);
  };
  const ThemeButton = ({ theme }) => {
    const isActive = value === theme?.value;

    return (
      <Tooltip text={isTooltip ? theme?.tooltip : null}>
        <Button
          className={`bpl_theme_picker-btn ${isActive ? "active" : ""}`}
          onClick={() => handleSelect(theme?.value)}>
          <span>{theme?.label}</span>
        </Button>
      </Tooltip>
    );
  };

  return (
    <div className="bpl_theme_picker" style={{ display: "flex" }}>
      {visibleThemes?.length > 0 &&
        visibleThemes?.map((theme) => (
          <ThemeButton key={theme?.value} theme={theme} />
        ))}

      {existingThemes?.length > 0 && (
        <>
          <Button
            icon={<Dashicon icon="admin-appearance" />}
            variant="secondary"
            className="theme-trigger"
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            style={{ marginLeft: "1em" }}>
            {__(buttonLabel, "text-typing")}
          </Button>

          {open && (
            <Popover
              position="bottom left"
              className="bpl_theme_picker_popover"
              onClose={() => setOpen(false)}
              onFocusOutside={() => setOpen(false)}
              focusOnMount={false}>
              <div className="bpl_theme_picker_popover-grid">
                {existingThemes?.map((theme) => {
                  const isActive = value === theme?.value;

                  return (
                    <div
                      key={theme?.value}
                      className={`theme-card ${isActive ? "active" : ""}`}
                      onClick={() => {
                        handleSelect(theme?.value);
                        setOpen(false);
                      }}>
                      <div
                        className="theme-preview"
                        style={
                          theme?.preview
                            ? { background: theme.preview.bg }
                            : undefined
                        }>
                        <span
                          className="preview-sample"
                          style={
                            theme?.preview
                              ? { color: theme.preview.color }
                              : undefined
                          }>
                          Aa
                        </span>
                      </div>

                      <span className="theme-name">{theme?.label}</span>
                    </div>
                  );
                })}
              </div>
            </Popover>
          )}
        </>
      )}
    </div>
  );
};

export default ThemeSwitcher;
