// 사용자의 정보를 받아오는 API
// GET
import axios from "axios";

const SURL = import.meta.env.VITE_APP_URI;

export const getUserInfo = async () => {
    try {
        // 로컬 스토리지에서 토큰 가져오기
        const token = localStorage.getItem("jwt");

        // 토큰이 없으면 에러 처리
        if (!token) {
            throw new Error("토큰이 없습니다.");
        }

        // API 호출 시 Authorization 헤더에 토큰 추가
        const response = await axios.get(`${SURL}/mypage/user`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("getUserInfo error: ", error);
        throw error;
    }
};

/*
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // react-router-dom에서 useNavigate 가져오기

const SURL = import.meta.env.VITE_APP_URI;

export const getUserInfo = async () => {
    const navigate = useNavigate(); // 리다이렉트를 위한 navigate 함수 호출

    try {
        // 로컬 스토리지 또는 다른 저장소에서 토큰 가져오기
        const token = localStorage.getItem('jwt');
        // 토큰이 없으면 로그인 페이지로 리다이렉트
        if (!token) {
            navigate('/login');
            return;
        }

        // API 호출 시 Authorization 헤더에 토큰 추가
        const response = await axios.get(`${SURL}/mypage/user`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;

    } catch (error) {
        console.error('getUserInfo error: ', error);

        // 401 에러 발생 시 로그인 페이지로 리다이렉트
        if (error.response && error.response.status === 401) {
            navigate('/login');
        }

        throw error;
    }
};
*/

/*
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
*/

// 골든 데이터를 받아오는 함수
// export const getMyGolden = async () => {
//     try {
//         const token = localStorage.getItem('jwt');
//         if (!token) {
//             throw new Error('토큰이 없습니다. 로그인이 필요합니다.');
//         }

//         const response = await axios.get(`${SURL}/history/golden`, {
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });

//         return response.data;
//     } catch (error) {
//         console.error('getMyGolden error: ', error);
//         throw error;
//     }
// };
