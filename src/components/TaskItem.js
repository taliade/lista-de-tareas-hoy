import React from 'react';

const TaskItem = ({ task, alarmTime, toggleComplete, deleteTask }) => {
  return (
    <div className="task-item">
      <span className={task.completed ? 'completed' : ''}>
        {task.text} {alarmTime && <span className="alarm-icon">🔔</span>}
      </span>
      <button onClick={toggleComplete} className="complete-button">✓</button>
      <button onClick={deleteTask} className="delete-button">✖</button>
    </div>
  );
};

export default TaskItem;
