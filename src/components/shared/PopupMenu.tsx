import { css } from "@emotion/react";
import { Layers as LayersSVG } from "./svg";
import { WidgetButton } from "./WidgetButton";
import { layersVisibilityType } from "../../features/MapView/MapView";
import { layersType } from "../../features/MapView/layers";

type PopupMenu = {
  layers: layersVisibilityType[];
  onChange: (label: layersType["label"]) => void;
};

const PopupMenu = ({ layers, onChange }: PopupMenu) => (
  <div css={containerStyles}>
    <div id="popup" css={layersPopupStyles}>
      {layers.map(({ label, visible }) => (
        <span key={label}>
          <input
            type="checkbox"
            checked={visible}
            onChange={() => onChange(label)}
          />
          {label}
        </span>
      ))}
    </div>
    <WidgetButton label={<LayersSVG />} />
  </div>
);

const containerStyles = css`
  position: relative;
  &:hover #popup {
    display: grid;
  }
  &:has(:hover) > * {
    background-color: #ddd;
  }
`;

const layersPopupStyles = css`
  display: none;
  position: absolute;
  bottom: -10px;
  left: -10px;
  min-width: 120px;
  max-width: 240px;
  padding: 15px;
  border-radius: 4px;
  margin: 20px;
  background-color: #ddd;
  font-family: Arial;
`;
export { PopupMenu };
