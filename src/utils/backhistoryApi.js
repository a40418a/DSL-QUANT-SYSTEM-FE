// 백테스팅한 기록들 저장하는 API
// GET

import axios from 'axios';

const SURL = import.meta.env.VITE_APP_URI;

export const getBackHistory = async (strategy) => {
    try {
        const SURL = import.meta.env.VITE_APP_URI;
        const response = await axios.get(`${SURL}/backtest/history${strategy}`);
        return response.data;
    } catch (error) {
        console.error('getBackHistory error: ', error);
        throw error;
    }
};
