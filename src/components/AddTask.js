import React, { useState } from 'react';

const AddTask = ({ addTodo }) => {
  const [task, setTask] = useState('');
  const [alarmTime, setAlarmTime] = useState('');

  const handleAddTask = () => {
    if (task.trim()) {
      addTodo(task, alarmTime);
      setTask('');
      setAlarmTime('');
    }
  };

  return (
    <div className="add-task-container">
      <input
        type="text"
        placeholder="Añadir nueva tarea..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="task-input"
      />
      <input
        type="time"
        value={alarmTime}
        onChange={(e) => setAlarmTime(e.target.value)}
        className="time-input"
      />
      <button onClick={handleAddTask} className="add-button">+</button>
    </div>
  );
};

export default AddTask;
