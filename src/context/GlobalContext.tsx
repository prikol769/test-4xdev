import React, {createContext, useContext} from 'react';
import {ContactData} from '../types';

type GlobalContextType = {
    contactsData: ContactData | any;
    setContactsData: (contactsData: ContactData | any) => void;
    userInput: string;
    setUserInput: (userInput: string) => void;
};

const GlobalContextDefaultValues: GlobalContextType = {
    contactsData: [],
    setContactsData: (contactsData: ContactData) => contactsData ,
    userInput: '',
    setUserInput: (userInput: string) => userInput,
};

export const GlobalContext = createContext<GlobalContextType>(GlobalContextDefaultValues);

export function useGlobalContext() {
    return useContext(GlobalContext);
}

const useProvideGlobal = () => {
    const [contactsData, setContactsData] = React.useState([]);
    const [userInput, setUserInput] = React.useState('');

    return {
        contactsData,
        setContactsData,
        userInput,
        setUserInput,
    };
};

type GlobalProviderProps = {
    children: React.ReactNode;
};

export const GlobalProvider = (props: GlobalProviderProps): JSX.Element => {
    const globalData = useProvideGlobal();
    return (
        <GlobalContext.Provider value={globalData}>
            {props.children}
        </GlobalContext.Provider>
    );
};
