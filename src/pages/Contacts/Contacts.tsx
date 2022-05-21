import React, {useState} from 'react';
import styles from './Contacts.module.scss';
import MainLayout from '../../layouts/MainLayout';
import Search from '../../components/Search/Search';
import ContactItem from '../../components/ContactItem/ContactItem';
import ModalAdd from '../../components/ModalAdd/ModalAdd';
import {useGlobalContext} from '../../context/GlobalContext';
import {ContactData} from '../../types';

const Contacts: React.FC = (): JSX.Element => {
    const {contactsData, userInput} = useGlobalContext();
    const [openModal, setOpenModal] = useState<boolean>(false);


   const dataFilter = contactsData.filter((contact: ContactData) => {
        const firstName = contact.firstName.toLowerCase().includes(userInput.toLowerCase());
       const secondName =  contact.secondName.toLowerCase().includes(userInput.toLowerCase());
       const phoneNumber = contact.phoneNumber.toLowerCase().includes(userInput.toLowerCase());
       return firstName || secondName || phoneNumber;
    });


    return (
        <MainLayout>
            <div className={styles.Contacts}>
                <h1>Contacts</h1>
                <Search/>
                <div className={styles.ContactsList}>
                    {dataFilter.map((item: ContactData) => (
                        <ContactItem
                            key={item.id}
                            id={item.id}
                            firstName={item.firstName}
                            secondName={item.secondName}
                            phoneNumber={item.phoneNumber}
                        />
                    ))}
                </div>
                {dataFilter.length === 0 && userInput && <p>Not found</p>}
                <button onClick={() => setOpenModal(true)} className={styles.BtnAdd}>
                    <img src={'/img/plus.png'} alt="add" width={24} height={24}/>
                </button>
                {openModal && <ModalAdd setOpenModal={setOpenModal}/>}
            </div>
        </MainLayout>
    );
}

export default Contacts;
