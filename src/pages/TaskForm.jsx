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
      <div>

        <h1>{params.id ? 'Edit task' : 'Create task'}</h1>
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
                <Form onSubmit={handleSubmit}>
                    <label htmlFor="title">Title </label>
                    <input 
                        type="text" 
                        name='title' 
                        placeholder='Write a title'
                        onChange={handleChange}
                        value={values.title}
                    />

                    <label htmlFor="description">Description </label>
                    <textarea 
                        name="description" 
                        rows="3"
                        placeholder='Write a description'
                        onChange={handleChange}
                        value={values.description}
                    ></textarea>

                    <button type='submit' disabled={isSubmitting}>
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