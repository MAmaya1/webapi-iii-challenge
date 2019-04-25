import React from 'react';

import User from './User';

const UsersList = props => {
    return (
        <div className="users-list">
            {props.users.map(user => (
                <User
                    key={user.id}
                    name={user.name}
                />
            ))}
        </div>
    )
}

export default UsersList;