
import { LOAD_CREATURE, SEARCH_CREATURE, NEWEST_CREATURE } from '../actions';
import { USER_LOGIN } from '../actions';

const intialState = { creatures: [], users: {} };

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case LOAD_CREATURE:
      return Object.assign({}, state, { creatures: action.payload });
    case USER_LOGIN:
      return Object.assign({}, state, { users: action.payload });
    case NEWEST_CREATURE:
      return Object.assign({}, state, { creatures: action.payload });
    case SEARCH_CREATURE:
      return Object.assign({}, state, { creatures: action.payload });
    default:
      return state;
  }
};

export default reducer;
