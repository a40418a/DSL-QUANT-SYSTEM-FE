import React from "react";
import styles from "./verticalTable.module.css";

export const VerticalTable = ({ name, email }) => {
    return (
        <div className={styles.verticalTable}>
            <table className={styles.table}>
                <tr>
                    <th className={styles.head}>이름</th>
                    <td className={styles.body}>{name}</td>
                </tr>
                <tr>
                    <th className={styles.head}>이메일</th>
                    <td className={styles.body}>{email}</td>
                </tr>
            </table>
        </div>
    );
};
