import React from 'react';

const User = props => {
    return (
        <div className="user-card">
            <h3>{props.name}</h3>
        </div>
    )
}

export default User;