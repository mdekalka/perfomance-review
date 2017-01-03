import React from 'react';
import { Link } from 'react-router';

const BackButton = (props) => {
    return (
        <div><Link className="back button" to={props.to}>{props.children}</Link></div>
    )
}

export default BackButton;