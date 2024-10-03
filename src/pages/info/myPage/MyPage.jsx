import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // react-router-dom에서 useNavigate 가져오기
import styles from './myPage.module.css';
import { getUserInfo } from '../../../utils/userApi';
import { getBackHistory } from '../../../utils/backhistoryApi';
import { Loading } from '../../../components/loading/Loading';
import { SelectBox } from '../../../components/box/selectBox/SelectBox';
import axios from 'axios';

export const MyPage = () => {
    const SURL = import.meta.env.VITE_APP_URI;
    const navigate = useNavigate(); // 리다이렉트를 위한 navigate 함수 호출
    const [userInfo, setUserInfo] = useState(null);
    const [backHistory, setBackHistory] = useState([]);
    const [isTableVisible, setIsTableVisible] = useState(false);
    const [loading, setLoading] = useState(true); //사용자 정보 로딩 상태
    const [formData, setFormData] = useState({
        strategy: '',
    });
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                // 사용자 정보를 받아오는 API
                const userInfoData = await getUserInfo();
                if (!userInfoData) {
                    navigate('/login'); // 사용자 정보가 없으면 로그인 페이지로 리다이렉트
                    return;
                }
                setUserInfo(userInfoData);
            } catch (error) {
                console.error('MyPage fetchData error: ', error);
                navigate('/login'); // 에러 발생 시 로그인 페이지로 리다이렉트
            } finally {
                setLoading(false); // 사용자 정보 로딩이 끝나면 false로 설정
            }
        };
        fetchData(); // fetchData 함수 실행
    }, [navigate]);

    if (loading) {
        return <Loading />;
    }

    // 전략 변경 핸들러
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value, // name에 따라 strategy 또는 backtesting 업데이트
        }));
    };


    const handleBtnClick = async () => {
        setErrorMessage(''); // 에러 메시지 초기화
        try {
            const backHistoryData = await getBackHistory(formData.strategy);
            setBackHistory(backHistoryData);
            setIsTableVisible(true);
        } catch (error) {
            if (error.response && error.response.status == 404) {
                setErrorMessage('백테스팅한 데이터가 없습니다.');
            } else {
                setErrorMessage('서버 문제 발생');
            }
            console.error('MyPage strategy fetchData error: ', error);
        }
    };

    const handleBacktestingClick = async () => {
        // 선택된 전략을 가져옵니다.
        const strategy = formData.strategy;

        // 백테스팅 API 호출
        let apiUrl;
        switch (strategy) {
            case 'gd':
                apiUrl = `${SURL}/backtesting_mine_gd`;
                break;
            case 'bb':
                apiUrl = `${SURL}/backtesting_mine_bb`;
                break;
            case 'ind':
                apiUrl = `${SURL}/backtesting_mine_ind`;
                break;
            case 'env':
                apiUrl = `${SURL}/backtesting_mine_env`;
                break;
            case 'williams':
                apiUrl = `${SURL}/backtesting_mine_williams`;
                break;
            default:
                alert('전략을 선택해주세요.');
                return;
        }

        try {
            const token = localStorage.getItem('jwt'); // JWT 토큰이 localStorage에 저장되어 있다고 가정

            if (!token) {
                alert('로그인 후 이용해주세요.');
                return;
            }

            const response = await axios.get(apiUrl, {
                headers: {
                    Authorization: `Bearer ${token}`, // 헤더에 JWT 토큰 추가
                },
            });

            if (response.status === 200) {
                alert('백테스팅 데이터가 성공적으로 추가되었습니다.');
            }
        } catch (error) {
            console.error('백테스팅 호출 중 에러 발생:', error);
            alert('백테스팅 실행에 실패했습니다.');
        }
    };

    const options_strategy = [
        { label: '골든/데드', value: 'golden' },
        { label: '볼린저밴드', value: 'bollinger' },
        { label: 'RSI, MFI, MACD 지표 이용', value: 'rsi' },
        { label: '엔벨로프', value: 'env' },
        { label: '윌리엄스', value: 'williams' },
    ];

    const options_backtesting = [
        { label: '골든/데드', value: 'gd' },
        { label: '볼린저밴드', value: 'bb' },
        { label: 'RSI, MFI, MACD 지표 이용', value: 'ind' },
        { label: '엔벨로프', value: 'env' },
        { label: '윌리엄스', value: 'williams' },
    ];

    return (
        <div className={styles.mypage}>
            {userInfo && (
                <>
                    <div className={styles.title}>
                        <div className={styles.name}>{userInfo.name}</div>
                        <div className={styles.sub}>님의 마이페이지</div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.infoTitle}>회원 개인정보</div>
                        <table className={styles.tableV}>
                            <tbody>
                            <tr>
                                <th>이름</th>
                                <td>{userInfo.name}</td>
                            </tr>
                            <tr>
                                <th>이메일</th>
                                <td>{userInfo.email}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </>
            )}
            <div className={styles.info}>
                <div className={styles.infoTitle}>백테스팅 기록</div>
                <div className={styles.select}>
                    <div className={styles.input}>
                        <SelectBox
                            placeholder="전략을 선택하세요."
                            options={options_strategy}
                            name="strategy"
                            value={formData.strategy}
                            onChange={handleChange}
                        />
                    </div>
                    <button className={styles.btn} onClick={handleBtnClick}>
                        조회
                    </button>
                </div>
                {errorMessage && (
                    <>
                        <div className={styles.error}>{errorMessage}</div>
                        <div className={styles.error}>전략설정을 진행해주세요.</div>
                        <div className={styles.error}>
                            <a href="/strategy">전략설정하러 가기</a>
                        </div>
                    </>
                )}
                {!errorMessage && isTableVisible && backHistory.length > 0 && (
                    <table className={styles.tableH}>
                        <thead>
                        <tr>
                            <th>final cash</th>
                            <th>final asset</th>
                            <th>final balance</th>
                            <th>profit</th>
                            <th>profit rate</th>
                            <th>number of trades</th>
                        </tr>
                        </thead>
                        <tbody>
                        {backHistory.map((record, index) => (
                            <tr key={index}>
                                <td>{record.finalCash.toFixed(2)}</td>
                                <td>{record.finalAsset.toFixed(2)}</td>
                                <td>{record.finalBalance.toFixed(2)}</td>
                                <td>{record.profit.toFixed(2)}</td>
                                <td>{record.profitRate.toFixed(2)}</td>
                                <td>{record.numberOfTrades.toFixed(2)}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}
            </div>
            <div className={styles.infoTitle}>자동 백테스팅</div>
            <div className={styles.select}>
                <div className={styles.input}>
                    <SelectBox
                        placeholder="전략을 선택하세요."
                        options={options_backtesting}
                        name="strategy"
                        value={formData.strategy}
                        onChange={handleChange}
                    />
                </div>
                <button className={styles.btn} onClick={handleBacktestingClick}>
                    실행
                </button>
            </div>
        </div>
    );
};


/*
import React, { useState, useEffect } from 'react';
import styles from './myPage.module.css';
import { getUserInfo } from '../../../utils/userApi';
import { getBackHistory } from '../../../utils/backhistoryApi';
import { Loading } from '../../../components/loading/Loading';
import { SelectBox } from '../../../components/box/selectBox/SelectBox';

export const MyPage = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [backHistory, setBackHistory] = useState([]);
    const [isTableVisible, setIsTableVisible] = useState(false);
    const [loading, setLoading] = useState(true); //사용자 정보 로딩 상태
    const [formData, setFormData] = useState({
        strategy: '',
    });
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                // 사용자 정보를 받아오는 API
                const userInfoData = await getUserInfo();
                setUserInfo(userInfoData);
            } catch (error) {
                console.error('MyPage fetchData error: ', error);
            } finally {
                setLoading(false); //사용자 정보 로딩이 끝나면 false로 설정
            }
        };
        fetchData(); // fetchData 함수 실행
    }, []);

    if (loading || !userInfo) {
        return <Loading />;
    }

    //전략 변경 핸들러
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleBtnClick = async () => {
        setErrorMessage(''); // 에러 메시지 초기화
        try {
            const backHistoryData = await getBackHistory(formData.strategy);
            setBackHistory(backHistoryData);
            setIsTableVisible(true);
        } catch (error) {
            if (error.response && error.response.status == 404) {
                setErrorMessage('백테스팅한 데이터가 없습니다.');
            } else {
                setErrorMessage('서버 문제 발생');
            }
            console.error('MyPage strategy fetchData error: ', error);
        }
    };

    const options_strategy = [
        { label: '골든/데드', value: 'golden' },
        { label: '볼린저밴드', value: 'bollinger' },
        { label: 'RSI, MFI, MACD 지표 이용', value: 'rsi' },
        { label: '엔벨로프', value: 'env' },
        { label: '윌리엄스', value: 'williams' },
    ];

    return (
        <div className={styles.mypage}>
            {userInfo && (
                <>
                    <div className={styles.title}>
                        <div className={styles.name}>{userInfo.name}</div>
                        <div className={styles.sub}>님의 마이페이지</div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.infoTitle}>회원 개인정보</div>
                        <table className={styles.tableV}>
                            <tbody>
                                <tr>
                                    <th>이름</th>
                                    <td>{userInfo.name}</td>
                                </tr>
                                <tr>
                                    <th>이메일</th>
                                    <td>{userInfo.email}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </>
            )}
            <div className={styles.info}>
                <div className={styles.infoTitle}>백테스팅 기록</div>
                <div className={styles.select}>
                    <div className={styles.input}>
                        <SelectBox
                            placeholder="전략을 선택하세요."
                            options={options_strategy}
                            name="strategy"
                            value={formData.strategy}
                            onChange={handleChange}
                        />
                    </div>
                    <button className={styles.btn} onClick={handleBtnClick}>
                        조회
                    </button>
                </div>
                {errorMessage && (
                    <>
                        <div className={styles.error}>{errorMessage}</div>
                        <div className={styles.error}>전략설정을 진행해주세요.</div>
                        <div className={styles.error}>
                            <a href="/strategy">전략설정하러 가기</a>
                        </div>
                    </>
                )}
                {!errorMessage && isTableVisible && backHistory.length > 0 && (
                    <table className={styles.tableH}>
                        <thead>
                            <tr>
                                <th>final cash</th>
                                <th>final asset</th>
                                <th>final balance</th>
                                <th>profit</th>
                                <th>profit rate</th>
                                <th>number of trades</th>
                            </tr>
                        </thead>
                        <tbody>
                            {backHistory.map((record, index) => (
                                <tr key={index}>
                                    <td>{record.finalCash}</td>
                                    <td>{record.finalAsset}</td>
                                    <td>{record.finalBalance}</td>
                                    <td>{record.profit}</td>
                                    <td>{record.profitRate}</td>
                                    <td>{record.numberOfTrades}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};
*/
