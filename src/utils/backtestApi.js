// 백테스팅한 결과를 제공하고 받아오는 API
// GET, POST

import axios from 'axios';


const SURL=import.meta.env.VITE_APP_URI;

export const getBacktest = async () => {
    try {
        const response = await axios.get(`${SURL}/backtest`);
        return response.data;
    } catch (error) {
        console.error('getBacktest error: ', error);
        throw error;
    }
};

export const postBacktest = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/backtest`, data);
        return response.data;
    } catch (error) {
        console.error('postBacktest error: ', error);
        throw error;
    }
};
