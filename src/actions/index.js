import Axios from "axios";

export const LOAD_CREATURE = "LOAD_CREATURE";
export const USER_LOGIN = "USER_LOGIN";
export const SEARCH_CREATURE = "SEARCH_CREATURE";
export const NEWEST_CREATURE = "NEWEST_CREATURE";
export const OLDEST_CREATURE = "OLDEST_CREATURE";
export const HIGHEST_CREATURE = "HIGHEST_CREATURE";
export const LOWEST_CREATURE = "LOWEST_CREATURE";
export const LAND_CREATURE = "LAND_CREATURE";
export const WATER_CREATURE = "WATER_CREATURE";
export const SKY_CREATURE = "SKY_CREATURE";
export const MYTHICAL_CREATURE = "MYTHICAL_CREATURE";
export const NEWBORN_CREATURE = "NEWBORN_CREATURE";
export const YOUNG_CREATURE = "YOUNG_CREATURE";
export const ADULT_CREATURE = "ADULT_CREATURE";
export const ELDER_CREATURE = "ELDER_CREATURE";
export const DECEASED_CREATURE = "DECEASED_CREATURE";
export const VIEW_CREATURE = "VIEW_CREATURE";
export const CLEAR = "CLEAR";
export const ADD_CREATURE = "ADD_CREATURE";

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
  const res = await Axios.post("/api/users/login", userDataTest);
  dispatch({
    type: USER_LOGIN,
    payload: res
  });
};

export const sortCreatureNewest = () => async dispatch => {
  await Axios.get("/api/creatures/newest")
    .then(creatures => {
      dispatch({
        type: OLDEST_CREATURE,
        payload: creatures.data
      });
    })
    .catch(err => {
      console.log(err.message);
    });
};

export const sortCreatureOldest = () => async dispatch => {
  await Axios.get("/api/creatures/oldest")
    .then(creatures => {
      dispatch({
        type: NEWEST_CREATURE,
        payload: creatures.data
      });
    })
    .catch(err => {
      console.log(err.message);
    });
};

export const sortCreatureHighest = () => async dispatch => {
  await Axios.get("/api/creatures/highest")
    .then(creatures => {
      dispatch({
        type: HIGHEST_CREATURE,
        payload: creatures.data
      });
    })
    .catch(err => {
      console.log(err.message);
    });
};

export const sortCreatureLowest = () => async dispatch => {
  await Axios.get("/api/creatures/lowest")
    .then(creatures => {
      dispatch({
        type: LOWEST_CREATURE,
        payload: creatures.data
      });
    })
    .catch(err => {
      console.log(err.message);
    });
};

export const searchCreatureFunction = data => async dispatch => {
  await Axios.post("/api/creatures/search", data)
    .then(creatures => {
      dispatch({
        type: SEARCH_CREATURE,
        payload: creatures.data
      });
    })
    .catch(err => {
      console.log(err.message);
    });
};

export const filterCreatureLand = () => async dispatch => {
  await Axios.get("/api/creatures/land")
    .then(creatures => {
      dispatch({
        type: LAND_CREATURE,
        payload: creatures.data
      });
    })
    .catch(err => {
      console.log(err.message);
    });
};

export const filterCreatureWater = () => async dispatch => {
  await Axios.get("/api/creatures/water")
    .then(creatures => {
      dispatch({
        type: WATER_CREATURE,
        payload: creatures.data
      });
    })
    .catch(err => {
      console.log(err.message);
    });
};

export const filterCreatureSky = () => async dispatch => {
  await Axios.get("/api/creatures/sky")
    .then(creatures => {
      dispatch({
        type: SKY_CREATURE,
        payload: creatures.data
      });
    })
    .catch(err => {
      console.log(err.message);
    });
};

export const filterCreatureMythical = () => async dispatch => {
  await Axios.get("/api/creatures/mythical")
    .then(creatures => {
      dispatch({
        type: MYTHICAL_CREATURE,
        payload: creatures.data
      });
    })
    .catch(err => {
      console.log(err.message);
    });
};

export const filterCreatureNewborn = () => async dispatch => {
  await Axios.get("/api/creatures/newborn")
    .then(creatures => {
      dispatch({
        type: NEWBORN_CREATURE,
        payload: creatures.data
      });
    })
    .catch(err => {
      console.log(err.message);
    });
};

export const filterCreatureYoung = () => async dispatch => {
  await Axios.get("/api/creatures/young")
    .then(creatures => {
      dispatch({
        type: YOUNG_CREATURE,
        payload: creatures.data
      });
    })
    .catch(err => {
      console.log(err.message);
    });
};

export const filterCreatureAdult = () => async dispatch => {
  await Axios.get("/api/creatures/adult")
    .then(creatures => {
      dispatch({
        type: ADULT_CREATURE,
        payload: creatures.data
      });
    })
    .catch(err => {
      console.log(err.message);
    });
};

export const filterCreatureElder = () => async dispatch => {
  await Axios.get("/api/creatures/elder")
    .then(creatures => {
      dispatch({
        type: ELDER_CREATURE,
        payload: creatures.data
      });
    })
    .catch(err => {
      console.log(err.message);
    });
};

export const filterCreatureDeceased = () => async dispatch => {
  await Axios.get("/api/creatures/deceased")
    .then(creatures => {
      dispatch({
        type: DECEASED_CREATURE,
        payload: creatures.data
      });
    })
    .catch(err => {
      console.log(err.message);
    });
};

export const viewCreature = id => async dispatch => {
  await Axios.get(`/api/creatures/${id}`)
    .then(creatures => {
      dispatch({
        type: VIEW_CREATURE,
        payload: creatures.data
      });
    })
    .catch(err => {
      console.log(err.message);
    });
};

export const Clear = () => dispatch => {
  dispatch({
    type: CLEAR,
    payload: ""
  });
};

export const AddCreature = data => async dispatch => {
  await Axios.post("/api/creatures", data)
    .then(creature => {
      dispatch({
        type: ADD_CREATURE,
        payload: creature.data
      });
    })
    .catch(err => {
      console.log(err.message);
    });
};
