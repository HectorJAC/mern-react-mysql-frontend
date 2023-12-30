import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import useTasks from '../hooks/useTasks';

function TaskForm() {
    
    const [task, setTask] = useState({
        title: '',
        description: ''
    });
    const { createTask, getTask, editTask } = useTasks();
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const loadTaks = async () => {
            if (params.id) {
                const response = await getTask(params.id);
                setTask({
                    title: response.title,
                    description: response.description
                })
            }
        };
        loadTaks();
    }, []);
    
    return (
      <div className='py-5'>
        <Formik
            initialValues={task}
            enableReinitialize={true}
            onSubmit={async (values) => {
                if (params.id) {
                    await editTask(params.id, values);
                    navigate('/');
                } else {
                    await createTask(values);
                    navigate('/');
                }
                setTask({
                    title: '',
                    description: ''
                });
            }}
        >
        {
            ({ handleChange, handleSubmit, values, isSubmitting }) => (
                <Form 
                    className="bg-slate-300 rounded-md p-4 max-w-sm flex flex-col gap-2 mx-auto"
                    onSubmit={handleSubmit}
                >
                    <h1 className='text-black text-xl font-bold uppercase text-center'>
                        {params.id ? 'Edit task' : 'Create task'}
                    </h1>
                    <label htmlFor="title" className='block font-bold'>Title </label>
                    <input 
                        type="text" 
                        name='title' 
                        placeholder='Write a title'
                        className='mb-2 px-2 py-1 rounded-md w-full'
                        onChange={handleChange}
                        value={values.title}
                    />

                    <label htmlFor="description" className='block font-bold'>Description </label>
                    <textarea 
                        name="description" 
                        rows="3"
                        placeholder='Write a description'
                        className='mb-2 px-2 py-1 rounded-md w-full'
                        onChange={handleChange}
                        value={values.description}
                    ></textarea>

                    <button 
                        type='submit' 
                        disabled={isSubmitting} 
                        className='bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded w-full'
                    >
                        {isSubmitting ? 'Loading...' : 'Save'}
                    </button>
                </Form>
            )
        }
        </Formik>
      </div>
    );
}
  
export default TaskForm;