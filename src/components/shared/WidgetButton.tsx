import { css } from "@emotion/react";

type WidgetButtonProps = {
  label: string;
  onClick: () => void;
};

const WidgetButton = ({ label, onClick }: WidgetButtonProps) => (
  <div
    onClick={onClick}
    css={css`
      width: 20px;
      height: 20px;
      border-radius: 10px;
      background-color: rgba(125, 125, 125, 0.4);
      color: white;
      cursor: pointer;
      display: flex;
      justify-content: space-around;
      &:hover {
        background-color: rgba(125, 125, 125, 0.8);
      }
    `}
  >
    {label}
  </div>
);

export { WidgetButton };
