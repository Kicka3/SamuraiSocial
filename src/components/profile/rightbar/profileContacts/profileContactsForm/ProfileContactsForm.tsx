import {ProfileResponseType} from "../../../../../redux/profile-reducer/profile-reducer";
import React from "react";

type ProfileContactsFormType = {
    profile: ProfileResponseType | null
}
export const ProfileContactsForm: React.FC<ProfileContactsFormType> = ({profile}) => {
    return (
        <div>
            FORMA
        </div>
    );
};