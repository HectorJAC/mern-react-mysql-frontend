import axios from 'axios';

export const createTaskRequest = async (task) => {
    return axios.post('http://localhost:3100/tasks', task);
};