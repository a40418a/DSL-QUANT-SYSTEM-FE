// 사용자의 정보를 받아오는 API
// GET

import axios from 'axios';

const SURL = import.meta.env.VITE_APP_URI;

export const getUserInfo = async () => {
    try {
        const response = await axios.get(`${SURL}/user/info`);
        return response.data;
    } catch (error) {
        console.error('getUserInfo error: ', error);
        throw error;
    }
};
