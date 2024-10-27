import React, { useState } from 'react';

// Make the getCharacter argument optional
// Fix the return type of getCharacter
export default function App() {
  const [character, setCharacter] = useState(null);

  React.useEffect(() => {
    async function getCharacter(
      id: number | string | undefined
    ): Promise<void> {
      const response = await fetch(`https://swapi.dev/api/people/${id || 1}`);
      const data = await response.json();
      setCharacter(data.name);
    }

    getCharacter(4);
  }, []);

  if (!character) return <div>Loading...</div>;

  return <h1>{character}</h1>;
}
