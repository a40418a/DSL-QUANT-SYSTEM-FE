// 코스닥 1년치 정보 받아오는 API
// GET

import axios from 'axios';

const API_BASE_URL = 'http://43.200.199.72:5173';

export const getKosdaq = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/kosdaq`);
        return response.data;
    } catch (error) {
        console.error('getKosdaq error: ', error);
        throw error;
    }
};
