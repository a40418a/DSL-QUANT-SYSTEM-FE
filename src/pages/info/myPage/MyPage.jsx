import React, { useState, useEffect } from 'react';
import styles from './myPage.module.css';
import { VerticalTable } from '../../../components/table/verticalTable/VerticalTable';
import { getUserInfo } from '../../../utils/userApi';
import { getBackHistory } from '../../../utils/backhistoryApi';
import { Loading } from '../../../components/loading/Loading';

export const MyPage = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [backHistory, setBackHistory] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // 사용자 정보를 받아오는 API
                const userInfoData = await getUserInfo();
                setUserInfo(userInfoData);

                // 백테스팅한 기록들 받아오는 API
                const backHistoryData = await getBackHistory();
                setBackHistory(backHistoryData);
            } catch (error) {
                console.error('MyPage fetchData error: ', error);
            }
        };
        fetchData(); // fetchData 함수 실행
    }, []);

    if (!userInfo || !backHistory) {
        return <Loading />;
    }

    return (
        <div className={styles.mypage}>
            <div className={styles.title}>
                <div className={styles.name}>{userInfo.name}</div>
                <div className={styles.sub}>님의 마이페이지</div>
            </div>
            <div className={styles.info}>
                <div className={styles.infoTitle}>회원 개인정보</div>
                <VerticalTable data={userInfo} />
            </div>
            <div className={styles.info}>
                <div className={styles.infoTitle}>백테스팅 기록</div>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>date</th>
                            <th>universe</th>
                            <th>weight</th>
                            <th>initial</th>
                            <th>period</th>
                            <th>file</th>
                        </tr>
                    </thead>
                    <tbody>
                        {backtestingRecords.map((record, index) => (
                            <tr key={index}>
                                <td>{record.date}</td>
                                <td>{record.universe}</td>
                                <td>{record.weight}</td>
                                <td>{record.initial}</td>
                                <td>{record.period}</td>
                                <td>{record.file}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
