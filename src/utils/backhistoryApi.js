// 백테스팅한 기록들 저장하는 API
// GET

import axios from 'axios';

const API_BASE_URL = 'http://43.200.199.72:8080';

export const getBackHistory = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/backtest/history`);
        return response.data;
    } catch (error) {
        console.error('getBackHistory error: ', error);
        throw error;
    }
};
