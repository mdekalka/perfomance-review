import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

import usersConstants from '../users.constants';
import './user-profile.container.css';
import '../user-state/user-state.container.css';

const statusMapping = usersConstants.STATUS_MAPPING;

class UserProfile extends Component {
    renderStatus(status) {
        if (status) {
            if (statusMapping[status]) {
                const state = statusMapping[status];
                const stateClass = classNames({
                    'user-status': true,
                    [state.css]: true
                });

                return (
                    <div className="user-info">
                        {state.title}
                        <span className={stateClass}></span>
                    </div>
                )
            }
        } else {
            return null;
        }
    }

    render() {
        const { profile, col } = this.props;

        return (
            <Link to={`/user/${profile._id}`}>
                <div className={`col-md-${col} user-profile-container`}>
                    <article className="user-profile">
                        <div className="user-image-profile">
                            <img className="user-image" src={profile.image} alt={profile.title} />
                        </div>
                        <div className="user-info-profile">
                            <h5 className="user-name">{profile.name}</h5>
                            <div className="user-info">{profile.title}</div>
                            <div className="user-info">{profile.department}, {profile.room}</div>
                            <a className="user-mail" href="mailto:">{profile.mail}</a>
                            {this.renderStatus(profile.status)}
                        </div>
                    </article>
                </div>
            </Link>
        );
    }
}

export default UserProfile;