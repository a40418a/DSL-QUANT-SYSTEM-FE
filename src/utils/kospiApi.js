// 코스피 1년치 정보 받아오는 API
// GET

import axios from 'axios';


const SURL=import.meta.env.VITE_APP_URI;

export const getKospi = async () => {
    try {
        const response = await axios.get(`http://${SURL}/kospi`);
        return response.data;
    } catch (error) {
        console.error('getKospi error: ', error);
        throw error;
    }
};
