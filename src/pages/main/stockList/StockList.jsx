import React, { useEffect, useState } from 'react';
import styles from './stockList.module.css';
import { useNavigate } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { getStockListClosing } from '../../../utils/stocklistApi';
import { Loading } from '../../../components/loading/Loading';

export const StockList = () => {
    const navigate = useNavigate();
    const [stockData, setStockData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStockData = async () => {
            try {
                const data = await getStockListClosing();
                setStockData(data);
            } catch (error) {
                console.error('Error fetching stock data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchStockData();
    }, []);

    const onClick = (name) => {
        navigate(`/stockinfo`);
    };

    const columns = [
        { field: 'market', headerName: '종목명', flex: 2 },
        {
            field: 'closingPrice',
            headerName: '현재가',
            flex: 1,
            // valueFormatter: ({ value }) => {
            //     const numericValue = Number(value); // 문자열을 숫자로 변환
            //     console.log('numericValue:', numericValue);
            //     console.log('value:', value);
            //     return !isNaN(numericValue)
            //         ? numericValue.toLocaleString(undefined, {
            //               minimumFractionDigits: 2,
            //               maximumFractionDigits: 2,
            //           })
            //         : '-';
            // },
        },
        {
            field: 'fluctuatingRate',
            headerName: '등락률 (%)',
            flex: 1,
        },
        {
            field: 'tradingVolume',
            headerName: '거래량',
            flex: 1,
        },
    ];

    const rows = stockData.map((data, index) => ({
        id: index,
        market: data.market,
        closingPrice: data.closingPrice,
        fluctuatingRate: data.fluctuatingRate,
        tradingVolume: data.tradingVolume,
    }));

    if (loading) return <Loading />;

    return (
        <div className={styles.stockList}>
            <div className={styles.title}>코인 종목</div>
            <div className={styles.table}>
                <Paper>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{
                            pagination: { paginationModel: { page: 0, pageSize: 20 } },
                        }}
                        pageSizeOptions={[20, 50, 100]}
                        onRowClick={(params) => onClick(params.row.name)}
                    />
                </Paper>
            </div>
        </div>
    );
};
