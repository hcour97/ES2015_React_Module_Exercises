import React, { useState } from "react";

/** Renders a single card, as received from the deck. */

const Card = ({ name, image }) => {
    // never updated for the card:
    const [{ angle, xPos, yPos }] = useState({
        angle: Math.random() * 90 - 45,
        xPos: Math.random() * 40 - 20,
        yPos: Math.random() * 40 - 20,
    });
      
    const transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`;

    return <img
            className="Card"
            alt={name}
            src={image}
            style={{ transform }}
        />
}

export default Card;