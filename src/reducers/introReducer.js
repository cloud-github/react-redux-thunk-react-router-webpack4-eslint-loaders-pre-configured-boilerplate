const initialState = {
  userData: {},
  isFetching: false,
  isError: false
};

const introReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_INTRO_POST":
      return Object.assign({}, state, {
        isFetching: true,
        userData: {},
        isError: false
      });
    case "FETCHED_INTRO_POST":
      return Object.assign({}, state, {
        userData: action.data,
        isFetching: false,
        isError: false
      });
    case "RECEIVE_INTRO_POST_ERROR":
      return Object.assign({}, state, {
        userData: action.data,
        isFetching: false,
        isError: true
      });
    default:
      return state;
  }
};

export default introReducer;
