import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from "redux-thunk";


export default () => {
  return createStore(reducers, applyMiddleware(ReduxThunk));
};
