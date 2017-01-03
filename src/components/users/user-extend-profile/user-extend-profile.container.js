import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as usersActions from '../../../actions/users/users.actions';
import userService from '../../users/users.service';
import toastrService from '../../common/toastr/toastr.service';
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

            toastrService.show({ type: 'info', message: {
                    header: 'User was removed successfully'
                }
            });

            this.props.router.push('/');
        })
        .catch(error => {
            console.log(error);
        });
    }

    updateUserById = (user, callback) => {
        callback = callback || function() {};
        const userId = this.state.currentUser._id;

        userService.updateUserById(userId, user).then(user => {
            this.updateUser(user);

            this.setState({ currentUser: user });

            toastrService.show({ type: 'success', message: {
                    header: 'User updated successfully'
                }
            });

            callback();
        })
        .catch(error => {
            console.log(error);
        });
    }

    updateProperties = (key, propertyValue) => {
        let currentUser = this.state.currentUser;

        currentUser[key] = propertyValue;

        this.setState({ currentUser: currentUser});
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <UserProfileInfo 
                        profile={this.state.currentUser}
                        updateUser={this.updateUserById}
                        removeUser={this.removeUserById}
                        updateProperties={this.updateProperties}>
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
};

UserExtendProfile = connect(null, mapDispatchToProps)(UserExtendProfile);

export default UserExtendProfile;