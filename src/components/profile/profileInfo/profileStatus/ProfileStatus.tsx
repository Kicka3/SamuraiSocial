import React, {ChangeEvent} from 'react';

type ProfileStatusType = {
    profileStatus: string
    updateUserStatusTC: (status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusType> {

    state = {
        editMode: false,
        status: this.props.profileStatus
    }

    activateViewModeHandler = () => {
        this.setState({
            editeMode: false
        });
        this.state.editMode = false;

        this.props.updateUserStatusTC(this.state.status)
    }

    activeEditModeHandler = () => {
        this.setState({
            editeMode: true
        })
        this.state.editMode = true;
    }

    changeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }


    render() {

        return (this.state.editMode
                ? <input value={this.state.status}
                         onChange={this.changeStatusHandler}
                         onBlur={this.activateViewModeHandler}
                         autoFocus
                         maxLength={30}
                />
                : <span className="profileStatus"
                        onDoubleClick={this.activeEditModeHandler}
                >{this.props.profileStatus  || 'no status'}</span>
        );
    }
}

