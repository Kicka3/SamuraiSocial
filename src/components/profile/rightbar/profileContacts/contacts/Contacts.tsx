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
        <ul>
            {profile?.contacts && Object.entries(profile.contacts).map(([key, value]) => (
                <li key={key}>
                    <span>{key}: </span>
                    <div>{value || '✖'}</div>
                </li>
            ))}
        </ul>
    );
};