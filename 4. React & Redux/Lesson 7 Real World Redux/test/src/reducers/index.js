import { combineReducers } from 'redux';
import authedUsers from './authedUsers';
import users from './users';
import tweets from './tweets';
import { loadingBarReducer } from 'react-redux-loading';
export default combineReducers({
    authedUsers, users, tweets,
    loadingBar: loadingBarReducer
})