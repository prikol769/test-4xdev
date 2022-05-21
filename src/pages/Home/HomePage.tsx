import React from 'react';
import styles from './HomePage.module.scss';
import MainLayout from '../../layouts/MainLayout';

const HomePage: React.FC = (): JSX.Element => {

    return (
        <MainLayout>
            <div className={styles.HomePage}>
                <h1>Home</h1>
            </div>
        </MainLayout>
    );
}

export default HomePage;
