// 최근 백테스팅 내역
// GET

import axios from "axios";

const SURL = import.meta.env.VITE_APP_URI;

export const getMultidata = async (name) => {
    try {
        const response = await axios.get(`${SURL}/home/backtesting_multi`);
        return response.data;
    } catch (error) {
        console.error("getLastBack error: ", error);
        throw error;
    }
};
