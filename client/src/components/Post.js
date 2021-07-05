import React from 'react';

import styled from 'styled-components';

// Styled Components

const PostText = styled.p`
    background: #E8E8E8;
    padding: 10px 20px;
    border-radius: 10px;
`

// Post Component

const Post = props => {
    return (
        <div className="post">
            <PostText><i>{props.text}</i></PostText>
        </div>
    )
}

export default Post;