import '../profileInfo.css';
import React, {ChangeEvent, useState} from 'react';


type ProfileStatusWithHooksType = {
    profileStatus: string
    updateUserStatusTC: (status: string) => void
}

export const ProfileStatusWithHooks: React.FC<ProfileStatusWithHooksType> = (props) => {
    const {
        profileStatus,
        updateUserStatusTC
    } = props;


    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(profileStatus);


    const activeEditModeHandler = () => {
        setEditMode(true);
    }

    const changeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newStatus = e.currentTarget.value;
        setStatus(newStatus);
    }

    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            activateViewModeHandler()
        }
    }
    const activateViewModeHandler = () => {
        setEditMode(false);
        updateUserStatusTC(status)
    }

    return (<>
            {!editMode
                ? <span className="profileStatus"
                        onDoubleClick={activeEditModeHandler}
                >{props.profileStatus || 'no status'}</span>

                //СТИЛИ ИНПУТА!!!!
                : <input className={'statusInput'}
                              value={status}
                              onChange={changeStatusHandler}
                              onBlur={activateViewModeHandler}
                              maxLength={40}
                              onKeyPress={onKeyPressHandler}
                              autoFocus
                />
            }

        </>
    );
}

