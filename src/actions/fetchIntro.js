import { store } from "../store";

export const fetch_intro_post = () => {
  return {
    type: "FETCH_INTRO_POST"
  };
};

export const receive_intro_post = post => {
  return {
    type: "FETCHED_INTRO_POST",
    data: post
  };
};

export const receive_intro_post_error = post => {
  return {
    type: "RECEIVE_INTRO_POST_ERROR",
    data: post
  };
};

export const getIntroData = () => {
  store.dispatch(fetch_intro_post());
  return function(dispatch /*getState*/) {
    return fetch(`http://www.maheshjoshi.me/madmin/wp-json/wp/v2/intro_post/`)
      .then(data => data.json())
      .then(data => {
        console.log("ACTION DATA: ", data);
        if (data.data && data.data.status >= 404) {
          dispatch(receive_intro_post_error(data.message));
        } else {
          dispatch(receive_intro_post(data));
        }
      });
    //.catch(err => dispatch(receive_intro_post_error()));
  };
};
