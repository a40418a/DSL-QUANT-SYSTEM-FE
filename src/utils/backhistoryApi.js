// 백테스팅한 기록들 저장하는 API
// GET

import axios from 'axios';

const SURL = import.meta.env.VITE_APP_URI;

export const getBackHistory = async (token, strategy) => {
    try {
        const response = await axios.get(`${SURL}/backtest/history/${strategy}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('getBackHistory error: ', error);
        throw error;
    }
};
