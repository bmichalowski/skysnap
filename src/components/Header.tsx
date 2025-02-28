import { css } from "@emotion/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      css={css`
        position: fixed;
        top: 0;
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
        background: #f8f9fa;
        padding: 0 15px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      `}
      data-role="header"
    >
      <img
        src="logo-skysnap-sq.webp"
        alt="SkySnap Logo"
        css={css`
          height: 40px;
        `}
      />
      <h1
        css={css`
          margin-left: 15px;
          font-family: sans-serif, Arial;
          font-size: 1.5rem;
          flex: 1;
        `}
      >
        SkySnap - Rekrutacja 2025
      </h1>
      <nav css={linkContainerStyles}>
        <Link to="/map">Map</Link>
        <Link to="/pointcloud">PointCloud</Link>
      </nav>
    </header>
  );
};

const linkContainerStyles = css`
  display: flex;
  gap: 15px;
  white-space: nowrap;
  margin-right: 40px;

  & > a {
    text-decoration: none;
    font-size: 1rem;
    font-family: sans-serif, Arial;
    color: #007bff;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: #0056b3;
      text-decoration: underline;
    }
  }
`;

export { Header };
