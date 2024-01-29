import React, { useState } from "react";

/** Renders a form, that when submitted, creates a new box.
 * 
 * inputs:
 * - box width
 * - box height
 * - box background color
 * 
 * when form is submitted, clear input values.
 */

const NewBoxForm = ({ createBox }) => {
    const INITIAL_STATE = {
        width: "",
        height: "",
        backgroundColor: ""
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
        createBox({...formData});
        // reset form
        setFormData(INITIAL_STATE)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="height">Height</label>
                <input
                    id="height"
                    name="height"
                    type="text"
                    value={formData.height}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="width">Width</label>
                <input
                    id="width"
                    name="width"
                    type="text"
                    value={formData.width}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="backgroundColor">Color</label>
                <input
                    id="backgroundColor"
                    name="backgroundColor"
                    type="text"
                    value={formData.backgroundColor}
                    onChange={handleChange}
                />
            </div>
            <button>Add box</button>
        </form>
    )
}


export default NewBoxForm;