import axios from 'axios';

export const FETCHING_ITEMS = 'FETCHING_ITEMS';
export const FETCHED_ITEMS = 'FETCHED_ITEM';
export const ERROR = 'ERROR';

const URL = process.env.REACT_APP_API_CATALOGUE || '/phones';

const errorAction = (error) => {
  return {
    type: ERROR,
    message: error.message,
  };
};

export const fetchingItems = () => {
  const fetch = axios.get(URL);
  return (dispatch) => {
    dispatch({
      type: FETCHING_ITEMS,
    });
    fetch
      .then((response) => {
        console.log('response.data', response.data);
        dispatch({
          type: FETCHED_ITEMS,
          data: response.data,
        });
      })
      .catch((e) => {
        console.log('error', e);
        dispatch(errorAction(e));
      });
  };
};
