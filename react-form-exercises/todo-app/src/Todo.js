import React from "react";

/** Display a div with the task of todo
 * 
 * Each task should have a button with the text "X", that when clicked, removes the todo.
 */
const Todo = ({task="default todo", id, remove}) => {
    const handleRemove = () => remove(id);

    return (
        <div>
            <li>{task}</li>
            <button onClick={handleRemove}>X</button>
        </div>
    );
}

export default Todo;