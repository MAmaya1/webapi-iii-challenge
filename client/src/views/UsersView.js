import React from 'react';

import {connect} from 'react-redux';

class UsersView extends React.Component {
    
    // componentDidMount() {

    // }

    render() {
        return (
            <div className="users-view-container">
                {this.props.users}
            </div>
        )
    }
}

const mapStateToProps = state => {
    users: state.users;
}

export default connect(mapStateToProps, {})(UsersView);