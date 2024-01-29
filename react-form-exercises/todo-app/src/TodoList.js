import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
/** Render the list of todo components.
 * 
 *  Contains state that has all of todo components.
 */

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    // add todo to array
    const addTodo = newTodo => {
        setTodos(todos => [...todos, newTodo]);
    }

    // remove todo
    const remove = id => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
      };

    const todoComponents = todos.map(todo => (
        <Todo
            key={todo.id}
            id={todo.id}
            task={todo.task}
            remove={remove}
            />
    ))

    return (
        <div>
            <NewTodoForm createTodo={addTodo} />
            {todoComponents}
        </div>
    )
}

export default TodoList;