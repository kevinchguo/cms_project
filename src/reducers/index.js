import { LOAD_CREATURE } from '../actions';
// const initialState = { creatures: [] };
const reducer = (state = [], action) => {
    switch (action.type) {
        case LOAD_CREATURE:
            console.log('payload', action.payload);
            return action.payload;
        default:
            return state;
    }
}

export default reducer;