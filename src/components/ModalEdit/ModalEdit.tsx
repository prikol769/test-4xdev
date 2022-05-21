import React, {useState, FormEvent} from 'react';
import styles from './ModalEdit.module.scss';
import {useGlobalContext} from '../../context/GlobalContext';
import {ContactData} from '../../types';


interface ModalEditProps extends ContactData{
    setOpenModal: (openModal: boolean) => void;
}

const ModalEdit: React.FC<ModalEditProps> = (props: ModalEditProps): JSX.Element => {
    const {setOpenModal, id, firstName, secondName, phoneNumber} = props;
    const {setContactsData, contactsData} = useGlobalContext();

    const [submit, setSubmit] = useState<boolean>(false);
    const [newContactData, setNewContactData] = useState<ContactData>({
        id: id,
        firstName: firstName,
        secondName: secondName,
        phoneNumber: phoneNumber
    });



    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmit(true);
        if(newContactData.firstName && newContactData.phoneNumber) {
            const itemIndex = contactsData.findIndex((contact:ContactData) => contact.id === id);
            const newArr = contactsData;
            newArr[itemIndex] = newContactData;
            setContactsData([...newArr]);
            setOpenModal(false);
        }
    }

    const changeHandler = (event: React.ChangeEvent<{ value: string, name: string }>) => {
        setNewContactData({
            ...newContactData,
            [event.target.name]: event.currentTarget.value
        });
    }

    return (
        <div onClick={() => {
            setOpenModal(false)
        }} className={styles.Backdrop}>
            <div onClick={(e) => e.stopPropagation()} className={styles.ModalEdit}>
                <h2>Edit Contact</h2>
                <form className={styles.FormContainer} onSubmit={submitHandler}>
                    <div className={styles.inputWrapper}>
                        <input
                            className={styles.input}
                            name={'firstName'}
                            value={newContactData.firstName}
                            onChange={changeHandler}
                            placeholder="Enter first name"
                        />
                        {!newContactData.firstName && submit &&
                        <p className={styles.ErrorText}>firstName empty field!</p>}
                    </div>
                    <div className={styles.inputWrapper}>
                        <input
                            className={styles.input}
                            value={newContactData.secondName}
                            name={'secondName'}
                            onChange={changeHandler}
                            placeholder="Enter second name"
                        />
                    </div>
                    <div className={styles.inputWrapper}>
                        <input
                            className={styles.input}
                            name={'phoneNumber'}
                            value={newContactData.phoneNumber}
                            onChange={changeHandler}
                            placeholder="Enter phone number"
                        />
                        {!newContactData.phoneNumber && submit &&
                        <p className={styles.ErrorText}>phoneNumber empty field!</p>}
                    </div>
                    <div className={styles.BtnContainer}>
                        <button className={styles.BtnClose} onClick={() => setOpenModal(false)}>
                            CLOSE
                        </button>
                        <button className={styles.BtnAdd} type="submit">
                            SAVE CONTACT
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ModalEdit;
