import { FETCH_MESSAGES, CREATE_MESSAGE } from '../actions/actionTypes';

const initialState = [];

export default function messageReducer(state = initialState, action) {
   switch (action.type) {
    case CREATE_MESSAGE:
       return  [...state, action.payload.body];
    case FETCH_MESSAGES:
         return action.payload;
    default:
      return state;
  }
}