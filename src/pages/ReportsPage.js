// src/pages/ReportsPage.js

import React, { useState, useEffect } from 'react';
import { Table, Card } from 'antd';

const ReportsPage = () => {
  const [reportData, setReportData] = useState([]);

  useEffect(() => {
    // Mock report data for demonstration purposes
    const mockData = [
      {
        key: '1',
        date: '2024-01-01',
        stock: 'IBM',
        performance: 'Positive',
        close: 145.30,
      },
      {
        key: '2',
        date: '2024-02-01',
        stock: 'IBM',
        performance: 'Negative',
        close: 140.50,
      },
      {
        key: '3',
        date: '2024-03-01',
        stock: 'IBM',
        performance: 'Positive',
        close: 150.75,
      },
    ];
    setReportData(mockData);
  }, []);

  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Stock',
      dataIndex: 'stock',
      key: 'stock',
    },
    {
      title: 'Performance',
      dataIndex: 'performance',
      key: 'performance',
    },
    {
      title: 'Close Price',
      dataIndex: 'close',
      key: 'close',
      render: (text) => `$${text.toFixed(2)}`,
    },
  ];

  return (
    <div style={{ padding: 24 }}>
      <Card title="Previous Stock Performance Reports">
        <Table dataSource={reportData} columns={columns} />
      </Card>
    </div>
  );
};

export default ReportsPage;
