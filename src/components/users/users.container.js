import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';


import userService from './users.service';
import toastrService from '../common/toastr/toastr.service';
import * as usersActions from '../../actions/users/users.actions';
import UserProfile from './user-profile/user-profile.container';
import CreateUserProfile from './create-user-profile/create-user-profile.container';
import LoadUsers from './load-users/load-users.container';

class Users extends Component {
    constructor(props) {
        super(props);

        this.loadUsers = props.usersAction.loadUsers;
        this.loadUsersSuccess = props.usersAction.loadUsersSuccess;
        this.loadUsersFailed = props.usersAction.loadUsersFailed;
        this.addNewUser = props.usersAction.addNewUser;
        this.removeUser = props.usersAction.removeUser;
        this.updateUser = props.usersAction.updateUser;
    }

    componentDidMount() {
        this.getAllUsers();
    }

    
    getAllUsers() {
        this.loadUsers();

        userService.getAllUsers().then(users => {
            this.loadUsersSuccess(users);
        })
        .catch(error => {
            console.log(error);
        });
    }

    defineUsers = () => {
        const users = userService.getDefinedUsers();

        userService.addMultipleUsers(users).then(users => {
            this.addNewUser(users);

            toastrService.show({ type: 'success', message: {
                    header: 'Users were successfully added'
                }
            });
        })
        .catch(error => {
            console.log(error);
        });
    }

    addUser = (user) => {
        _.assign(user, { status: 'not_active' });

        this.loadUsers();
        userService.addNewUser(user).then(user => {
            if (user.errors) {
                toastrService.show({ type: 'error', message: {
                        header: user.name,
                        body: user.message
                    }
                });

                return;
            }

            this.addNewUser([user]);

            toastrService.show({ type: 'success', message: {
                    header: 'User added successfully'
                }
            });
        })
        .catch(error => {
            console.log(error);
            this.loadUsersFailed(error);

            toastrService.show({ type: 'error', message: {
                    header: 'User was not added'
                }
            });
        });
    }

    renderUsers(users) {
        if (users && users.length) {
            return users.map(user => {
                return <UserProfile key={user._id} col={4} profile={user}></UserProfile>
            });
        } else {
            return null;
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="tool-panel">
                            <CreateUserProfile 
                                onUserAdd={this.addUser}>
                            </CreateUserProfile>
                            <LoadUsers defineUsers={this.defineUsers}></LoadUsers>
                        </div>
                        {this.renderUsers(this.props.users)}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersState.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        usersAction: bindActionCreators(usersActions, dispatch)
    }
}

Users = connect(mapStateToProps, mapDispatchToProps)(Users);

export default Users;