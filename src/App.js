import React, { useState, useRef, useEffect } from 'react';
import TaskManager from './components/TaskManager';
import Header from './components/header';
import { Provider } from 'react-redux';
import store from './redux/store';
import Landing from './components/landing';
import './App.css';
import { useTheme } from './hooks/useTheme';

function App() {
  const { theme, toggleTheme } = useTheme();
  const [showTaskManager, setShowTaskManager] = useState(false);
  const taskManagerRef = useRef(null);

  const handleGetStarted = () => {
    setShowTaskManager(true);
  }

  useEffect(() => {
    if (showTaskManager && taskManagerRef.current) {
      taskManagerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showTaskManager]);

  return (
    <Provider store={store}>
      <div className="App">
        <div className="header">
          <Header />
        </div>
        <Landing onGetStarted={handleGetStarted} />
        {showTaskManager && (
          <div ref={taskManagerRef}>
            <TaskManager theme={theme} />
          </div>
        )}
      </div>
    </Provider>
  );
}

export default App;
