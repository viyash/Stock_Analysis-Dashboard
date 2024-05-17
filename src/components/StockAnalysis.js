// src/components/StockAnalysis.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from '@ant-design/charts';
import { Card } from 'antd';

const StockAnalysis = () => {
  const [stockData, setStockData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await axios.get(
          `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=YOUR_API_KEY`
        );
        const data = response.data['Time Series (Daily)'];
        const formattedData = Object.keys(data).map((date) => ({
          date,
          close: parseFloat(data[date]['4. close']),
        }));
        setStockData(formattedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching stock data:', error);
        setLoading(false);
      }
    };

    fetchStockData();
  }, []);

  const config = {
    data: stockData,
    xField: 'date',
    yField: 'close',
    xAxis: {
      type: 'time',
    },
    yAxis: {
      label: {
        formatter: (v) => `$${v.toFixed(2)}`,
      },
    },
    smooth: true,
    meta: {
      date: { alias: 'Date' },
      close: { alias: 'Close Price' },
    },
  };

  return (
    <Card title="Stock Analysis" loading={loading} style={{ marginTop: 16 }}>
      <Line {...config} />
    </Card>
  );
};

export default StockAnalysis;
