import Axios from "axios";

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

const userDataTest = {
  email: "kevin@devleague.com",
  name: "Kevin",
  password: "kguo"
};

export const userLoginAsync = data => async dispatch => {
  const res = await Axios.post("/api/users/login", data);
  dispatch({
    type: USER_LOGIN,
    payload: res
  });
};
