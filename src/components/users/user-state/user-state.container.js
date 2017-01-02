import React, { Component } from 'react';
import classNames from 'classnames';

import './user-state.container.css';

class UserState extends Component {
    constructor(props) {
        super(props);

        this.updateState = props.updateState;
    }

    render() {
        const { states } = this.props;
        return (
            <div className="user-state">
                {Object.keys(states).map(key => {
                    const stateClass = classNames({
                        'user-state-block': true,
                        'active': true
                    });

                    return (
                        <div key={states[key].id} onClick={() => this.updateState()} className={stateClass}>
                            {states[key].title}
                            <span className={`user-status ${states[key].css}`}></span>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default UserState;