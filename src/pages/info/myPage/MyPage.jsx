import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
    if (!apiRef) return null;
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
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState(null);
    const [backHistory, setBackHistory] = useState([]);
    const [isTableVisible, setIsTableVisible] = useState(false);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
        strategy: "",
        backtestingStrategy: "",
    });
    const [errorMessage, setErrorMessage] = useState("");
    const [paginationModel, setPaginationModel] = useState({
        page: 0,
        pageSize: 5,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userInfoData = await getUserInfo();
                if (!userInfoData) {
                    navigate("/login");
                    return;
                }
                setUserInfo(userInfoData);
            } catch (error) {
                console.error("MyPage fetchData error: ", error);
                navigate("/login");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [navigate]);

    if (loading) return <Loading />;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleBtnClick = async () => {
        setErrorMessage("");
        try {
            const backHistoryData = await getBackHistory(formData.strategy);
            setBackHistory(backHistoryData);
            setIsTableVisible(true);
        } catch (error) {
            if (error.response && error.response.status === 404) {
                setErrorMessage("아직 백테스팅한 데이터가 없습니다.");
            } else {
                setErrorMessage("서버 문제 발생");
            }
            console.error("MyPage strategy fetchData error: ", error);
        }
    };

    const handleBacktestingClick = async () => {
        const strategy = formData.backtestingStrategy;
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
            const token = localStorage.getItem("jwt");
            if (!token) {
                alert("로그인 후 이용해주세요.");
                return;
            }

            const response = await axios.get(apiUrl, {
                headers: { Authorization: `Bearer ${token}` },
            });

            if (response.status === 200) {
                alert("백테스팅 데이터가 성공적으로 추가되었습니다.");
            }
        } catch (error) {
            console.error("백테스팅 호출 중 에러 발생:", error);
            alert("백테스팅 실행에 실패했습니다.");
        }
    };

    const options_backtesting = [
        { label: "골든/데드", value: "gd" },
        { label: "볼린저밴드", value: "bb" },
        { label: "RSI, MFI, MACD 지표 이용", value: "ind" },
        { label: "엔벨로프", value: "env" },
        { label: "윌리엄스", value: "williams" },
    ];

    const getColumns = () => {
        return formData.strategy === "multi"
            ? [
                  { field: "date", headerName: "Date", flex: 1 },
                  { field: "initialInvestment", headerName: "Initial Investment (만원)", flex: 1 },
                  { field: "finalBalance", headerName: "Final Balance (만원)", flex: 1 },
                  { field: "profitVsRate", headerName: "Profit Vs Rate (%)", flex: 1 },
                  { field: "finalProfitRate", headerName: "Final Profit Rate (%)", flex: 1 },
                  { field: "strategy", headerName: "First Strategy", flex: 1 },
                  { field: "second_strategy", headerName: "Second Strategy", flex: 1 },
              ]
            : [
                  { field: "date", headerName: "Date", flex: 1 },
                  { field: "finalCash", headerName: "Final Cash (만원)", flex: 1 },
                  { field: "finalAsset", headerName: "Final Asset (만원)", flex: 1 },
                  { field: "finalBalance", headerName: "Final Balance (만원)", flex: 1 },
                  { field: "profit", headerName: "Profit (만원)", flex: 1 },
                  { field: "profitRate", headerName: "Profit Rate (%)", flex: 1 },
                  { field: "numberOfTrades", headerName: "Number of Trades", flex: 1 },
              ];
    };

    const rows = backHistory.map((record, index) => {
        const dateValue = new Date(record.backtesting_date || Date.now());
        const formattedDate = isNaN(dateValue.getTime())
            ? "Invalid Date"
            : dateValue.toLocaleDateString("ko-KR", { year: "2-digit", month: "2-digit", day: "2-digit" });

        if (formData.strategy === "multi") {
            return {
                id: index,
                date: formattedDate,
                initialInvestment: record.initial_investment ? record.initial_investment.toFixed(2) : "0.00",
                finalBalance: record.second_finalBalance ? record.second_finalBalance.toFixed(2) : "0.00",
                profitVsRate: record.profitVsRate ? record.profitVsRate.toFixed(2) : "0.00",
                finalProfitRate: record.finalProfitRate ? record.finalProfitRate.toFixed(2) : "0.00",
                strategy: record.strategy || "N/A",
                second_strategy: record.second_strategy || "N/A",
            };
        } else {
            return {
                id: index,
                date: formattedDate,
                finalCash: record.finalCash ? record.finalCash.toFixed(2) : "0.00",
                finalAsset: record.finalAsset ? record.finalAsset.toFixed(2) : "0.00",
                finalBalance: record.finalBalance ? record.finalBalance.toFixed(2) : "0.00",
                profit: record.profit ? record.profit.toFixed(2) : "0.00",
                profitRate: record.profitRate ? record.profitRate.toFixed(2) : "0.00",
                numberOfTrades: record.numberOfTrades !== undefined ? record.numberOfTrades : 0,
            };
        }
    });


    return (
        <>
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
                        <SelectBox
                            placeholder="전략을 선택하세요."
                            options={[
                                { label: "골든/데드", value: "golden" },
                                { label: "볼린저밴드", value: "bollinger" },
                                { label: "RSI", value: "rsi" },
                                { label: "엔벨로프", value: "env" },
                                { label: "멀티전략", value: "multi" },
                            ]}
                            name="strategy"
                            value={formData.strategy}
                            onChange={handleChange}
                        />
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

                    {!errorMessage && isTableVisible && (
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
                                rows={rows}
                                columns={getColumns()}
                                paginationModel={paginationModel}
                                onPaginationModelChange={setPaginationModel}
                                slots={{ pagination: CustomPagination }}
                                disableColumnResize
                                disableColumnReorder
                            />
                        </Box>
                    )}
                </div>

                <div className={styles.info}>
                    <div className={styles.infoTitle}>자동 백테스팅</div>
                    <div className={styles.select}>
                        <SelectBox
                            placeholder="전략을 선택하세요."
                            options={options_backtesting}
                            name="backtestingStrategy"
                            value={formData.backtestingStrategy}
                            onChange={handleChange}
                        />
                        <button className={styles.btn} onClick={handleBacktestingClick}>
                            실행
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};



