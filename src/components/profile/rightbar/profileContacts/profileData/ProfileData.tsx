import React from "react";
import {ContactsProfileType, ProfileResponseType} from "../../../../../redux/profile-reducer/profile-reducer";
import {useSelector} from "react-redux";
import {RootReduxStoreType} from "../../../../../redux/redux-store";
import {Contacts} from "../contacts/Contacts";


type ProfileDataPropsType = {
    profile: ProfileResponseType | null
    isOwner: boolean
    goToEditeMode: () => void
}


export const ProfileData: React.FC<ProfileDataPropsType> = ({profile, isOwner, goToEditeMode}) => {
    const valueContacts = useSelector<RootReduxStoreType, ContactsProfileType | undefined>(state => state.profilePage.profile?.contacts)

    return (
        <>
            <h4 className={'profile_contacts__title'}>Contact me:</h4>
            {isOwner && <button onClick={goToEditeMode}>Edite</button>}
            <Contacts
                profile={profile}
                valueContacts={valueContacts}
            />
        </>
    );
};
