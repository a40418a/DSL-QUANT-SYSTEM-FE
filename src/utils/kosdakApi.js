// 코스닥 1년치 정보 받아오는 API
// GET

import axios from "axios";

const SURL = import.meta.env.VITE_APP_URI;

export const getKosdaq = async () => {
    try {
        const response = await axios.get(`${SURL}/home/kosdaq`);
        return response.data;
    } catch (error) {
        console.error("getKosdaq error: ", error);
        throw error;
    }
};
