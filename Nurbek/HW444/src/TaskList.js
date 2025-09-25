import React, { memo } from 'react';
import Task from './Task'; // Импортируем компонент Task

const TaskList = memo(({ tasks, toggleTask, deleteTask }) => {
  return (
    <div>
      {tasks.map(task => (
        <Task 
          key={task.id} 
          task={task} 
          toggleTask={toggleTask} 
          deleteTask={deleteTask} 
        />
      ))}
    </div>
  );
});

export default TaskList;