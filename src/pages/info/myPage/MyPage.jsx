import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // react-router-dom에서 useNavigate 가져오기
import styles from "./myPage.module.css";
import { getUserInfo } from "../../../utils/userApi";
import { getBackHistory } from "../../../utils/backhistoryApi";
import { Loading } from "../../../components/loading/Loading";
import { SelectBox } from "../../../components/box/selectBox/SelectBox";
import axios from "axios";
import {
    DataGrid,
    gridPageCountSelector,
    gridPageSelector,
    useGridApiContext,
    useGridSelector,
} from "@mui/x-data-grid";
import { Box } from "@mui/system";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import { AddChart } from "../../../components/emoticon/Add";

const CustomPagination = () => {
    const apiRef = useGridApiContext();

    if (!apiRef) {
        return null;
    }

    const page = useGridSelector(apiRef, gridPageSelector);
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);

    return (
        <Pagination
            color="primary"
            variant="outlined"
            shape="rounded"
            page={page + 1}
            count={pageCount}
            renderItem={(props) => <PaginationItem {...props} disableRipple />}
            onChange={(event, value) => apiRef.current.setPage(value - 1)}
        />
    );
};

export const MyPage = () => {
    const SURL = import.meta.env.VITE_APP_URI;
    const navigate = useNavigate(); // 리다이렉트를 위한 navigate 함수 호출
    const [userInfo, setUserInfo] = useState(null);
    const [backHistory, setBackHistory] = useState([]);
    const [isTableVisible, setIsTableVisible] = useState(false);
    const [loading, setLoading] = useState(true); //사용자 정보 로딩 상태
    const [formData, setFormData] = useState({
        strategy: "", // 일반 조회 전략
        backtestingStrategy: "", // 백테스팅 전략
    });
    const [errorMessage, setErrorMessage] = useState("");
    const [paginationModel, setPaginationModel] = useState({
        page: 0,
        pageSize: 5,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                // 사용자 정보를 받아오는 API
                const userInfoData = await getUserInfo();
                if (!userInfoData) {
                    navigate("/login"); // 사용자 정보가 없으면 로그인 페이지로 리다이렉트
                    return;
                }
                setUserInfo(userInfoData);
            } catch (error) {
                console.error("MyPage fetchData error: ", error);
                navigate("/login"); // 에러 발생 시 로그인 페이지로 리다이렉트
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
        setFormData((prevData) => ({
            ...prevData,
            [name]: value, // name에 따라 strategy 또는 backtesting 업데이트
        }));
    };

    const handleBtnClick = async () => {
        setErrorMessage(""); // 에러 메시지 초기화
        try {
            const backHistoryData = await getBackHistory(formData.strategy);
            setBackHistory(backHistoryData);
            setIsTableVisible(true);
        } catch (error) {
            if (error.response && error.response.status == 404) {
                setErrorMessage("아직 백테스팅한 데이터가 없습니다.");
            } else {
                setErrorMessage("서버 문제 발생");
            }
            console.error("MyPage strategy fetchData error: ", error);
        }
    };

    const handleBacktestingClick = async () => {
        // 선택된 전략을 가져옵니다.
        const strategy = formData.backtestingStrategy;

        // 백테스팅 API 호출
        let apiUrl;
        switch (strategy) {
            case "gd":
                apiUrl = `${SURL}/backtesting_mine_gd`;
                break;
            case "bb":
                apiUrl = `${SURL}/backtesting_mine_bb`;
                break;
            case "ind":
                apiUrl = `${SURL}/backtesting_mine_ind`;
                break;
            case "env":
                apiUrl = `${SURL}/backtesting_mine_env`;
                break;
            case "williams":
                apiUrl = `${SURL}/backtesting_mine_williams`;
                break;
            default:
                alert("전략을 선택해주세요.");
                return;
        }

        try {
            const token = localStorage.getItem("jwt"); // JWT 토큰이 localStorage에 저장되어 있다고 가정

            if (!token) {
                alert("로그인 후 이용해주세요.");
                return;
            }

            const response = await axios.get(apiUrl, {
                headers: {
                    Authorization: `Bearer ${token}`, // 헤더에 JWT 토큰 추가
                },
            });

            if (response.status === 200) {
                alert(
                    "백테스팅 데이터가 성공적으로 추가되었습니다.\n결과는 백테스팅 기록에서 확인할 수 있습니다.",
                );
            }
        } catch (error) {
            console.error("백테스팅 호출 중 에러 발생:", error);
            alert("백테스팅 실행에 실패했습니다.");
        }
    };

    const options_strategy = [
        { label: "골든/데드", value: "golden" },
        { label: "볼린저밴드", value: "bollinger" },
        { label: "RSI, MFI, MACD 지표 이용", value: "rsi" },
        { label: "엔벨로프", value: "env" },
        { label: "윌리엄스", value: "williams" },
    ];

    const options_backtesting = [
        { label: "골든/데드", value: "gd" },
        { label: "볼린저밴드", value: "bb" },
        { label: "RSI, MFI, MACD 지표 이용", value: "ind" },
        { label: "엔벨로프", value: "env" },
        { label: "윌리엄스", value: "williams" },
    ];

    const rows = backHistory.map((record, index) => {
        const formattedDate = new Date(record.backtesting_date).toLocaleDateString("ko-KR", {
            year: "2-digit",
            month: "2-digit",
            day: "2-digit",
        });

        return {
            id: index,
            date: formattedDate,
            finalCash: record.finalCash.toFixed(2),
            finalAsset: record.finalAsset.toFixed(2),
            finalBalance: record.finalBalance.toFixed(2),
            profit: record.profit.toFixed(2),
            profitRate: record.profitRate.toFixed(2),
            numberOfTrades: record.numberOfTrades.toFixed(2),
        };
    });

    const columns = [
        {
            field: "date",
            headerName: "Date",
            flex: 1,
            headerAlign: "center",
            type: "string",
        },
        {
            field: "finalCash",
            headerName: "Final Cash",
            flex: 1,
            headerAlign: "center",
            type: "number",
        },
        {
            field: "finalAsset",
            headerName: "Final Asset",
            flex: 1,
            headerAlign: "center",
            type: "number",
        },
        {
            field: "finalBalance",
            headerName: "Final Balance",
            flex: 1,
            headerAlign: "center",
            type: "number",
        },
        { field: "profit", headerName: "수익", flex: 1, headerAlign: "center", type: "number" },
        {
            field: "profitRate",
            headerName: "Profit Rate(%)",
            flex: 1,
            headerAlign: "center",
            type: "number",
            renderCell: (params) => {
                const value = Number(params.value);
                const color = value < 0 ? "var(--down-color)" : "var(--up-color)";
                return (
                    <span style={{ color, cursor: "pointer" }}>
                        {value ? (value * 100).toFixed(2) : "0.00"}
                    </span>
                );
            },
        },
        {
            field: "numberOfTrades",
            headerName: "Number of Trades",
            flex: 1,
            headerAlign: "center",
            type: "number",
        },
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
                    <div className={styles.errorWrapper}>
                        <div className={styles.errorMessage}>{errorMessage}</div>
                        <div className={styles.errorBtn}>
                            <a href="/strategy">
                                전략 설정 바로가기
                                <AddChart />
                            </a>
                        </div>
                    </div>
                )}
                {!errorMessage && isTableVisible && backHistory.length > 0 && (
                    <Box
                        sx={{
                            "& .MuiDataGrid-columnHeader": {
                                backgroundColor: "var(--point-color-2)",
                                "& .MuiDataGrid-columnHeaderTitle": {
                                    color: "var(--color-white)",
                                    fontFamily: "var(--font-3)",
                                },
                            },
                        }}
                    >
                        <DataGrid
                            sx={{
                                width: "100%",
                                height: "100%",
                                "& .MuiDataGrid-row": {
                                    borderBottom: "1px solid var(--color-4)",
                                    borderTop: "none",
                                    borderRight: "none",
                                    borderLeft: "none",
                                    borderRadius: 0,
                                },
                            }}
                            rows={rows}
                            columns={columns}
                            paginationModel={paginationModel}
                            onPaginationModelChange={setPaginationModel}
                            slots={{ pagination: CustomPagination }}
                            onRowClick={(params) => onClick(params.row.market)}
                            disableColumnResize
                            disableColumnReorder
                        />
                    </Box>
                )}
            </div>
            <div className={styles.info}>
                <div className={styles.infoTitle}>자동 백테스팅</div>
                <div className={styles.select}>
                    <div className={styles.input}>
                        <SelectBox
                            placeholder="전략을 선택하세요."
                            options={options_backtesting}
                            name="backtestingStrategy"
                            value={formData.backtestingStrategy}
                            onChange={handleChange}
                        />
                    </div>
                    <button className={styles.btn} onClick={handleBacktestingClick}>
                        실행
                    </button>
                </div>
            </div>
        </div>
    );
};
