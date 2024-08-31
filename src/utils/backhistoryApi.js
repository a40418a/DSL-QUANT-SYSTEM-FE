// 백테스팅한 기록들 저장하는 API
// GET

import axios from 'axios';

const SURL=import.meta.env.VITE_APP_URI;


export const getBackHistory = async () => {
    try {
        const response = await axios.get(`http://${SURL}/backtest/history`);
        return response.data;
    } catch (error) {
        console.error('getBackHistory error: ', error);
        throw error;
    }
};
