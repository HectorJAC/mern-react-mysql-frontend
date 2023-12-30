/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { 
    createTaskRequest, 
    deleteTaskRequest, 
    getTasksRequest, 
    getTaskRequest,
    updateTaskRequest, 
    toggleTaskDoneRequest
} from "../api/task.api";

export const TaskContext = createContext();

export const TaskContextProvider = ({children}) => {

    // Cargar tareas
    const [tasks, setTasks] = useState([]);
    async function loadTasks() {
        const response = await getTasksRequest();
        setTasks(response.data);
    }

    // Eliminar una tarea
    const deleteTask = async (id) => {
        try {
            await deleteTaskRequest(id)
            const newTasks = tasks.filter(task => task.id !== id);
            setTasks(newTasks);
        } catch (error) {
            console.log(error)
        }
    };

    // Crear una tarea
    const createTask = async (task) => {
        try {
            await createTaskRequest(task);
        } catch (error) {
            console.log(error);
        }
    }

    // Obtener una tarea
    const getTask = async (id) => {
        try {
            const response = await getTaskRequest(id);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    };

    // Editar una tarea
    const editTask = async (id, newTask) => {
        try {
            await updateTaskRequest(id, newTask);
        } catch (error) {
            console.log(error);
        }
    };

    // Actualizar estado tarea
    const toggleTaskDone = async (id) => {        
        try {
            const taskFound = tasks.find(task => task.id === id);
            await toggleTaskDoneRequest(id, taskFound.done === 0 ? true : false);
            tasks.map((task) => task.id === id ? task.done = task.done === 0 ? 1 : 0 : task.done);
            setTasks([...tasks]);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <TaskContext.Provider 
            value={{ tasks, loadTasks, deleteTask, createTask, getTask, editTask, toggleTaskDone }}
        >
            {children}
        </TaskContext.Provider>
    );
};
