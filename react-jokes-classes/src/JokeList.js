import React, { useState, useEffect } from "react";
import axios from "axios";
import Joke from "./Joke";
import "./JokeList.css";

/** List of jokes. */

const JokeList = ({ numJokesToGet=5}) => {

  const [jokes, setJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  /* retrieve jokes from API */

  useEffect(() => {
    async function getJokes() {
      let j = [...jokes];
      let seenJokes = new Set();
      try {

        while (j.length < numJokesToGet) {
          let res = await axios.get("https://icanhazdadjoke.com", {
            headers: { Accept: "application/json" }
          });
          let { status, ...jokeObject } = res.data;

          if (!seenJokes.has(jokeObject.id)) {
            seenJokes.add(jokeObject.id);
            j.push({ ...jokeObject, votes: 0 });
          } else {
            console.error("duplicate found!");
          }
        }
        setJokes(j);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
      }
    }
    if (jokes.length === 0) getJokes();
  }, [jokes, numJokesToGet]);

  /* empty joke list, set to loading state, and then call getJokes */

  const generateNewJokes = () => {
    setJokes([]);
  }

  /* change vote for this id by delta (+1 or -1) */

  const vote = (id, delta) => {
    setJokes(allJokes => 
      allJokes.map(j => j.id === id ? { ...j, votes: j.votes + delta } : j ));
    }
  

  /* render: either loading spinner or list of sorted jokes. */
    if (jokes.length) {
      let sortedJokes = [...jokes].sort((a, b) => b.votes - a.votes);
   
    
    if (isLoading) {
      return (
        <div className="loading">
          <i className="fas fa-4x fa-spinner fa-spin" />
        </div>
      )
    }

    return (
      <div className="JokeList">
        <button
          className="JokeList-getmore"
          onClick={generateNewJokes}
        >
          Get New Jokes
        </button>

        {sortedJokes.map(j => (
          <Joke
            text={j.joke}
            key={j.id}
            id={j.id}
            votes={j.votes}
            vote={vote}
          />
        ))}
      </div>
    );
  }
}


export default JokeList;
