import { combineReducers } from 'redux';
import authedUsers from './authedUsers';
import users from './users';
import tweets from './tweets';

export default combineReducers({
    authedUsers, users, tweets
})