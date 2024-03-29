import Axios from 'axios';

export const LOAD_CREATURE = "LOAD_CREATURE";
export const USER_LOGIN = "USER_LOGIN";
export const SEARCH_CREATURE = "SEARCH_CREATURE";
export const NEWEST_CREATURE = "NEWEST_CREATURE";
export const OLDEST_CREATURE = "OLDEST_CREATURE";
export const HIGHEST_CREATURE = "HIGHEST_CREATURE";
export const LOWEST_CREATURE = "LOWEST_CREATURE";
export const VIEW_CREATURE = "VIEW_CREATURE";
export const CLEAR = "CLEAR";
export const ADD_CREATURE = "ADD_CREATURE";
export const UPLOAD_IMAGE = "UPLOAD_IMAGE";
export const ADD_IMAGE = "ADD_IMAGE";
export const EDIT_CREATURE = "EDIT_CREATURE";

export const loadCreatureAsync = () => async dispatch => {
  await Axios.get("/api/creatures")
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
  email: 'kevin@devleague.com',
  name: 'Kevin',
  password: 'kguo'
};

export const userLoginAsync = data => async dispatch => {
  const res = await Axios.post('/api/users/login', userDataTest);
  dispatch({
    type: USER_LOGIN,
    payload: res
  });
};

export const sortCreatureNewest = () => async dispatch => {
  await Axios.get('/api/creatures/newest')
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
  await Axios.get('/api/creatures/oldest')
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
  await Axios.get('/api/creatures/highest')
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
  await Axios.get('/api/creatures/lowest')
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
  await Axios.post('/api/creatures/search', data)
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

export const viewCreature = id => async dispatch => {
  await Axios.get(`/api/creatures/${id}`)
    .then(creatures => {
      console.log('asdfasfasdfasfsfd',creatures.data[0].image_id);
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
    payload: ''
  });
};

export const AddCreature = data => async dispatch => {
  await Axios.post('/api/creatures', data)
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

export const EditCreature = data => async dispatch => {
  await Axios.put("/api/creatures", data)
    .then(creature => {
      dispatch({
        type: EDIT_CREATURE,
        payload: creature.data
      });
    })
    .catch(err => {
      console.log(err.message);
    });
};

export const UploadImage = data => async dispatch => {
  await Axios.post('/api/images/upload', data)
    .then(img => {
      dispatch({
        type: UPLOAD_IMAGE,
        payload: img
      });
    })
    .catch(err => {
      console.log(err.message);
    });
};

export const AddImage = data => async dispatch => {
  await Axios.post('/api/images/', data)
    .then(img => {
      dispatch({
        type: ADD_IMAGE,
        payload: img
      });
    })
    .catch(err => {
      console.log(err.message);
    });
};
