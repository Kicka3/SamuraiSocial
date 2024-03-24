import React from "react";
import {ContactsProfileType, ProfileResponseType} from "../../../../../redux/profile-reducer/profile-reducer";
import {useSelector} from "react-redux";
import {RootReduxStoreType} from "../../../../../redux/redux-store";
import {Contacts} from "../contacts/Contacts";
import {getProfileContacts} from "../../../../../redux/users-selectors/users-selectors";


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


            {/*<ul className={'profile_contacts__list'}>*/}
            {/*    {*/}
            {/*        profile?.contacts && Object.entries(profile.contacts).map((([key, value]) => (*/}
            {/*            <li key={key}>*/}
            {/*                {*/}
            {/*                    <div className={'profile_contacts__item'}>*/}
            {/*                        <span className={'contact_item__title'}>{key}: </span>*/}
            {/*                        <a href="#" target={'_blank'} className={'contact_link'}>{value}</a>*/}
            {/*                    </div>*/}
            {/*                }*/}

            {/*             */}
            {/*            </li>*/}
            {/*        )))*/}
            {/*    }*/}
            {/*</ul>*/}
        </>
    );
};
{/*<Contacts valueContacts={valueContacts}*/
}
{/*          contactTitle={key}*/
}
{/*          contactValue={value}*/
}
{/*/>*/
}