import React, { useState } from 'react';
import answers from './answers.js';
import "./EightBall.css";
import choice from './helpers.js'

/** Eightball: shows random answer.
 *  Changes answer when clicked on.
 * 
 * Props:
 * - answers: array of { msg, color } objects.
 * 
 * States:
 * - answer: { msg, color } of current answer.
 */

function EightBall({ defaultAnswers = answers }) {
    // set initial state:
    const [answer, setAnswer] = useState({
        msg: "Think of a Question.",
        color: "black"
    })

    function handleClick(event) {
        setAnswer(choice(defaultAnswers));
    }

    function resetClick(event) {
        console.log("YOU CLICKED RESET!!!")
        setAnswer({
            msg: "Think of a Question.",
            color: "black"
        })
    }

    return (
        <div>
            <div 
                className="EightBall" 
                onClick={handleClick} 
                style={{ backgroundColor: answer.color }}
            > 
                <b>{answer.msg}</b>
            </div>
            <button onClick={resetClick}>Reset 8-Ball</button>
        </div>
    )
}

export default EightBall;