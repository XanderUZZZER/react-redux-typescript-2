import { SET_FILTER } from '../actions/actionTypes'

import { VISIBILITY_FILTERS } from '../constants';

const initialState = VISIBILITY_FILTERS.ALL;

export const visibilityFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER: {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
};
