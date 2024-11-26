import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TaskContextProvider } from "./contexts/TaskContext";
import Home from "./pages/Home";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <TaskContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </TaskContextProvider>
  );
};

export default App;
