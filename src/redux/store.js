import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";

export default configureStore({
  reducer: {
    counter: counterReducer, //adding the reducer to store so that it becomes available to everycomponent
  },
});
