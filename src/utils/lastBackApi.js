// 코스피 1년치 정보 받아오는 API
// GET

import axios from "axios";

const SURL = import.meta.env.VITE_APP_URI;

export const getLastBack = async (name) => {
    try {
        const response = await axios.get(`${SURL}/home/${name}`);
        return response.data;
    } catch (error) {
        console.error("getLastBack error: ", error);
        throw error;
    }
};
