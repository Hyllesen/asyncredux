import {
  FETCH_PEOPLE_REQUEST,
  FETCH_PEOPLE_FAILURE,
  FETCH_PEOPLE_SUCCESS,
  RECEIVE_PEOPLE
} from "./types";

export const fetchRandomPeople = () => ({ type: FETCH_PEOPLE_REQUEST });

export const receiveRandomPeople = () => ({ type: RECEIVE_PEOPLE });
