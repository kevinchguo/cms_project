export const LOAD_CREATURE = 'LOAD_CREATURE';

export function loadCreatures(payload) {
    return {
        type: LOAD_CREATURE,
        payload
    }
}

export const loadCreatureAsync = () => async dispatch => {
    await fetch('/api')
    .then((response) => {
        console.log('response', response.body);
        return response.json();
    })
    .then((creatures) => {
        dispatch({
            type: LOAD_CREATURE,
            payload: creatures
        });
    })
    .catch(err => {
        console.log(err.message, 'lol');
    })
}