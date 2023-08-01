import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import tablesReducer from './tableRedux';
import inititalState from './initialState';
import tablesStatusReducer from './tableStatusReducer';


const subreducers = {
    tables: tablesReducer,
    status: tablesStatusReducer
}
  
const reducer = combineReducers(subreducers);

  
const store = createStore(
  reducer,
  inititalState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);


export default store;