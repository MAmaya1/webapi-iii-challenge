// Imports

import {
    GET_USERS_START,
    GET_USERS_SUCCESS,
    GET_USERS_FAILURE    
} from '../actions';

// Set Initial State

const initialState = {
    users: [],
    posts: [],
    loadingUsers: false,
    loadingUsersErr: null
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USERS_START:
            return {
                ...state,
                loadingUsers: true,
                loadingUsersErr: null
            }

        case GET_USERS_SUCCESS:
            return {
                ...state,
                loadingUsers: false,
                loadingUsersErr: null,
                users: action.payload
            }

        case GET_USERS_FAILURE:
            return {
                ...state,
                loadingUsers: false,
                loadingUsersErr: action.payload
            }
        default: 
            return state;
    }
}

export default reducer;