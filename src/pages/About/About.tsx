import React from 'react';
import styles from './About.module.scss';
import MainLayout from '../../layouts/MainLayout';

const About: React.FC = (): JSX.Element => {

    return (
        <MainLayout>
            <div className={styles.About}>
                <h1>About</h1>
            </div>
        </MainLayout>
    );
}

export default About;
