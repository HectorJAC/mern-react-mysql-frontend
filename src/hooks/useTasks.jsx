import { useContext } from 'react';
import { TaskContext } from '../context/taskContext';

function useTasks() {
  return (
    useContext(TaskContext)
  );
}

export default useTasks;