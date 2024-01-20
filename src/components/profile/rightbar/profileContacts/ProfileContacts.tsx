import React from 'react';
import './profileContacts.css'
import {ProfileResponseType} from "../../../../redux/profile-reducer/profile-reducer";


type ProfileContactsPropsType = {
    profile: ProfileResponseType | null,
}


export const ProfileContacts: React.FC<ProfileContactsPropsType> = ({profile}) => {

    const link_vk = profile?.contacts.vk ? profile?.contacts.vk : '✖';
    const link_github = profile?.contacts.github ? profile?.contacts.github : '✖';
    const link_mainLink = profile?.contacts.mainLink ? profile?.contacts.mainLink : '✖';
    const link_youtube = profile?.contacts.youtube ? profile?.contacts.youtube : '✖';
    const link_facebook = profile?.contacts.facebook ? profile?.contacts.facebook : '✖';
    const link_instagram = profile?.contacts.instagram ? profile?.contacts.instagram : '✖';
    const link_twitter = profile?.contacts.twitter ? profile?.contacts.twitter : '✖';
    const link_website = profile?.contacts.website ? profile?.contacts.website : '✖';

    return (
        <>
            <nav className={'profile_contacts__wrapper'}>
                <div className={'profile_contacts__section'}>
                    <h4 className={'profile_contacts__title'}>Contact me:</h4>
                    <ul className={'profile_contacts__list'}>

                        <li className={'profile_contacts__item'}>
                            <span className={'contact_item__title'}>My VK: </span>
                            <a href="#" target={'_blank'} className={'contact_link'}>{link_vk}</a>
                        </li>

                        <li className={'profile_contacts__item'}>
                            <span className={'contact_item__title'}>My Github: </span>
                            <a href="#" target={'_blank'} className={'contact_link'}>{link_github}</a>
                        </li>

                        <li className={'profile_contacts__item'}>
                            <span className={'contact_item__title'}>My main link: </span>
                            <a href="#" target={'_blank'} className={'contact_link'}>{link_mainLink}</a>
                        </li>

                        <li className={'profile_contacts__item'}>
                            <span className={'contact_item__title'}>My YouTube: </span>
                            <a href="#" target={'_blank'} className={'contact_link'}>{link_youtube}</a>
                        </li>

                        <li className={'profile_contacts__item'}>
                            <span className={'contact_item__title'}>My Facebook: </span>
                            <a href="#" target={'_blank'} className={'contact_link'}>{link_facebook}</a>
                        </li>

                        <li className={'profile_contacts__item'}>
                            <span className={'contact_item__title'}>My Instagram: </span>
                            <a href="#" target={'_blank'} className={'contact_link'}>{link_instagram}</a>
                        </li>

                        <li className={'profile_contacts__item'}>
                            <span className={'contact_item__title'}>My Twitter: </span>
                            <a href="#" target={'_blank'} className={'contact_link'}>{link_twitter}</a>
                        </li>

                        <li className={'profile_contacts__item'}>
                            <span className={'contact_item__title'}>My Website: </span>
                            <a href="#" target={'_blank'} className={'contact_link'}>{link_website}</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}