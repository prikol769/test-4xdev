import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {GlobalProvider} from './context/GlobalContext';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <GlobalProvider>
            <App/>
        </GlobalProvider>
    </BrowserRouter>
);
