import React, {useState} from 'react';
import styles from './ContactItem.module.scss';
import {ContactData} from '../../types';
import {useGlobalContext} from '../../context/GlobalContext';
import ModalEdit from '../ModalEdit/ModalEdit';

const ContactItem: React.FC<ContactData> = (props: ContactData): JSX.Element => {
    const {contactsData, setContactsData} = useGlobalContext();
    const {firstName, secondName, phoneNumber, id} = props;
    const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);

    const deleteContact = () => {
        const newArr = contactsData?.filter((contact: ContactData) => contact.id !== id);
        setContactsData(newArr);
    }


    return (
        <div className={styles.ContactItem}>
            <div className={styles.InfoContainer}>
                <div className={styles.NameContainer}>
                    <p className={styles.FirstName}>{firstName}</p>
                    <p className={styles.SecondName}>{secondName}</p>
                </div>
                <p className={styles.PhoneNumber}>{phoneNumber}</p>
            </div>
            <div className={styles.ActionsContainer}>
                <button onClick={() => setOpenModalEdit(true)} className={styles.Btn}>
                    <img src={'/img/edit.svg'} alt="EditIcon" width={24} height={24}/>
                </button>
                <button onClick={deleteContact} className={styles.Btn}>
                    <img src={'/img/delete.svg'} alt="DeleteIcon" width={24} height={24}/>
                </button>
            </div>
            {openModalEdit &&
                <ModalEdit
                    id={id}
                    phoneNumber={phoneNumber}
                    secondName={secondName}
                    firstName={firstName}
                    setOpenModal={setOpenModalEdit}
                />
            }
        </div>
    );
}

export default ContactItem;
