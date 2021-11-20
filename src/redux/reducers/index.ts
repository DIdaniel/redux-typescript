import { combineReducers } from "redux";
import repositorioriesReudcer from "./repositoriesReducer";

const reducers = combineReducers({
  reducerAll: repositorioriesReudcer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
