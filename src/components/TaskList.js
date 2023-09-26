import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { deleteTask, toggleTaskStatus } from '../redux/actions/taskActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrashAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import { setFilter } from '../redux/actions/filterActions';
import './TaskList.css';
const TaskList = ({ tasks, deleteTask, toggleTaskStatus, filter, setFilter }) => {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedTask, setEditedTask] = useState({ title: '', description: '', completed: false, });
  const [displayedTasks, setDisplayedTasks] = useState(tasks);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchVisible, setSearchVisible] = useState(false);

  useEffect(() => {
    let filteredTasks = tasks;

    if (filter === 'completed') {
      filteredTasks = tasks.filter((task) => task.completed);
    } else if (filter === 'pending') {
      filteredTasks = tasks.filter((task) => !task.completed);
    }

    if (searchTerm) {
      filteredTasks = filteredTasks.filter((task) =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setDisplayedTasks(filteredTasks);
  }, [tasks, filter, searchTerm]);

  const handleEditClick = (index) => {
    setEditingIndex(index);
    setEditedTask({
      title: tasks[index].title,
      description: tasks[index].description,
      completed: tasks[index].completed, 
    });
  };
  

  const handleSaveEdit = (index) => {
    tasks[index].title = editedTask.title;
    tasks[index].description = editedTask.description;
    tasks[index].completed = editedTask.completed;

    setEditingIndex(null);
  };


  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const tableContainerStyle = {
    maxWidth: '100%',
    overflowX: 'auto', 
  };

  const tableCellStyle = {
    width: '100%',
  };

  const thStyle = {
    textAlign: 'left',
    padding: '10px',
  };
  const thStyles = {
    textAlign: 'left',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
  };
  const tdStyle = {
    border: '1px solid #ccc',
    padding: '10px',
  };

  const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '5px 10px',
    border: 'none',
    cursor: 'pointer',
  };

  const iconStyle = {
    fontSize: '1.2rem',
    marginRight: '5px',
    cursor: 'pointer',
  };

  return (
    <div className="task-list">
      {tasks.length > 0 ? (
        <div style={tableContainerStyle}>
          <table style={tableCellStyle}>
            <thead>
              <tr>
                <th style={thStyles}>
                  Title
                  {isSearchVisible ? (
                    <div>
                      <FontAwesomeIcon icon={faSearch} style={iconStyle} onClick={toggleSearch} />
                      <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearch}
                      />
                    </div>
                  ) : (
                    <div>
                      <FontAwesomeIcon icon={faSearch} style={iconStyle} onClick={toggleSearch} />
                    </div>
                  )}
                </th>
                <th style={thStyle}>Description</th>
                <th style={thStyles}>
                  Actions
                  <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="pending">Pending</option>
                  </select>
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {displayedTasks.map((task, index) => (
                <tr key={index} className={task.completed ? 'completed' : ''}>
                  <td style={tdStyle}>
                    {editingIndex === index ? (
                      <input
                        type="text"
                        value={editedTask.title}
                        onChange={(e) =>
                          setEditedTask({ ...editedTask, title: e.target.value })
                        }
                      />
                    ) : (
                      <span>{task.title}</span>
                    )}
                  </td>
                  <td style={tdStyle}>
                    {editingIndex === index ? (
                      <input
                        type="text"
                        value={editedTask.description}
                        onChange={(e) =>
                          setEditedTask({
                            ...editedTask,
                            description: e.target.value,
                          })
                        }
                      />
                    ) : (
                      <span>{task.description}</span>
                    )}
                  </td>

                  {editingIndex === index ? (
                    <td>
                      <select
                        value={editedTask.completed ? "completed" : "pending"}
                        onChange={(e) =>
                          setEditedTask({ ...editedTask, completed: e.target.value === "completed" })
                        }
                      >
                        <option value="completed">Completed</option>
                        <option value="pending">Pending</option>
                      </select>
                      </td>):""
                  }


                  <td style={tdStyle}>
                    {editingIndex === index ? (
                      <button
                      className='saveButton'
                        style={buttonStyle}
                        onClick={() => handleSaveEdit(index)}
                      >
                        Save
                      </button>
                    ) : (
                      <div>
                        <FontAwesomeIcon
                          icon={faPencilAlt}
                          style={iconStyle}
                          onClick={() => handleEditClick(index)}
                        />
                        <span style={{ margin: '0 10px' }}></span>
                        <FontAwesomeIcon
                          icon={faTrashAlt}
                          style={iconStyle}
                          onClick={() => deleteTask(index)}
                        />
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks.tasks,
  filter: state.filter,
});

const mapDispatchToProps = {
  deleteTask,
  toggleTaskStatus,
  setFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
