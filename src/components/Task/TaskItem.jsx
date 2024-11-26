// src/components/Task/TaskItem.jsx
import React from "react";

const TaskItem = ({ task, onDelete, onEdit }) => {
  return (
    <div className="task-item">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <div>
        <button className="edit-button" onClick={() => onEdit(task)}>
          Edit
        </button>
        <button className="delete-button" onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
