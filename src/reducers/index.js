import { LOAD_CREATURE } from '../actions';
// const initialState = { creatures: [] };
const reducer = (state = [], action) => {
    switch (action.type) {
        case LOAD_CREATURE:
            return action.payload;
        default:
            return state;
    }
}

export default reducer;