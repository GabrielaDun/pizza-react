import { API_URL } from "../config";

//selectors
export const getStatusList = state => state.status;

//actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_STATUS = createActionName('UPDATE_STATUS');


// action creators
export const updateStatus = payload => ({type: UPDATE_STATUS, payload});

export const fetchStatus = () => {
  return(dispatch) => {
    fetch(`${API_URL}/status`)
    .then(res => res.json())
    .then(status => dispatch(updateStatus(status)));
  }
};


const tablesStatusReducer = (statePart = [], action) => {
    switch(action.type) {
      case UPDATE_STATUS:
        return [...action.payload]
      default:
        return statePart; 
    }
  }

 export default tablesStatusReducer; 