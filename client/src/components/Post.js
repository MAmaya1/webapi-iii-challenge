import React from 'react';

const Post = props => {
    return (
        <div className="post">
            <p>{props.text}</p>
        </div>
    )
}

export default Post;