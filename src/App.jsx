import { Routes, Route } from "react-router-dom";
import TasksPage from "./pages/TasksPage";
import TaskForm from "./pages/TaskForm";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<TasksPage />}/>
        <Route path="/new" element={<TaskForm />}/>
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
    </>
  )
}

export default App