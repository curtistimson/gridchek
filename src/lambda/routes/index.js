import checkinCreate from './checkinCreate';
import userCheckins from './userCheckins';

export default (router) => {
  checkinCreate(router);
  userCheckins(router);
}