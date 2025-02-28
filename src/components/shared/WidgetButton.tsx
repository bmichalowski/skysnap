import { css } from "@emotion/react";
import { CSSProperties, ReactElement } from "react";

type WidgetButtonProps = {
  label: string | ReactElement;
  onClick?: () => void;
  style?: CSSProperties;
};

const WidgetButton = ({ label, onClick, style }: WidgetButtonProps) => (
  <div css={widgetStyles} onClick={onClick} style={style}>
    {label}
  </div>
);

const widgetStyles = css`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #999;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  position: relative;
  z-index: 1;
  &:hover {
    background-color: #ddd;
  }
`;

export { WidgetButton };
