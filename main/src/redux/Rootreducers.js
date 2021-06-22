import { combineReducers } from "redux";
import CustomizerReducer from "./customizer/Reducer";

const RootReducers = combineReducers({
  CustomizerReducer,
});

export default RootReducers;
