import {
  FETCH_PEOPLE_REQUEST,
  FETCH_PEOPLE_FAILURE,
  RECEIVE_PEOPLE
} from "./types";

export const requestRandomPeople = () => ({ type: FETCH_PEOPLE_REQUEST });

export const requestRandomPeopleFailure = error => {
  return {
    type: FETCH_PEOPLE_FAILURE,
    payload: error
  };
};

export const receiveRandomPeople = json => ({
  type: RECEIVE_PEOPLE,
  payload: json
});

export const fetchRandomPeople = () => {
  return dispatch => {
    dispatch(requestRandomPeople());
    return fetch("https://randomuser.me/api/?results=15")
      .then(
        response => response.json(),
        error => dispatch(requestRandomPeopleFailure(error))
      )
      .then(json => dispatch(receiveRandomPeople(json)));
  };
};

export const fetchRandomPeopleAsyncAwait = () => {
  return async dispatch => {
    dispatch(requestRandomPeople());
    try {
      const response = await fetch("https://randomuser.me/api/?results=15");
      const json = await response.json();
      dispatch(receiveRandomPeople(json));
    } catch (error) {
      dispatch(requestRandomPeopleFailure(error));
    }
  };
};
