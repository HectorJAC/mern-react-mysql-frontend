import { useEffect } from "react";
import TasksCard from "../components/TasksCard";
import useTasks from "../hooks/useTasks";

function TasksPage() {
  
  const { tasks, loadTasks } = useTasks();

  useEffect(() => {
    loadTasks();
  }, []);

  function renderMain() {

    if (tasks.length === 0) return <h1>No tasks yet</h1>;

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
      <h1>Tasks</h1>
      {renderMain()}      
    </div>
  );
}

export default TasksPage;