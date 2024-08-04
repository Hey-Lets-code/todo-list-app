import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ToDoList from "./pages/ToDoList";
import ActivityForm from "./pages/ActivityForm";
import EditForm from "./pages/EditForm";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/todos" element={<ToDoList />} />
        <Route path="/create-activity" element={<ActivityForm />} />
        <Route path="/edit-activity" element={<EditForm />} />
        <Route path="/" element={<Login />} />{" "}
        {/* Aqui redireciona para login por padrão */}
      </Routes>
    </Router>
  );
};

export default App;
