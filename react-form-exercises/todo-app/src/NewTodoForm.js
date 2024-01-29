import React, { useState } from "react";
import TodoList from "./TodoList";
import Todo from "./Todo";

/** Render a from, with one text input for the task to be created.
 *  When this form is submitted, a new Todo Component should be created. */

const NewTodoForm = ({ createTodo }) => {
    const INITIAL_STATE = {
        task: ""
    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData, [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createTodo({...formData});
        setFormData(INITIAL_STATE)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="task">Task:</label>
                <input
                    id="task"
                    name="task"
                    type="text"
                    value={formData.task}
                    onChange={handleChange}
                />
            </div>
            <button>Add task</button>
        </form>
    )
}

export default NewTodoForm;