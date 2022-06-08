import { combineReducers } from 'redux';
import users from './user/reducers';

const rootReducer = combineReducers({
  users: users,
});

export default rootReducer;