

//selectors
export const getTableList= state => state.table;

//actions
const createActionName = actionName => `app/lists/${actionName}`;
const ADD_LIST = createActionName('ADD_LIST');

// action creators
export const addList = payload => ({ type: ADD_LIST, payload });

const listsReducer = (statePart = [], action) => {
    switch(action.type) {
      default:
        return statePart; 
    }
  }

 export default listsReducer; 