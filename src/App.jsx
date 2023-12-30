import { Routes, Route } from "react-router-dom";
import TasksPage from "./pages/TasksPage";
import TaskForm from "./pages/TaskForm";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";
import { TaskContextProvider } from "./context/taskContext";

function App() {
  return (
    <TaskContextProvider>
      <Navbar />

      <Routes>
        <Route path="/" element={<TasksPage />}/>
        <Route path="/new" element={<TaskForm />}/>
        <Route path="/edit/:id" element={<TaskForm />}/>
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
    </TaskContextProvider>
  );
}

export default App;