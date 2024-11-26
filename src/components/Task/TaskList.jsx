// src/components/Task/TaskList.jsx
import React from "react";
import TaskItem from "./TaskItem";
import { useTaskContext } from "../../contexts/TaskContext";

const TaskList = () => {
  const { tasks, deleteTask, updateTask } = useTaskContext();

  const handleEdit = (task) => {
    const updatedTitle = prompt("Edit Task Title", task.title);
    const updatedDescription = prompt("Edit Task Description", task.description);
    if (updatedTitle && updatedDescription) {
      updateTask(task.id, { title: updatedTitle, description: updatedDescription });
    }
  };

  if (!tasks.length) {
    return <p style={{ color: "#999", fontStyle: "italic" }}>No tasks available. Add one!</p>;
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={deleteTask}
          onEdit={handleEdit}
        />
      ))}
    </div>
  );
};

export default TaskList;
