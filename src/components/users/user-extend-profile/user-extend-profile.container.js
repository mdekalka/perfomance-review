import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as usersActions from '../../../actions/users/users.actions';
import userService from '../../users/users.service';
import UserProfileInfo from './user-extend-info.container';

class UserExtendProfile extends Component {
    constructor(props) {
        super(props);

        this.loadUsers = props.usersAction.loadUsers;
        this.removeUser = props.usersAction.removeUser;
        this.updateUser = props.usersAction.updateUser;

        this.state = {
            currentUser: {}
        };
    }

    componentDidMount() {
        this.userId = this.props.params.id;

        this.getUserById(this.userId);
    }

    getUserById(userId) {
        this.loadUsers();

        userService.getUserById(this.userId).then(user => {
            this.setState({ currentUser: user });
        })
        .catch(error => {
            console.log(error);
        });
    }

    removeUserById = (userId) => {
        userService.removeUserById(userId).then(user => {
            this.removeUser(user.id);
            this.props.router.push('/');
        })
        .catch(error => {
            console.log(error);
        });
    }

    updateUserById = (user) => {
        userService.removeUserById(user._id, user).then(user => {
            this.updateUser(user);
        })
        .catch(error => {
            console.log(error);
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <UserProfileInfo 
                        profile={this.state.currentUser}
                        updateUser={this.updateUserById}
                        removeUser={this.removeUserById}>
                    </UserProfileInfo>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        usersAction: bindActionCreators(usersActions, dispatch)
    }
}

UserExtendProfile = connect(null, mapDispatchToProps)(UserExtendProfile);

export default UserExtendProfile;