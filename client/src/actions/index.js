import * as API from '../api_config/api';

const setLoading = () => ({
  type: 'GET_LOGIN_DETAIL',
});

const setLoginData = (data) => ({
  type: 'LOGIN_SUCCESS',
  payload: data,
});

const setLoadingErr = (data) => ({
  type: 'LOGIN_ERROR',
  payload: data,
});

export const getLogin = (userObject) => async (dispatch) => {
  try {
    // set loading state
    dispatch(setLoading());
    // wait for response
    const response = await API.loginUser(userObject);
    if (response.status) {
      //set data in reducer
      dispatch(setLoginData(response.data));
      return true;
    }
  } catch (error) {
    alert('Error while loggin in', error);
    //set error message in reducer
    dispatch(setLoadingErr(error));
  }
};

// making api call,
// show the user api call
// wait for the api to execute
// based on the output - error/ success / update in the reducer.

// to make any api call - we will action to execute
