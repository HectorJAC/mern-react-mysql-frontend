import axios from 'axios';

// Obtener tareas
export const getTasksRequest = async () => {
    return await axios.get('http://localhost:3100/tasks');
};

// Crear una tarea
export const createTaskRequest = async (task) => {
    return await axios.post('http://localhost:3100/tasks', task);
};

// Eliminar una tarea
export const deleteTaskRequest = async (id) => {
    return await axios.delete(`http://localhost:3100/tasks/${id}`);
};

// Obtener una tarea
export const getTaskRequest = async (id,) => {
    return await axios.get(`http://localhost:3100/tasks/${id}`);
};

// Actualizar una tarea
export const updateTaskRequest = async (id, newTask) => {
    return await axios.put(`http://localhost:3100/tasks/${id}`, newTask);
};

// Actualizar estado de una tarea
export const toggleTaskDoneRequest = async (id, done) => {
    return await axios.put(`http://localhost:3100/tasks/${id}`, {
        done: done
    });
}
