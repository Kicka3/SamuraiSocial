import '../profileInfo.css';
import React, {ChangeEvent, useState} from 'react';
import { LoadingOutlined, CheckOutlined } from '@ant-design/icons';

type ProfileStatusWithHooksType = {
    profileStatus: string
    isUpdating: boolean
    updateUserStatusTC: (status: string) => void
}

export const ProfileStatusWithHooks: React.FC<ProfileStatusWithHooksType> = (props) => {
    const {
        profileStatus,
        updateUserStatusTC,
        isUpdating
    } = props;

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(profileStatus);
    const [showOkMessage, setShowOkMessage] = useState(false);

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
        updateUserStatusTC(status);
        setShowOkMessage(true);
        setTimeout(() => {
            setShowOkMessage(false);
        }, 2000);
    };

    return (<>
            {!editMode
                ? <div>
                    {isUpdating
                        ? <span><LoadingOutlined style={{color: "#7d2ae8"}}/></span>
                        : showOkMessage
                            ? <span className={"ok-message"}><CheckOutlined style={{color: "green"}} /></span>
                            : <span className={"profileStatus"}
                                    onDoubleClick={activeEditModeHandler}
                            >{props.profileStatus || 'no status'}</span>
                    }
                </div>
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
