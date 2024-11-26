import React from "react";
import TaskForm from "../components/Task/TaskForm";
import TaskList from "../components/Task/TaskList";
import Spinner from "../components/Spinner";
import { useTaskContext } from "../contexts/TaskContext";
import "./Dashboard.css"; // Import the CSS file for styling

const Dashboard = () => {
  const { tasks, loading, addTask } = useTaskContext();

  const handleSaveTask = (task) => {
    addTask(task); // Add task to the context and Firestore
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1 className="dashboard-title">
          Welcome to <span className="highlight">Task Manager</span>
        </h1>
        <p className="dashboard-subtitle">
          Keep track of your <span className="highlight">tasks effortlessly</span>
        </p>
      </header>

      <div className="dashboard-content">
        {loading ? (
          <div className="spinner-wrapper">
            <Spinner />
          </div>
        ) : (
          <div className="task-sections">
            <div className="task-form-section">
              <TaskForm onSave={handleSaveTask} />
            </div>
            <div className="task-list-section">
              <TaskList tasks={tasks} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
