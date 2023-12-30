import { useEffect } from "react";
import TasksCard from "../components/TasksCard";
import useTasks from "../hooks/useTasks";

function TasksPage() {
  
  const { tasks, loadTasks } = useTasks();

  useEffect(() => {
    loadTasks();
  }, []);

  function renderMain() {

    if (tasks.length === 0) return <h1 className="text-white font-bold">No tasks yet</h1>;

    return (
      tasks.map((task) => (
        <TasksCard  
          key={task.id}
          task={task}
        />
      ))
    )
  }
  
  return (
    <div>
      <h1 className="text-5xl text-white font-bold text-center">Tasks</h1>
      <div className="grid grid-cols-3 gap-2 py-10">
        {renderMain()}
      </div>      
    </div>
  );
}

export default TasksPage;