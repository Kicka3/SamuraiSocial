import React from 'react';

export const UsersPageTop = () => {
    return (
        <div className="usersMenu">
            <div className="usersTitle">Your dialogues:</div>
            <div className="usersMenuWrapper">
                <input className={"usersMenuInput"}
                       type="text"
                       placeholder={"Search for friends"}/>
            </div>
        </div>
    )
}


