import {
  GET_SMURF_START,
  GET_SMURF_SUCCESS,
  GET_SMURF_FAILURE
} from "../actions/action";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURF_START: {
      return {
        ...state,
        fetchingSmurfs: true
      };
    }
    case GET_SMURF_SUCCESS: {
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload
      };
    }
    case GET_SMURF_FAILURE: {
      return {
        ...state,
        fetchingSmurfs: false,
        error: true
      };
    }

    default:
      return state;
  }
};

export default reducer;
