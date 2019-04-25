import axios from 'axios';

// Fetch Users Action Types

export const GET_USERS_START = 'GET_USERS_START';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE';

// Fetch Users Action Creator

export const getUsers = () => dispatch => {
    dispatch({ type: GET_USERS_START });
        axios.get('http://localhost:5000/api/users')
            .then(res => {
                dispatch({
                    type: GET_USERS_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: GET_USERS_FAILURE,
                    payload: err
                })
            })
}

// Get User Posts Action Types

export const GET_USER_POSTS_START = 'GET_USER_POSTS_START';
export const GET_USER_POSTS_SUCCESS = 'GET_USER_POSTS_SUCCESS';
export const GET_USER_POSTS_FAILURE = 'GET_USER_POSTS_FAILURE';

// Get User Posts Action Creator

export const getUserPosts = id => dispatch => {
    dispatch({ type: GET_USER_POSTS_START })
        axios.get(`http://localhost:5000/api/users/${id}/posts`)
            .then(res => {
                dispatch({
                    type: GET_USER_POSTS_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: GET_USER_POSTS_FAILURE,
                    payload: err
                })
            })
}