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
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        strategy: '',
    });

    if (loading || !userInfo) {
        return <Loading />;
    }

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                // 사용자 정보를 받아오는 API
                const userInfoData = await getUserInfo();
                setUserInfo(userInfoData);
            } catch (error) {
                console.error('MyPage fetchData error: ', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData(); // fetchData 함수 실행
    }, []);

    const options_strategy = [
        { label: '골든/데드', value: 'golden' },
        { label: '볼린저밴드', value: 'bollinger' },
        { label: 'RSI, MFI, MACD 지표 이용', value: 'rsi' },
    ];

    const handleBtnClick = async () => {
        setLoading(true);
        try {
            const backHistoryData = await getBackHistory(formData.strategy);
            setBackHistory(backHistoryData);
            setIsTableVisible(true);
        } catch (error) {
            console.error('MyPage strategy fetchData error: ', error);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

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
                {isTableVisible && backHistory && (
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
