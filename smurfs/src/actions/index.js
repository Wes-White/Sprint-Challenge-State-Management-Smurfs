import axios from "axios";

export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAILURE = "FETCH_SMURFS_FAILURE";

export const ADD_SMURFS_START = "ADD_SMURFS_START";
export const ADD_SMURFS_SUCCESS = "ADD_SMURFS_SUCCESS";
export const ADD_SMURFS_FAILURE = "ADD_SMURFS_FAILURE";

export const DELETE_SMURFS_START = "DELETE_SMURFS_START";
export const DELETE_SMURFS_SUCCESS = "DELETE_SMURFS_SUCCESS";
export const DELETE_SMURFS_FAILURE = "DELETE_SMURFS_FAILURE";

export const fetchSmurfs = () => {
  return dispatch => {
    dispatch({ type: FETCH_SMURFS_START });
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        console.log("API call", response.data);
        dispatch({ type: FETCH_SMURFS_SUCCESS, payload: response.data });
      })
      .catch(error => {
        console.log("Error", error);
        dispatch({ type: FETCH_SMURFS_FAILURE, payload: error });
      });
  };
};

export const addSmurf = data => {
  return dispatch => {
    dispatch({ type: ADD_SMURFS_START });
    axios
      .post("http://localhost:3333/smurfs", {
        name: data.name,
        age: Number(data.age),
        height: data.height
      })
      .then(response => {
        console.log("Post Response", response);
        dispatch({ type: ADD_SMURFS_SUCCESS });
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: ADD_SMURFS_FAILURE, payload: error });
      });
  };
};

export const deleteSmurf = data => {
  //const send = Number(data.id);
  //console.log('Number to send', send);

  return dispatch => {
    dispatch({ type: DELETE_SMURFS_START });
    axios
      .delete(`http://localhost:3333/smurfs/${Number(data.id)}`)
      .then(response => {
        console.log("Delete Response", response);
        dispatch({ type: DELETE_SMURFS_SUCCESS });
      })
      .catch(error => {
        console.log("Delete Error", error);
        dispatch({ type: DELETE_SMURFS_FAILURE, payload: error });
      });
  };
};
