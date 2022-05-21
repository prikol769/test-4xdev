import React from 'react';
import styles from './Search.module.scss';
import {useGlobalContext} from '../../context/GlobalContext';


const Search: React.FC = (): JSX.Element => {
    const {setUserInput, userInput} = useGlobalContext();


    const changeHandler = (event: React.ChangeEvent<{ value: string }>) => {
        setUserInput(event.currentTarget.value.trim());
    }

    return (
        <input className={styles.Search} onChange={changeHandler} value={userInput}  placeholder="Search Contact"/>
    );
}

export default Search;
