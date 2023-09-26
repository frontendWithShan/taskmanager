import React from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { useSelector } from 'react-redux';
import { useRef } from 'react';

const TaskManager = () => {
  const theme = useSelector((state) => state.theme.theme);
  console.log(theme);

  const containerStyle = {
    paddingBottom: '100px',
    paddingTop: '190px'
  };

  const fullWidthStyle = {
    width: '100%', 
  };
  const taskListRef = useRef(null);
  const scrollToTaskList = () => {
    if (taskListRef.current) {
      taskListRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div style={containerStyle}>
        <TaskForm scrollToTaskList={scrollToTaskList}/>
        <div ref={taskListRef} />
        <TaskList  />
    </div>
  );
};

export default TaskManager;
