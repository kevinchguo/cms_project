export const LOAD_CREATURE = "LOAD_CREATURE";
export const USER_LOGIN = "USER_LOGIN";

export const loadCreatureAsync = () => async dispatch => {
  await fetch("/api/creatures")
    .then(response => {
      return response.json();
    })
    .then(creatures => {
      dispatch({
        type: LOAD_CREATURE,
        payload: creatures
      });
    })
    .catch(err => {
      console.log(err.message);
    });
};

// export const userLoginAsync = () => async dispatch => {
//     await fetch("/api/")
// }
