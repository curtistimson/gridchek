import { combineReducers } from 'redux';

import auth from './authReducer';
import userCheckins from './userCheckinsReducer';

export default combineReducers({
  auth,
  userCheckins,
});