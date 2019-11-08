import { LOAD_CREATURE } from "../actions";
import { USER_LOGIN } from "../actions";
import { NEWEST_CREATURE } from "../actions";

const initialState = { creatures: [], users: {} };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CREATURE:
      return Object.assign({}, state, { creatures: action.payload });
    case USER_LOGIN:
      return Object.assign({}, state, { users: action.payload });
    case NEWEST_CREATURE:
      return Object.assign({}, state, { creatures: action.payload });
    default:
      return state;
  }
};

export default reducer;
