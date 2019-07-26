import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from './reducers';

import Config from './config';

const middleware = Config.debug ? applyMiddleware(thunk, createLogger())
  : applyMiddleware(thunk);

export default createStore(reducers, middleware);
