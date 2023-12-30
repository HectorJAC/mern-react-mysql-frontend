import { Routes, Route } from "react-router-dom";
import TasksPage from "./pages/TasksPage";
import TaskForm from "./pages/TaskForm";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";
import { TaskContextProvider } from "./context/taskContext";

function App() {
  return (
    <div className="bg-zinc-900 h-screen">
      <Navbar />
      <div className="container mx-auto py-4 px-10">
        <TaskContextProvider>
          <Routes>
            <Route path="/" element={<TasksPage />}/>
            <Route path="/new" element={<TaskForm />}/>
            <Route path="/edit/:id" element={<TaskForm />}/>
            <Route path="*" element={<ErrorPage />}/>
          </Routes>
        </TaskContextProvider>
      </div>
    </div>
  );
}

export default App;