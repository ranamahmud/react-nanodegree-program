import { RECEIVE_TWEETS } from '../actions/users';

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_TWEETS:
            return {
                ...state,
                ...action.tweets
            }
        default:
            return state;
    }
}