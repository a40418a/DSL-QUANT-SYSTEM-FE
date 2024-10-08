/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const arrowUpStyle = css`
    font-size: 1rem;
    fill: var(--up-color);
    vertical-align: middle;
`;

const arrowDownStyle = css`
    font-size: 1rem;
    fill: var(--down-color);
    vertical-align: middle;
`;

export const ArrowUp = () => {
    return <ArrowUpwardIcon css={arrowUpStyle} />;
};

export const ArrowDown = () => {
    return <ArrowDownwardIcon css={arrowDownStyle} />;
};
