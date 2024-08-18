// 코스피 1년치 정보 받아오는 API
// GET

import axios from 'axios';

const API_BASE_URL = 'http://43.200.199.72:5173';

export const getKospi = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/kospi`);
        return response.data;
    } catch (error) {
        console.error('getKospi error: ', error);
        throw error;
    }
};
