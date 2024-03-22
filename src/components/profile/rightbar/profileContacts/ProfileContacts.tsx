import React from 'react';
import './profileContacts.css'
import {ProfileResponseType} from "../../../../redux/profile-reducer/profile-reducer";
import {Contacts} from "../profileContacts/contacts/Contacts";


type ProfileContactsPropsType = {
    profile: ProfileResponseType | null
}

export const ProfileContacts: React.FC<ProfileContactsPropsType> = ({profile}) => {

    return (
        <>
            <nav className={'profile_contacts__wrapper'}>
                <div className={'profile_contacts__section'}>
                    <h4 className={'profile_contacts__title'}>Contact me:</h4>
                    <ul className={'profile_contacts__list'}>
                        {
                            profile?.contacts && Object.entries(profile.contacts).map((([key, value]) => (
                                <div key={key}><Contacts contactTitle={key} contactValue={value}/></div>
                            )))
                        }
                    </ul>
                </div>
            </nav>
        </>
    )
}