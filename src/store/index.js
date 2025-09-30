import { createStore } from "../libs/redux";
import taskReducer from "./reducers/taskReducer";

const store = createStore(taskReducer, {
  tasks: [],
  loading: false,
  error: null,
});

export default store;
