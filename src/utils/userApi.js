// 사용자의 정보를 받아오는 API
// GET

import axios from 'axios';

const API_BASE_URL = 'http://43.200.199.72:8080';

export const getUserInfo = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/user/info`);
        return response.data;
    } catch (error) {
        console.error('getUserInfo error: ', error);
        throw error;
    }
};
