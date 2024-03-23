import React from 'react';
import '../profileContacts.css'

type ContactsPropsType = {
    contactTitle: string;
    contactValue: string | null;
}
export const Contacts: React.FC<ContactsPropsType> = ({contactTitle, contactValue}) => {
    const value = contactValue ? contactValue : '✖';

    return <div className={'profile_contacts__item'}>
        <span className={'contact_item__title'}>{contactTitle}: </span>
        <a href="#" target={'_blank'} className={'contact_link'}>{value}</a>
    </div>
};