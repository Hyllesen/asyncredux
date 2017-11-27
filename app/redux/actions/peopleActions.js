import {
  FETCH_PEOPLE_REQUEST,
  FETCH_PEOPLE_FAILURE,
  FETCH_PEOPLE_SUCCESS,
  RECEIVE_PEOPLE
} from "./types";

export const requestRandomPeople = () => ({ type: FETCH_PEOPLE_REQUEST });

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
        error => console.log("An error occured", error)
      )
      .then(json => dispatch(receiveRandomPeople(json)));
  };
};
