import React, { useState, useEffect } from 'react';
import { Card} from "./";
import { Button } from "./Day2/button";
import {JokerCard} from ".card"
const RandomJoke = () => {
   const [joke, setJoke] = useState(null);
  const [fetchTrigger, setFetchTrigger] = useState(0);

  useEffect(() => {
    const fetchJoke = async () => {
      try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        if (!response.ok) {
          throw new Error('Failed to fetch joke');
        }
        const data = await response.json();
        setJoke(data);
      } catch (error) {
        console.error(error);
        setJoke({ setup: 'Oops!', punchline: 'Failed to load a joke.' });
      }
    };

    fetchJoke();
  }, [fetchTrigger]);

  const handleGetAnotherJoke = () => {
    setFetchTrigger((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      {joke && (
        <Card className="w-full max-w-md mb-4 shadow-lg">
          <CardContent>
            <p className="text-lg font-semibold">{joke.setup}</p>
            <p className="text-md mt-2">{joke.punchline}</p>
          </CardContent>
        </Card>
      )}
      <Button onClick={handleGetAnotherJoke}>Get Another Joke</Button>
    </div>
  );
};

export default RandomJoke;
