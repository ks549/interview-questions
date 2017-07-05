import {combineReducers} from "redux";
import userReducer from "./users-reducers";
import ActiveUser from './ActiveUser';
import ActiveCompany from './ActiveCompany';

const allReducer = combineReducers({
	users: userReducer,
	activeUser: ActiveUser,
	activeCompany: ActiveCompany
});

export default allReducer;