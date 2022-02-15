import { combineReducers } from "redux";

import directoryReducer from "./directory/directoryReducer";

const reducers = combineReducers({
  directory: directoryReducer,
});
export default reducers;
