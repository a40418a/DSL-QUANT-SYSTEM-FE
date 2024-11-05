import axios from "axios";

const SURL = import.meta.env.VITE_APP_URI;

export const getMultidata = async () => {
    try {
        // 로컬 스토리지에서 토큰 가져오기
        const token = localStorage.getItem("jwt");

        // 토큰이 없으면 에러 처리
        if (!token) {
            throw new Error("토큰이 없습니다.");
        }

        // API 호출 시 Authorization 헤더에 토큰 추가
        const response = await axios.get(`${SURL}/home/backtesting_multi`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("getMultidata error:", error);
        throw error;
    }
};
