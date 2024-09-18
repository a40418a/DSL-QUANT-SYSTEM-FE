// 사용자의 정보를 받아오는 API
// GET

import axios from 'axios';

const SURL = import.meta.env.VITE_APP_URI;

export const getUserInfo = async () => {
    try {
        //로컬 스토리지 또는 다른 저장소에서 토큰 가져오기
        const token = localStorage.getItem('jwt');
        //토큰이 없으면 예외처리
        if (!token) {
            throw new Error('토큰이 없습니다.');
        }

        //API 호출 시 Authorization 헤더에 토큰 추가
        const response = await axios.get(`${SURL}/mypage/user`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('getUserInfo error: ', error);
        throw error;
    }
};

// 골든 데이터를 받아오는 함수
export const getMyGolden = async () => {
    try {
        const token = localStorage.getItem('jwt');
        if (!token) {
            throw new Error('토큰이 없습니다. 로그인이 필요합니다.');
        }

        const response = await axios.get(`${SURL}/history/golden`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data;
    } catch (error) {
        console.error('getMyGolden error: ', error);
        throw error;
    }
};
