import React from 'react';

import styled from 'styled-components';

// Styled Component

const UserCard = styled.div`
    background: lightblue;
    margin: 20px auto;
    padding: 10px;
    height: 80px;
    width: 200px;
`

const User = props => {
    return (
        <UserCard>
            <h3>{props.name}</h3>
        </UserCard>
    )
}

export default User;