import React from 'react';
import TaskManager from './components/TaskManager';
import Header from './components/header'
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import { useTheme } from './hooks/useTheme';

function App() {
  const { theme, toggleTheme } = useTheme();
  console.log(theme)
  return (
    <Provider store={store}>
      <div className="App">
        <Header /> 
        <TaskManager theme={theme}/> 
      </div>
    </Provider>
  );
}

export default App;
