import { createReducer, on } from '@ngrx/store';
import { toggleCollapse } from './navigation.actions';

export const initialState = false;
 
const _navigationReducer = createReducer(
  initialState,
  on(toggleCollapse, (state: boolean) => !state),
);
 
export const navigationReducer = (state: boolean, action: any): any => {
  return _navigationReducer(state, action);
};
