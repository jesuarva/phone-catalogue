import { FETCHING_ITEMS, FETCHED_ITEMS, ERROR } from '../actions';

const initialState = {
  data: [],
  user: {},
  fetching_Items: false,
  fetched_Item: false,
  error: null,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_ITEMS:
      return {
        ...state,
        fetching_Items: true,
        fetched_Item: false,
        error: null,
      };
    case FETCHED_ITEMS:
      // console.log(action.fetched);
      return {
        ...state,
        fetching_Items: false,
        fetched_Item: true,
        data: action.data,
      };
    case ERROR:
      return {
        ...state,
        error: action.message,
        fetching_Items: false,
        adding_Item: false,
        updating_Item: false,
        deleting_Item: false,
      };
    default:
      return state;
  }
};

export default mainReducer;
