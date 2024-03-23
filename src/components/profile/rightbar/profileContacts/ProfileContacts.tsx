import React, {useState} from 'react';
import './profileContacts.css'
import {ProfileResponseType} from "../../../../redux/profile-reducer/profile-reducer";
import {ProfileData} from "./profileData/ProfileData";
import {
    ProfileContactsForm
} from "./profileContactsForm/ProfileContactsForm";


type ProfileContactsPropsType = {
    profile: ProfileResponseType | null
    isOwner: boolean
}

export const ProfileContacts: React.FC<ProfileContactsPropsType> = ({profile, isOwner}) => {
    const [editMode, setEditMode] = useState(false);

    return (
        <>
            <nav className={'profile_contacts__wrapper'}>
                <div className={'profile_contacts__section'}>

                    {editMode ? <ProfileContactsForm profile={profile}/> :
                        <ProfileData profile={profile} isOwner={isOwner} goToEditeMode={() => setEditMode(true)}/>}

                </div>
            </nav>
        </>
    )
}





