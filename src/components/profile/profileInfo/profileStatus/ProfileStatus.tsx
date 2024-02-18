import React, {ChangeEvent} from 'react';

type ProfileStatusType = {
    profileStatus: string
}

export class ProfileStatus extends React.Component<ProfileStatusType> {

    state = {
        editMode: false
    }

    activateViewModeHandler = () => {
        this.setState({
            editeMode: false
        })
        this.state.editMode = false
    }
    activeEditModeHandler() {
        this.setState({
            editeMode: true
        })
        this.state.editMode = true;
    }

    // changeStatusHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     (e.currentTarget.value)
    // }

    render() {

        return (this.state.editMode
                ? <input value={this.props.profileStatus}
                    // onChange={this.changeStatusHandler}
                    onBlur={this.activateViewModeHandler}
                         autoFocus
                         maxLength={30}
                />
                : <span className="profileStatus"
                        onDoubleClick={this.activeEditModeHandler.bind(this)}
                >{this.props.profileStatus}</span>
        );
    }
}

