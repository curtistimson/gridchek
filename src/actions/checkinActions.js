import axios from 'axios';
import ReactGA from 'react-ga';
import config from '../config';

const AUTH_ACCESS_TOKEN = 'auth_access_token';

export function createCheckIn(plusCode) {
  return (dispatch) => {
    dispatch({ type: 'CHECKIN_CREATE_PENDING', payload: { plusCode } });
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem(AUTH_ACCESS_TOKEN)}`;
    axios.post(`${config.serviceUri}/.netlify/functions/server/checkinCreate`, {
      code: plusCode,
    }).then(res => {
      dispatch({ type: 'CHECKIN_CREATE_FULFILLED', payload: res.data });
      ReactGA.event({
        category: 'Check In',
        action: 'Add',
        label: plusCode,
      });
    }).catch(err => {
      dispatch({ type: 'CHECKIN_CREATE_REJECTED', payload: err });
      ReactGA.event({
        category: 'Error',
        action: 'Check In Add',
        label: plusCode,
      });
    });
  };
}