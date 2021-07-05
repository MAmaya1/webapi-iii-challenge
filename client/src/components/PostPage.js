import React from 'react';

import Post from './Post';

const PostPage = props => {

    return (
        <div className="posts-wrapper">
            {props.posts.map(post => (
                <Post
                    key={post.id}
                    text={post.text}
                />
            ))}
        </div>
    )
}

export default PostPage;