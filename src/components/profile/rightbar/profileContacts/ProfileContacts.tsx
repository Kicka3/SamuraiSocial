import React from 'react';
import './profileContacts.css'
import {ContactsProfileType} from "../../../../redux/profile-reducer/profile-reducer";


type ProfileContactsPropsType = {
    profileContacts?: ContactsProfileType
}


export const ProfileContacts: React.FC<ProfileContactsPropsType> = ({profileContacts}) => {

    //Вставить иконки!!!
    const link_vk = profileContacts?.vk ? profileContacts?.vk : '✖';
    const link_github = profileContacts?.github ? profileContacts?.github : '✖';
    const link_mainLink = profileContacts?.mainLink ? profileContacts?.mainLink : '✖';
    const link_youtube = profileContacts?.youtube ? profileContacts?.youtube : '✖';
    const link_facebook = profileContacts?.facebook ? profileContacts?.facebook : '✖';
    const link_instagram = profileContacts?.instagram ? profileContacts?.instagram : '✖';
    const link_twitter = profileContacts?.twitter ? profileContacts?.twitter : '✖';
    const link_website = profileContacts?.website ? profileContacts?.website : '✖';


    //Попытка сделать итеррируемый OBJ
    // let prices = {
    //     banana: 1,
    //     orange: 2,
    //     meat: 4,
    // };
    // let doublePrices = Object.fromEntries(
    //     // преобразовать в массив, затем map, затем fromEntries обратно объект
    //     Object.entries(prices).map(([key, value]) => [key, value * 2])
    // );
    // alert(doublePrices.meat); // 8

    let contacts = {
        "facebook": "facebook.com",
            "website": null,
            "vk": "vk.com/dimych",
            "twitter": "https://twitter.com/@sdf",
            "instagram": "instagra.com/sds",
            "youtube": null,
            "github": "github.com",
            "mainLink": null
    }
    // console.log('---------------')
        // console.log(Object.entries(contacts).forEach(([key, value]) => (`${key}: ${value}`)))
    // console.log('---------------')
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