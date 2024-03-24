import React from 'react';
import '../profileContacts.css'
import {ContactsProfileType, ProfileResponseType} from "../../../../../redux/profile-reducer/profile-reducer";

type ContactsPropsType = {
    valueContacts: ContactsProfileType | undefined
    profile: ProfileResponseType | null
}
export const Contacts: React.FC<ContactsPropsType> = ({valueContacts, profile}) => {
    console.log(profile)
    if (!valueContacts) {
        return null;
    }

    return (
        <ul className={'profile_contacts__list'}>
            {profile?.contacts && Object.entries(profile.contacts).map(([key, value]) => (
                <li key={key}  className={'profile_contacts__item'}>
                    <span className={'contact_item__title'}>{key}: </span>
                    <a href={"#"} className={'contact_link'} target={'_blank'} rel="noopener noreferrer">{value || '✖'}</a>
                </li>
            ))}
        </ul>
    );
};