import React, { useState } from 'react';
import './App.css';

function App() {
  const [recipesFound, setRecipesFound] = useState([]);
  const [recipesSearch, setRecipesSearch] = useState('');

  const searchForRecipes = async (query: string) => {
    const result = await fetch(`http://www.recipepuppy.com/api/?q=${query}`);
    return (await result.json()).results;
  };

  return (
    <div className="App">
     
    </div>
  );
}

export default App;
