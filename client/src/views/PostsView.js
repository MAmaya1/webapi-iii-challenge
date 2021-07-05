import React from 'react';
import {connect} from 'react-redux';

import {getUserPosts} from '../actions';

import PostPage from '../components/PostPage';

import styled from 'styled-components';

// Styled Components

const SubHeading = styled.h2`
    margin: 0;
`

const PostsViewWrapper = styled.div`
    max-width: 700px;
    margin: auto;
    padding: 30px 50px;
    background: white;
`

// PostsView Component Constructor

class PostsView extends React.Component {

    componentDidMount() {
        const postId = this.props.match.params.id;
        this.props.getUserPosts(postId);
    }

    render() {
        return (
            <PostsViewWrapper>
                <SubHeading>Posts</SubHeading>
                {this.props.loadingPosts && (
                    <p>Loading posts...</p>
                )}
                {this.props.posts && (
                    <PostPage posts={this.props.posts}/>
                )}
                {!this.props.posts.length && (
                    <p>This user does not have any posts.</p>
                )}
                {this.props.loadingPostsErr && (
                    <p>{this.props.loadingPostsErr}</p>
                )}
            </PostsViewWrapper>
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