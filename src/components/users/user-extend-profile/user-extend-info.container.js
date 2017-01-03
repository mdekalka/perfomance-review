import React, { Component } from 'react';

import './user-extend-profile.container.css';
import usersConstants from '../users.constants';
import UserState from '../user-state/user-state.container';

const statusMapping = usersConstants.STATUS_MAPPING;

class UserProfileInfo extends Component {
    constructor(props) {
        super(props);

        this.updateProperties = this.props.updateProperties;
        this.updateUser = this.props.updateUser;

        this.state = {
            isEditMode: false
        };
    }

    onEditToggle = () => {
        const editState = this.state.isEditMode;
        this.setState({ isEditMode: !editState });
    }

    updateState = (activeState) => {
        this.updateProperties('status', activeState);
    }

    onUpdateUser = (callback) => {
        callback = callback || function() {};

        const userModel = {
            name: this.name.value,
            title: this.title.value,
            department: this.department.value,
            room: this.room.value,
            status: this.props.profile.status,
            mail: this.mail.value,
        };

        this.updateUser(userModel, () => {
            // Request for updating is over - update the state
            this.setState({ isEditMode: false });
        });
    }

    render() {
        const { isEditMode } = this.state;
        const { profile, editUser, removeUser } = this.props;

        return (
            <div className="user-extend">
                <img className="user-image" src={profile.image} alt={profile.name} />
                <div className="user-text form-group">Name:
                    { !isEditMode && <span> {profile.name}</span> }
                    { isEditMode && <input className="form-item" type="text" defaultValue={profile.name} ref={(name) => this.name = name} /> }
                    </div>
                <div className="user-text form-group">Title:
                    { !isEditMode && <span> {profile.title}</span> }
                    { isEditMode && <input className="form-item" type="text" defaultValue={profile.title} ref={(title) => this.title = title} /> }
                 </div>
                <div className="user-text form-group">Department
                    { !isEditMode && <span> {profile.department}</span> }
                    { isEditMode && <input className="form-item" type="text" defaultValue={profile.department} ref={(department) => this.department = department} /> }
                </div>
                <div className="user-text form-group">Room:
                    { !isEditMode && <span> {profile.room}</span> }
                    { isEditMode && <input className="form-item" type="text" defaultValue={profile.room} ref={(room) => this.room = room} /> }
                </div>
                <div className="user-text form-group">Status
                    { !isEditMode && <span> {profile.status}</span> }
                    <UserState currentState={profile.status} states={statusMapping} updateState={this.updateState} ></UserState>
                </div>
                <div className="user-text form-group">E-mail:
                    { !isEditMode && <span> {profile.mail}</span> }
                    { isEditMode && <input className="form-item" type="text" defaultValue={profile.mail} ref={(mail) => this.mail = mail} /> }
                </div>
                <div className="button-groups">
                    <button onClick={() => this.onEditToggle()} className="button">Edit user</button>
                    { isEditMode && <button onClick={() => this.onUpdateUser()} className="button button-apply">Update user</button> }
                    <button onClick={() => removeUser(profile._id)} className="button button-alert">Remove user</button>
                </div>
            </div>
        )
    }
}

export default UserProfileInfo;