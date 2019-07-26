import axios from 'axios';
import ReactGA from 'react-ga';
import config from '../config';

const AUTH_ACCESS_TOKEN = 'auth_access_token';

export function createCheckIn(plusCode) {
  return (dispatch) => {
    dispatch({ type: 'CHECKIN_CREATE_PENDING', payload: { plusCode } });
    axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(AUTH_ACCESS_TOKEN)}`;
    axios.post(`${config.serviceUri}/checkinCreate`, {
      code: plusCode,
    }).then((res) => {
      dispatch({ type: 'CHECKIN_CREATE_FULFILLED', payload: res.data });
      ReactGA.event({
        category: 'Check In',
        action: 'Add',
        label: plusCode,
      });
    }).catch((err) => {
      dispatch({ type: 'CHECKIN_CREATE_REJECTED', payload: err });
      ReactGA.event({
        category: 'Error',
        action: 'Check In Add',
        label: plusCode,
      });
    });
  };
}

export function fetchUserCheckins() {
  return (dispatch) => {
    dispatch({ type: 'FETCH_USER_CHECKINS_PENDING' });
    axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(AUTH_ACCESS_TOKEN)}`;
    axios.get(`${config.serviceUri}/user/checkins`)
      .then((res) => {
        dispatch({ type: 'FETCH_USER_CHECKINS_FULFILLED', payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_USER_CHECKINS_REJECTED', payload: error });
      });
  };
}
