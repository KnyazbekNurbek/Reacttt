import React, { memo } from 'react';

const Task = memo(({ task, toggleTask, deleteTask }) => {
  return (
    <div>
      <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={() => toggleTask(task.id)} 
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)}>Удалить</button>
    </div>
  );
});

export default Task;