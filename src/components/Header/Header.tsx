import React from 'react';
import styles from './Header.module.scss';
import {Link} from 'react-router-dom';

const Header: React.FC = (): JSX.Element => {

    return (
        <div className={styles.Header}>
           <Link to="/">Home</Link>
            <Link to="/contacts">Contacts</Link>
            <Link to="/about">About</Link>
        </div>
    );
}

export default Header;
