import { useState, useEffect } from "react";

export default function ToDoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  useEffect(() => {
    if (tasks.length > 10) {
      alert("У вас более 10 задач для выполнения");
    }
  }, [tasks]);

  return (
    <div className="app">
      <h1>ToDo List</h1>
      <div className="input-block">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Введите задачу"
        />
        <button onClick={addTask}>Добавить задачу</button>
      </div>
      <ul className="tasks">
        {tasks.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}
