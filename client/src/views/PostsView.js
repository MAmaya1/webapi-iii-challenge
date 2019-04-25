import React from 'react';
import {connect} from 'react-redux';

import {getUserPosts} from '../actions';

import PostPage from '../components/PostPage';

class PostsView extends React.Component {

    componentDidMount() {
        const postId = this.props.match.params.id;
        this.props.getUserPosts(postId);
    }

    render() {
        return (
            <div className="posts-view-container">
                <h3>Posts</h3>
                <PostPage posts={this.props.posts}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts,
        loadingPosts: state.loadingPosts,
        loadingPostsErr: state.loadingPostsErr
    }
}

export default connect(mapStateToProps, {getUserPosts})(PostsView);