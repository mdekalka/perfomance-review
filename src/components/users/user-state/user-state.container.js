import React, { Component } from 'react';
import classNames from 'classnames';

import usersConstants from '../users.constants';
import './user-state.container.css';

const statusMapping = usersConstants.STATUS_MAPPING;


class UserState extends Component {
    constructor(props) {
        super(props);

        this.updateState = props.updateState;
    }

    render() {
        return (
            <div className="user-state">
                {Object.keys(statusMapping).map(key => {
                    const stateClass = classNames({
                        'user-state-block': true,
                        'active': true
                    });
                    
                    return (
                        <div onClick={() => this.updateState()} className={stateClass}>
                            {statusMapping[key].title}
                            <span className={`user-status ${statusMapping[key].css}`}></span>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default UserState;