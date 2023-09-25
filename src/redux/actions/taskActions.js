
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const TOGGLE_TASK_STATUS = 'TOGGLE_TASK_STATUS';

export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: task,
  };
};



export const deleteTask = (taskIndex) => {
  return {
    type: DELETE_TASK,
    payload: taskIndex,
  };
}


export const toggleTaskStatus = (taskId) => {
  return {
    type: TOGGLE_TASK_STATUS,
    payload: taskId,
  };
};
