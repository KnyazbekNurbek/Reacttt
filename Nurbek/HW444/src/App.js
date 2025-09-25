import React, { useState, useCallback, useRef, useEffect } from 'react';
import TaskList from './TaskList'; // Импортируем компонент TaskList
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const inputRef = useRef(null);

  const addTask = useCallback((task) => {
    setTasks(prevTasks => [...prevTasks, { id: Date.now(), text: task, completed: false }]);
  }, []);

  const toggleTask = useCallback((id) => {
    setTasks(prevTasks => 
      prevTasks.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }, []);

  const deleteTask = useCallback((id) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  }, []);

  const handleAddClick = () => {
    if (inputRef.current.value) {
      addTask(inputRef.current.value);
      inputRef.current.value = '';
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
  });

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;

  return (
    <div className="App">
      <input 
        type="text" 
        ref={inputRef} 
        placeholder="Введите задачу..." 
      />
      <button onClick={handleAddClick}>Добавить задачу</button>

      <div>
        <button onClick={() => setFilter('all')}>Все</button>
        <button onClick={() => setFilter('active')}>Активные</button>
        <button onClick={() => setFilter('completed')}>Выполненные</button>
      </div>

      <div>
        <p>Всего задач: {totalTasks}</p>
        <p>Выполнено: {completedTasks}</p>
      </div>

      <TaskList 
        tasks={filteredTasks} 
        toggleTask={toggleTask} 
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;