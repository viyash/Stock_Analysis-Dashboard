// src/pages/DashboardPage.js

import React from 'react';
import { Row, Col, Card, Statistic } from 'antd';
import { ArrowUpOutlined, UserOutlined } from '@ant-design/icons';
import StockAnalysis from '../components/StockAnalysis';

const DashboardPage = () => (
  <div style={{ padding: 24 }}>
    <Row gutter={16}>
      <Col span={8}>
        <Card>
          <Statistic
            title="Total Sales"
            value={112893}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
            prefix={<ArrowUpOutlined />}
            suffix="%"
          />
        </Card>
      </Col>
      <Col span={8}>
        <Card>
          <Statistic
            title="Total Orders"
            value={300}
            precision={0}
            valueStyle={{ color: '#3f8600' }}
            prefix={<ArrowUpOutlined />}
            suffix=""
          />
        </Card>
      </Col>
      <Col span={8}>
        <Card>
          <Statistic
            title="New Customers"
            value={8}
            precision={0}
            valueStyle={{ color: '#3f8600' }}
            prefix={<ArrowUpOutlined />}
            suffix=""
          />
        </Card>
      </Col>
    </Row>
    <Row gutter={16} style={{ marginTop: 24 }}>
      <Col span={24}>
        <StockAnalysis />
      </Col>
    </Row>
  </div>
);

export default DashboardPage;
