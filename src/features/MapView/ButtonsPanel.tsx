import { css } from "@emotion/react";
import { WidgetButton } from "../../components";

const ButtonsPanel = () => (
  <div
    css={css`
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 20px;
    `}
  >
    <WidgetButton
      label="L"
      onClick={() => {
        console.log("layers");
      }}
    />
  </div>
);

export { ButtonsPanel };
