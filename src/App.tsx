import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import About from './pages/About/About';
import Contacts from './pages/Contacts/Contacts';


const App: React.FC = (): JSX.Element => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/contacts" element={<Contacts/>}/>
            <Route path="/about" element={<About/>}/>
            <Route
                path="*"
                element={<Navigate to="/" replace/>}
            />
        </Routes>
    );
}

export default App;
