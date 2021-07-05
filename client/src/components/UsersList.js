import React from 'react';
import {Link} from 'react-router-dom';

import User from './User';

const UsersList = props => {
    return (
        <div className="users-list">
            {props.users.map(user => (
                <Link to={`/${user.id}/posts`} key={user.id}>
                    <User
                        name={user.name}
                    />
                </Link>
            ))}
        </div>
    )
}

export default UsersList;