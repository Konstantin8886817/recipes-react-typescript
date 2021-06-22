import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [recipesFound, setRecipesFound] = useState([]);
  const [recipesSearch, setRecipesSearch] = useState('');

  const searchForRecipes = async (query: string): Promise<any> => {
    const result = await fetch(`http://www.recipepuppy.com/api/?q=${query}`);
    return (await result.json()).results;
  };

  useEffect(() => {
    (async () => {
      const query = encodeURIComponent(recipesSearch);
      const response = await searchForRecipes(query);
      setRecipesFound(response);
    })();
  });

  return (
    <div className="App">
     <h1>Recipe Search App</h1>
    </div>
  );
}

export default App;
