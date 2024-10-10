/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import AddchartIcon from "@mui/icons-material/Addchart";

const addChartStyle = css`
    font-size: var(--subtitle-size);
    fill: var(--main-color);
    vertical-align: middle;
`;

export const AddChart = () => {
    return <AddchartIcon css={addChartStyle} />;
};
