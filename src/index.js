import React from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/reset.css';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import zhCN from 'antd/locale/zh_CN';
import { ConfigProvider } from 'antd'

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// store 
import store from './store';
import {Provider} from 'react-redux'
dayjs.locale('zh-cn')

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    // <React.StrictMode>
        <Provider store={store}>
            <ConfigProvider locale={zhCN}>
                <App />
            </ConfigProvider>
        </Provider>
    // </React.StrictMode>
);

reportWebVitals();
