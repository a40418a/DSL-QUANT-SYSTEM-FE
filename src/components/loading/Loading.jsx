/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { Stack, CircularProgress } from "@mui/material";
import styles from "./loading.module.css";

const progress = css`
    .MuiCircularProgress-circle {
        color: var(--point-color);
    }
`;

export const Loading = () => {
    return (
        <div className={styles.loading}>
            <CircularProgress css={progress} />
        </div>
    );
};
