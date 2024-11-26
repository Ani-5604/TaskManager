// src/components/Task/TaskForm.jsx
import React, { useState } from "react";

const TaskForm = ({ task, onSave }) => {
  const [title, setTitle] = useState(task ? task.title : "");
  const [description, setDescription] = useState(task ? task.description : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { title, description };
    onSave(newTask);
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{task ? "Edit Task" : "Add New Task"}</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task Description"
        rows="3"
        required
      />
      <button type="submit">{task ? "Update" : "Add"} Task</button>
    </form>
  );
};

export default TaskForm;
