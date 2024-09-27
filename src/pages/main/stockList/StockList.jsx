import React, { useEffect, useState } from 'react';
import styles from './stockList.module.css';
import { useNavigate } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { getStockListClosing } from '../../../utils/stockApi';

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
        { field: 'date', headerName: '날짜', flex: 1 },
        {
            field: 'closing_price',
            headerName: '현재가',
            flex: 1,
            valueFormatter: ({ value }) => (value ? value.toLocaleString() : ''),
        },
        {
            field: 'fluctuating_rate',
            headerName: '등락률 (%)',
            flex: 1,
            valueFormatter: ({ value }) => (value ? `${value}%` : ''),
        },
        {
            field: 'trading_volume',
            headerName: '거래량',
            flex: 1,
            valueFormatter: ({ value }) => (value ? value.toLocaleString() : ''),
        },
    ];

    const rows = stockData.map((data, index) => ({
        id: index,
        date: data.date,
        closing_price: data.closing_price,
        fluctuating_rate: data.fluctuating_rate,
        trading_volume: data.trading_volume,
    }));

    if (loading) return <div>Loading...</div>;

    return (
        <div className={styles.stockList}>
            <div className={styles.title}>코인 종목</div>
            <div className={styles.table}>
                <Paper>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{
                            pagination: { paginationModel: { page: 0, pageSize: 100 } },
                        }}
                        pageSizeOptions={[10, 20, 50, 100]}
                        onRowClick={(params) => onClick(params.row.name)}
                    />
                </Paper>
            </div>
        </div>
    );
};
