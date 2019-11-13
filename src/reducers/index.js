import {
  LOAD_CREATURE,
  SEARCH_CREATURE,
  NEWEST_CREATURE,
  OLDEST_CREATURE,
  HIGHEST_CREATURE,
  LOWEST_CREATURE,
  LAND_CREATURE,
  WATER_CREATURE,
  SKY_CREATURE,
  MYTHICAL_CREATURE,
  NEWBORN_CREATURE,
  YOUNG_CREATURE,
  ADULT_CREATURE,
  ELDER_CREATURE,
  DECEASED_CREATURE,
  VIEW_CREATURE,
  CLEAR
} from "../actions";
import { USER_LOGIN } from "../actions";

const intialState = { creatures: [], users: {}, singleCreatures: [] };

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case LOAD_CREATURE:
      return Object.assign({}, state, { creatures: action.payload });
    case USER_LOGIN:
      return Object.assign({}, state, { users: action.payload });
    case NEWEST_CREATURE:
      return Object.assign({}, state, { creatures: action.payload });
    case OLDEST_CREATURE:
      return Object.assign({}, state, { creatures: action.payload });
    case HIGHEST_CREATURE:
      return Object.assign({}, state, { creatures: action.payload });
    case LOWEST_CREATURE:
      return Object.assign({}, state, { creatures: action.payload });
    case SEARCH_CREATURE:
      return Object.assign({}, state, { creatures: action.payload });
    case LAND_CREATURE:
      return Object.assign({}, state, { creatures: action.payload });
    case WATER_CREATURE:
      return Object.assign({}, state, { creatures: action.payload });
    case SKY_CREATURE:
      return Object.assign({}, state, { creatures: action.payload });
    case MYTHICAL_CREATURE:
      return Object.assign({}, state, { creatures: action.payload });
    case NEWBORN_CREATURE:
      return Object.assign({}, state, { creatures: action.payload });
    case YOUNG_CREATURE:
      return Object.assign({}, state, { creatures: action.payload });
    case ADULT_CREATURE:
      return Object.assign({}, state, { creatures: action.payload });
    case ELDER_CREATURE:
      return Object.assign({}, state, { creatures: action.payload });
    case DECEASED_CREATURE:
      return Object.assign({}, state, { creatures: action.payload });
    case VIEW_CREATURE:
      return Object.assign({}, state, { singleCreatures: action.payload });
    case CLEAR:
      return Object.assign({}, state, { singleCreatures: action.payload });
    default:
      return state;
  }
};

export default reducer;
