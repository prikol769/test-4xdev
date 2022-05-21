import React from 'react';
import Header from '../components/Header/Header';

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({children}): JSX.Element => {

    return (
        <>
            <Header />
            {children}
        </>
    );
};

export default MainLayout;
