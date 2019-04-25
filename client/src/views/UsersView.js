import React from 'react';
import {connect} from 'react-redux';

import UsersList from '../components/UsersList';

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
                    <UsersList users={this.props.users}/>
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
        loadingUsersErr: state.loadingUsersErr,
        posts: state.posts,
        
    }
}

export default connect(mapStateToProps, {getUsers})(UsersView);