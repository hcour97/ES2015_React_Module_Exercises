import React from "react";
/** This component displays a div, with props passed to it: (from NewBoxForm??)
 * - background color
 * - width
 * - height */

function Box({id, handleRemove, width=5, height=5, backgroundColor="purple"}) {
    const removeBox = () => handleRemove(id);
    
    return (
        <div>
            <div style={{
                    width: `${width}em`, 
                    height: `${height}em`,
                    backgroundColor,
                }} />

        {/* TO DO: ADD A REMOVE BUTTON TO EACH BOX */}
        <button onClick={removeBox}>X</button>
        </div>
    )
}

export default Box;