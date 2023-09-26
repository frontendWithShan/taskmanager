import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../redux/actions/taskActions';

const TaskForm = ({ addTask, scrollToTaskList }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {

    e.preventDefault();
    if (title.trim() !== '' && description.trim() !== '') {
      addTask({ title, description, completed: false });
      setTitle('');
      setDescription('');

      scrollToTaskList();
    }
  };

  return (
    <div className="task-form">
      <div className='login-box'>
        <form onSubmit={handleSubmit}>
          <div class="user-box">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label>Title</label>
          </div>
          <div class="user-box">
            <input
              type='textArea'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <label>Task Description</label>
          </div>


          <button type="submit" style={{ background: "transparent" }}><a >Add Task </a></button>

        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  addTask,
};

export default connect(null, mapDispatchToProps)(TaskForm);
