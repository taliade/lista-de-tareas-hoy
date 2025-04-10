import React, { useState, useEffect } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTodo = (text, alarmTime) => {
    const newTask = { text, completed: false, alarmTime };
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      tasks.forEach((task, index) => {
        if (task.alarmTime === currentTime && !task.completed) {
          alert(`¡Alarma para: ${task.text}!`);
          toggleComplete(index);
        }
      });
    }, 60000); // Comprobar cada minuto

    return () => clearInterval(interval);
  }, [tasks]);

  return (
    <div className="app-container">
      <h1 className="app-title">TO-DO LIST CON ALARMA</h1>
      <AddTask addTodo={addTodo} />
      <TaskList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
