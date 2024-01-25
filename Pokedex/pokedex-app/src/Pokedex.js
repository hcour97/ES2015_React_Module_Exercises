import React from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css"

/** Renders a sequence of Pokecard components,
 * 
 *  given an array of objects describing different pokemon
 *  via props.
 */

const Pokedex = ( props ) => {
    let winMessage = null;
    if (props.isWinner) {
      winMessage = <p className="Pokedex-winner">THIS HAND WINS!</p>;
    }
    return (
        <div className="Pokedex">
            <h2 className="Pokedex-title">Pokedex</h2>
            <div className="Pokedex-cards">
                {props.pokemon.map(p => (
                    < Pokecard
                        id={p.id}
                        name={p.name}
                        type={p.type}
                        exp={p.base_experience}
                    />
                ))}
            </div>
            <h4>Total experience: {props.exp}</h4>
            {winMessage}
        </div>
    );
}

export default Pokedex;