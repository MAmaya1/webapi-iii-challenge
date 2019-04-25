// Imports

import {
    GET_USERS_START,
    GET_USERS_SUCCESS,
    GET_USERS_FAILURE    
} from '../actions';

// Set Initial State

const initialState = {
    users: [],
    posts: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        default: 
            return state;
    }
}

export default reducer;