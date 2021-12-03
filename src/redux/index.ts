import { combineReducers } from 'redux';
import global, { GlobalState } from './global';

export interface ReducerState {
  global: GlobalState;
}

export default combineReducers({
  global,
});
