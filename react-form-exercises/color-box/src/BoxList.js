import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

function BoxList() {
    const [boxes, setBoxes] = useState([]); 
    
    // add box to array
    const addBox = newBox => {
        setBoxes(boxes => [...boxes, newBox]);
    };

    // remove box
    const removeBox = boxId => {
        setBoxes(boxes => boxes.filter(box => box.id !== boxId));
    };

    // create box components
    // map will create a new list of box components
    const boxComponents = boxes.map(box => (
        <Box
            key={box.id}
            id={box.id}
            handleRemove={removeBox}
            width={box.width}
            height={box.height}
            backgroundColor={box.backgroundColor}
            />
    ))

    return (
        <div>
            <NewBoxForm createBox={addBox} />
            { boxComponents }
        </div>
    );
}

export default BoxList;