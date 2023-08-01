//selectors
export const getTableList = state => state.tables;
export const getTableById = ({tables}, tablesId) => tables.find(table => table.id ===tablesId);
export const getStatusList = state => state.status;

//actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES');
const UPDATE_STATUS = createActionName('UPDATE_STATUS');


// action creators
export const updateTables = payload => ({ type: UPDATE_TABLES, payload });
export const updateStatus = payload => ({type: UPDATE_STATUS, payload});

export const fetchTable = () => {
  return(dispatch) => {
  fetch('http://localhost:3131/api/tables')
    .then(res => res.json())
    .then(tables => dispatch(updateTables(tables)))
  }
};

export const fetchStatus = () => {
  return(dispatch) => {
  fetch('http://localhost:3131/api/status')
    .then(res => res.json())
    .then(status => dispatch(updateStatus(status)));
  }
};

const tablesReducer = (statePart = [], action) => {
    switch(action.type) {
      case UPDATE_TABLES:
        return [...action.payload]
      case UPDATE_STATUS:
        return [...action.payload]
      default:
        return statePart; 
    }
  }

 export default tablesReducer; 