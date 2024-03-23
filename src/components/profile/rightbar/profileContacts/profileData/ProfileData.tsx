import React from "react";
import {Contacts} from "../contacts/Contacts";
import {ProfileResponseType} from "../../../../../redux/profile-reducer/profile-reducer";


type ProfileDataPropsType = {
    profile: ProfileResponseType | null
    isOwner: boolean
    goToEditeMode: () => void
}

export const ProfileData: React.FC<ProfileDataPropsType> = ({profile, isOwner, goToEditeMode}) => {

    return (
        <>
            <h4 className={'profile_contacts__title'}>Contact me:</h4>

            {isOwner && <button onClick={goToEditeMode}>Edite</button>}

            <ul className={'profile_contacts__list'}>
                {
                    profile?.contacts && Object.entries(profile.contacts).map((([key, value]) => (
                        <li key={key}><Contacts contactTitle={key} contactValue={value}/></li>
                    )))
                }
            </ul>
        </>
    );
};
