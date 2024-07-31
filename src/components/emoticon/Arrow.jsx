/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const arrowUpStyle = css`
    font-size: 0.8rem;
    fill: var(--up-color);
`;

const arrowDownStyle = css`
    font-size: 0.8rem;
    fill: var(--down-color);
`;

export const ArrowUp = () => {
    return <ArrowUpwardIcon css={arrowUpStyle} />;
};

export const ArrowDown = () => {
    return <ArrowDownwardIcon css={arrowDownStyle} />;
};
