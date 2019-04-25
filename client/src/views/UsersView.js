import React from 'react';
import {connect} from 'react-redux';

import UsersList from '../components/UsersList';

import {getUsers} from '../actions';

import styled from 'styled-components';

// Styled Components

const Heading = styled.h1`
    text-align: center;
    margin: 0;
`

const UsersViewWrapper = styled.div`
    max-width: 700px;
    margin: auto;
    padding: 30px 50px;
    background: white;
`

// UsersView Component Constructor

class UsersView extends React.Component {
    
    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        return (
            <UsersViewWrapper>
                <Heading>Users</Heading>
                {this.props.loadingUsers && (
                    <p>Loading users...</p>
                )}
                {this.props.users && (
                    <UsersList users={this.props.users}/>
                )}
                {this.props.loadingUsersErr && (
                    <p>{this.props.loadingUsersErr}</p>
                )}
            </UsersViewWrapper>
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