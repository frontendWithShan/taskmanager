import { ADD_TASK, DELETE_TASK, TOGGLE_TASK_STATUS } from '../actions/taskActions';

const initialState = {
  tasks: [],
};


const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case DELETE_TASK:
      const updatedTasks = [...state.tasks];
      updatedTasks.splice(action.payload, 1); 
      return {
        ...state,
        tasks: updatedTasks,
      };
    case TOGGLE_TASK_STATUS:
      const updatedTaskList = state.tasks.map((task, index) => {
        if (index === action.payload) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
      return {
        ...state,
        tasks: updatedTaskList,
      };
    default:
      return state;
  }
};


export default taskReducer;
