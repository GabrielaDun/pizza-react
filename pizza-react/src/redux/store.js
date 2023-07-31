import { createStore, combineReducers } from 'redux';
import tablesReducer from './tableRedux';


//selectors
export const getAllColumns = state => state.columns;


  const subreducers = {
    tables: tablesReducer
  }
  
  const reducer = combineReducers(subreducers);

  
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default store;