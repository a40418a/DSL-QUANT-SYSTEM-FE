// 주식 상세정보 받아오는 API
// GET

import axios from "axios";

const SURL = import.meta.env.VITE_APP_URI;

export const getStockinfo = async (market) => {
    try {
        const response = await axios.get(`${SURL}/home/stockinfo/${market}`);
        return response.data;
    } catch (error) {
        console.error("getStockinfo error: ", error);
        throw error;
    }
};
