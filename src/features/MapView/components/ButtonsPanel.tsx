import { css } from "@emotion/react";
import { ReactNode } from "react";

const ButtonsPanel = ({ children }: { children: ReactNode }) => (
  <div css={buttonsPanelStyles}>{children}</div>
);

const buttonsPanelStyles = css`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 20px;
`;

export { ButtonsPanel };
