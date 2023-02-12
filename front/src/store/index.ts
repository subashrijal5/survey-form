
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import profileReducer from "./profile/reducer";
import { RootState } from "../domain/entity/rootState";
import collegesReducer from "./colleges/reducer";
import validationReducer from "./validation/reducer";
import alertReducer from "./alert/reducer";

const store = createStore(
  combineReducers<RootState>({
    profile: profileReducer,
    colleges: collegesReducer,
    validation: validationReducer,
    alert: alertReducer
  }),
  compose(
    applyMiddleware(thunk),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
