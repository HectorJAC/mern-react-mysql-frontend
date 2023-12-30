/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import useTasks from "../hooks/useTasks";
import { formatearFecha } from "../helpers/formatDate";

function TasksCard({task}) {
    
    const navigate = useNavigate();
    const { deleteTask, toggleTaskDone } = useTasks();

    const handleDone = async () => {
        await toggleTaskDone(task.id);
    };
  
    return (
    <div className="bg-slate-300 rounded-md p-4">
        <header className="flex justify-between">
            <h2 className="text-sm font-bold">{task.title}</h2>
            <span>{task.done === 1 ? "✅" : "❌"}</span>
        </header>
        
        <p className="text-xs">{task.description}</p>
        <span>{formatearFecha(task.createAt)}</span>

        <div className="flex gap-x-2">
            <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded"
                onClick={() => deleteTask(task.id)}
            >
                Delete
            </button>

            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
                onClick={() => navigate(`/edit/${task.id}`)}
            >
                Edit
            </button>

            <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded"
                onClick={() => handleDone(task.done)}
            >
                Toggle Task
            </button>
        </div>
    </div>
  )
}

export default TasksCard