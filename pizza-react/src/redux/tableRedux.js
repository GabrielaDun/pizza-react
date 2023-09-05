import { API_URL } from "../config";

//selectors
export const getTableList = state => state.tables;
export const getTableById = ({tables}, tablesId) => tables.find(table => table.id ===tablesId);

//actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES');
const EDIT_TABLES = createActionName('EDIT_TABLES');


// action creators
export const updateTables = payload => ({ type: UPDATE_TABLES, payload });
export const editTables = payload => ({ type: EDIT_TABLES, payload})

export const fetchTable = () => {
  return(dispatch) => {
  fetch(`${API_URL}/tables`)
    .then(res => res.json())
    .then(tables => dispatch(updateTables(tables)))
  };
}

export const editTableRequest = (newTable) => {
  return (dispatch) => {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTable)
    }
    fetch( `${API_URL}/tables/${newTable.id}`, options)
      .then(() => dispatch(editTables(newTable)))
  }
}


const tablesReducer = (statePart = [], action) => {
    switch(action.type) {
      case UPDATE_TABLES:
        return [...action.payload]
      case EDIT_TABLES:
        return statePart.map((table) =>
        (table.id === action.payload.id ? { ...table, ...action.payload } : table));
      default:
        return statePart; 
    }
  }

 export default tablesReducer; 