import React, {useState} from 'react';
import './profileContacts.css'
import {ProfileResponseType} from "../../../../redux/profile-reducer/profile-reducer";
import {ProfileData} from "./profileData/ProfileData";
import {
    ProfileContactsFormDataType,
    ProfileContactsReduxForm
} from "../profileContacts/profileContactsForm/ProfileContactsForm";


type ProfileContactsPropsType = {
    profile: ProfileResponseType | null
    isOwner: boolean
    saveProfileInfoTC: (formData: ProfileContactsFormDataType) => void
}

export const ProfileContacts: React.FC<ProfileContactsPropsType> = ({profile, isOwner, saveProfileInfoTC}) => {
    const [editMode, setEditMode] = useState(false);

    const onToggleEditMode = () => {
        setEditMode(true)
    }

    const onSubmit = (formData: ProfileContactsFormDataType) => {
        const obj = {
            Contacts: {
                Facebook: formData.facebook,
                Website: formData.website,
                Vk: formData.vk,
                Twitter: formData.twitter,
                Instagram: formData.instagram,
                Youtube: formData.youtube,
                Github: formData.github,
                MainLink: formData.mainLink,

            },
            LookingForAJob: formData.lookingForAJob,
            LookingForAJobDescription: formData.lookingForAJobDescription,
            AboutMe: formData.AboutMe,
            FullName: formData.fullName
        }
        saveProfileInfoTC(obj as any)
        setEditMode(false)
    }

    return (
        <>
            <nav className={'profile_contacts__wrapper'}>
                <div className={'profile_contacts__section'}>
                    {editMode
                        ? <ProfileContactsReduxForm initialValues={profile as Partial<ProfileResponseType>}
                                                    onSubmit={onSubmit}
                        />
                        : <ProfileData profile={profile}
                                       isOwner={isOwner}
                                       goToEditeMode={onToggleEditMode}
                        />
                    }
                </div>
            </nav>
        </>
    )
}





