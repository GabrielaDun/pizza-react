import { createStore, combineReducers } from 'redux';


//selectors
export const getAllColumns = state => state.columns;


  const subreducers = {
  }
  
  const reducer = combineReducers(subreducers);

  
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default store;