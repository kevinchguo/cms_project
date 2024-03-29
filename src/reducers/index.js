import {
  LOAD_CREATURE,
  SEARCH_CREATURE,
  NEWEST_CREATURE,
  OLDEST_CREATURE,
  HIGHEST_CREATURE,
  LOWEST_CREATURE,
  VIEW_CREATURE,
  CLEAR,
  ADD_CREATURE,
  UPLOAD_IMAGE,
  ADD_IMAGE
} from "../actions";
import { USER_LOGIN } from "../actions";

const intialState = { creatures: [], users: {}, singleCreatures: [], imageURL: {} , images: []};

export let obj, img;

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case LOAD_CREATURE:
      console.log('asdfasfd', action.payload);
      return Object.assign({}, state, { creatures: action.payload });
    case USER_LOGIN:
      return Object.assign({}, state, { users: action.payload });
    case NEWEST_CREATURE:
      return Object.assign({}, state, { creatures: action.payload });
    case OLDEST_CREATURE:
        console.log("NEWEST", action.payload)
      return Object.assign({}, state, { creatures: action.payload });
    case HIGHEST_CREATURE:
      return Object.assign({}, state, { creatures: action.payload });
    case LOWEST_CREATURE:
      return Object.assign({}, state, { creatures: action.payload });
    case SEARCH_CREATURE:
      return Object.assign({}, state, { creatures: action.payload });
    case VIEW_CREATURE:
      return Object.assign({}, state, { singleCreatures: action.payload });
    case CLEAR:
      return Object.assign({}, state, { singleCreatures: action.payload });
    case UPLOAD_IMAGE:
      img = action.payload;
      return Object.assign({}, state, { imageURL: action.payload });
    case ADD_CREATURE:
      obj = action.payload;
      return Object.assign({}, state, {
        creatures: [...action.payload]     
      });
    case ADD_IMAGE:
      return Object.assign({}, state, {
        images: [...action.payload]
      });
    default:
      return state;
  }
};

export default reducer;
