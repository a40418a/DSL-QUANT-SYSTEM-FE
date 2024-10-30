import axios from "axios";

const SURL = import.meta.env.VITE_APP_URI;

export const getMultidata = async () => {
    const token = localStorage.getItem("jwt");

    try {
        const response = await axios.get(`${SURL}/home/backtesting_multi`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("getMultidata error: ", error);
        throw error;
    }
};