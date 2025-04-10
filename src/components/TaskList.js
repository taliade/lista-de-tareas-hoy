import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, toggleComplete, deleteTask }) => {
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          alarmTime={task.alarmTime}
          toggleComplete={() => toggleComplete(index)}
          deleteTask={() => deleteTask(index)}
        />
      ))}
    </div>
  );
};

export default TaskList;
