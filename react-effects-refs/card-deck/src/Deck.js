import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";
import "./Deck.css";

/** Deck: uses the deck API to draw one card at a time. */

const API_BASE_URL = "https://deckofcardsapi.com/api/deck"

const Deck = () => {
 // define deck of cards
 const [deck, setDeck] = useState(null);
 // define draw state
 const [drawn, setDrawn] = useState([]);
 // define shuffling state - use to hide shuffle button
 const [isShuffling, setIsShuffling] = useState(false);

 useEffect(function loadDeckFromAPI() {
    async function fetchData() {
        const d = await axios.get(`${API_BASE_URL}/new/shuffle`);
        setDeck(d.data);
    }
    fetchData();
 }, []);


/** Draw card: change the state, effect will take place */
async function draw() {
    try {
        const drawRes = await axios.get(`${API_BASE_URL}/${deck.deck_id}/draw/`);
        if (drawRes.data.remaining === 0) throw new Error("Deck is empty.");

        const card = drawRes.data.cards[0];

        setDrawn(d => [
            ...d, {
            id: card.code,
            name: card.suit + " " + card.value,
            image: card.image
            },
        ]);
    } catch (err) {
        alert(err);
    }
}

/** Shuffle: change the state & effect will kick in. */
async function startShuffling() {
    setIsShuffling(true)
    try {
        await axios.get(`${API_BASE_URL}/${deck.deck_id}/shuffle/`);
        setDrawn([]);
    } catch (err) {
        alert(err);
    } finally {
        setIsShuffling(false);
    }
}

/** Render draw button, if not shuffling. */
function renderDrawBtnIfOk() {
    if (!deck) return null;

    return (
        <button 
            className="Deck-draw-btn"
            onClick={draw}
            disabled={isShuffling}>
            DRAW
            </button>
    );
}

/** Render shuffle button, if not shuffling. */
function renderShuffleBtnIfOk() {
    if (!deck) return null;
    
    return (
        <button
            className="Deck-shuffle-btn"
            onClick={startShuffling}
            disabled={isShuffling}>
            SHUFFLE
            </button>
    );
}

 return (
    <main className="Deck">

        {renderDrawBtnIfOk()}
        {renderShuffleBtnIfOk()}

        <div className="Deck-cardarea">{
            drawn.map(c => (
                <Card key={c.id} name={c.name} image={c.image} />
            ))
        }
        </div>
    </main>
 )
}

export default Deck;