// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Layout, Menu } from 'antd';
import {
  DashboardOutlined,
  BarChartOutlined,
  SettingOutlined,
  MessageOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import DashboardPage from './pages/DashboardPage';
import ReportsPage from './pages/ReportsPage';

const { Header, Content, Footer, Sider } = Layout;

const Logo = styled.div`
  height: 32px;
  margin: 16px;
  color: white;
  font-size: 20px;
  text-align: center;
`;

const App = () => (
  <Router>
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible>
        <Logo>Vyash Natarajan</Logo>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            Dashboard
            <Link to="/" />
          </Menu.Item>
          <Menu.Item key="2" icon={<BarChartOutlined />}>
            Reports
            <Link to="/reports" />
          </Menu.Item>
          <Menu.Item key="3" icon={<SettingOutlined />}>
            Settings
            <Link to="/settings" />
          </Menu.Item>
          <Menu.Item key="4" icon={<MessageOutlined />}>
            Messages
            <Link to="/messages" />
          </Menu.Item>
          <Menu.Item key="5" icon={<LogoutOutlined />}>
            Sign Out
            <Link to="/logout" />
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/reports" element={<ReportsPage />} />
            {/* Additional routes for other components */}
          </Routes>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  </Router>
);

export default App;
