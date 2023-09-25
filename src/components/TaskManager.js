import React from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { useSelector } from 'react-redux';

const TaskManager = () => {
  const theme = useSelector((state) => state.theme.theme);
  console.log(theme);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'center',
    height: '100vh', 
  };

  const fullWidthStyle = {
    width: '100%', 
  };

  return (
    <div style={containerStyle}>
      <div className={`task-manager ${theme}`} style={fullWidthStyle}>
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
};

export default TaskManager;
