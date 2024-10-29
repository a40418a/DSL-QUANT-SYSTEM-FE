/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import HomeIcon from "@mui/icons-material/Home";

const homeIconStyle = css`
    font-size: var(--subtitle-size);
    fill: var(--color-white);
    vertical-align: middle;
`;

export const Home = () => {
    return <HomeIcon css={homeIconStyle} />;
};
