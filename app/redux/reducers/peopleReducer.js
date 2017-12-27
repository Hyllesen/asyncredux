import {
  FETCH_PEOPLE_REQUEST,
  FETCH_PEOPLE_FAILURE,
  FETCH_PEOPLE_SUCCESS
} from "../actions/types";

const initialState = {
  isFetching: false,
  items: [],
  errorMessage: ""
};

const randomPeople = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PEOPLE_REQUEST:
      return { ...state, isFetching: true };
    case FETCH_PEOPLE_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: "Error fetching random people"
      };
    case FETCH_PEOPLE_SUCCESS:
      return { ...state, isFetching: false, items: action.payload.results };
    default:
      return state;
  }
};

export default randomPeople;
