import React from 'react';

import {connect} from 'react-redux';

import {getUsers} from '../actions';

class UsersView extends React.Component {
    
    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        return (
            <div className="users-view-container">
                <h1>Users</h1>
                {this.props.loadingUsers && (
                    <p>Loading users...</p>
                )}
                {this.props.users && (
                    <h2>{this.props.users.map(user => (
                        <p>{user.name}</p>
                    ))}</h2>
                )}
                {this.props.loadingUsersErr && (
                    <p>{this.props.loadingUsersErr}</p>
                )}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users,
        loadingUsers: state.loadingUsers,
        loadingUsersErr: state.loadingUsersErr
    }
}

export default connect(mapStateToProps, {getUsers})(UsersView);