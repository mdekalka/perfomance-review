import React, { Component } from 'react';

class LoadUsers extends Component {
    render() {
        const { defineUsers } = this.props;

        return (
            <div><button onClick={() => defineUsers()} className="button">Create users</button></div>
        )
    }
}

export default LoadUsers;