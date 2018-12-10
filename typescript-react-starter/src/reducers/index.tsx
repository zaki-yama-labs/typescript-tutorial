import { EnthusiasmAction } from '../actions';
import { StoreState } from '../types';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants';

export function enthusiasm(state: StoreState, action: EnthusiasmAction): StoreState {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return { ...state, enthusiamLevel: state.enthusiamLevel + 1 };
    case DECREMENT_ENTHUSIASM:
      return { ...state, enthusiamLevel: state.enthusiamLevel - 1 };
  }
  return state;
}