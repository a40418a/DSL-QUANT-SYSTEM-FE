/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import AddchartIcon from "@mui/icons-material/Addchart";

const addChartStyle = css`
    font-size: 1rem;
    fill: var(--point-color-2);
    vertical-align: middle;
`;

export const AddChart = () => {
    return <AddchartIcon css={addChartStyle} />;
};
