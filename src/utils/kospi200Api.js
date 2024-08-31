// 코스피200 1년치 정보 받아오는 API
// GET

import axios from 'axios';


const SURL=import.meta.env.VITE_APP_URI;

export const getKospi200 = async () => {
    try {
        const response = await axios.get(`http://${SURL}/kospi200`);
        return response.data;
    } catch (error) {
        console.error('getKospi200 error: ', error);
        throw error;
    }
};
