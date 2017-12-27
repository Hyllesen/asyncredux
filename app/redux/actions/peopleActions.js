import {
  FETCH_PEOPLE_REQUEST,
  FETCH_PEOPLE_FAILURE,
  FETCH_PEOPLE_SUCCESS
} from "./types";

export const requestRandomPeople = () => ({ type: FETCH_PEOPLE_REQUEST });

export const requestRandomPeopleFailure = error => {
  return {
    type: FETCH_PEOPLE_FAILURE,
    payload: error
  };
};

export const receiveRandomPeople = json => ({
  type: FETCH_PEOPLE_SUCCESS,
  payload: json
});

export const fetchRandomPeople = () => {
  return async dispatch => {
    dispatch(requestRandomPeople());
    try {
      const response = await fetch("https://randomuser.me/api/?results=15");
      const json = await response.json();
      console.log(response);
      console.log(json);
      dispatch(receiveRandomPeople(json));
    } catch (error) {
      dispatch(requestRandomPeopleFailure(error));
      console.log(error);
    }
  };
};
