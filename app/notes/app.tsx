import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './page/HomePage'
import 'antd/dist/antd.css'
import {ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN';
function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <HomePage />
    </ConfigProvider>
  );
}
ReactDOM.render(<App/>, document.getElementById('root'))