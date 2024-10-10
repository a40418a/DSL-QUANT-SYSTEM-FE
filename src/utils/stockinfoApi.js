// 주식 상세정보 받아오는 API
// GET

import axios from "axios";

const SURL = import.meta.env.VITE_APP_URI;

export const getMarket = (url) => {
    const parts = url.split("/");
    return parts[parts.length - 1]; // URL의 마지막 부분을 market으로 반환
};

export const getStockinfo = async (url) => {
    const market = getMarket(url); // URL에서 market 추출
    try {
        const response = await axios.get(`${SURL}/home/stockinfo/${market}`);
        return response.data;
    } catch (error) {
        console.error("getStockinfo error: ", error);
        throw error;
    }
};
