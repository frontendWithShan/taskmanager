import { SET_FILTER } from '../actions/filterActions';

const initialState = {
  filter: 'pending',
};


const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.payload; 
    default:
      return state; 
  }
};



export default filterReducer;
