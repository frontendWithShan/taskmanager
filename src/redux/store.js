import { createStore, combineReducers } from 'redux';
import themeReducer from './reducers/themeReducer';
import taskReducer from './reducers/taskReducer';
import filterReducer from './reducers/filterReducer';

const rootReducer = combineReducers({
  theme: themeReducer,
  tasks: taskReducer, // Use 'tasks' key for taskReducer
  filter: filterReducer, // Use 'filter' key for filterReducer
 
});

const store = createStore(rootReducer);

export default store;
