import { Formik, Form } from 'formik';
import { createTaskRequest } from '../api/task.api';

function TaskForm() {
    return (
      <div>
        <Formik
            initialValues={{
                title: '',
                description: ''
            }}
            onSubmit={async (values, actions) => {
                try {
                    const response = await createTaskRequest(values);
                    console.log(response);
                    actions.resetForm();
                } catch (error) {
                    console.log(error);
                }
            }}
        >
        {
            ({ handleChange, handleSubmit, values, isSubmitting }) => (
                <Form onSubmit={handleSubmit}>
                    <label htmlFor="title">Title</label>
                    <input 
                        type="text" 
                        name='title' 
                        placeholder='Write a title'
                        onChange={handleChange}
                        value={values.title}
                    />

                    <label htmlFor="description">Description</label>
                    <textarea 
                        name="description" 
                        rows="3"
                        placeholder='Write a description'
                        onChange={handleChange}
                        value={values.description}
                    ></textarea>

                    <button type='submit' disabled={isSubmitting}>
                        {isSubmitting ? 'Loading...' : 'Create task'}
                    </button>
                </Form>
            )
        }
        </Formik>
      </div>
    );
}
  
export default TaskForm;