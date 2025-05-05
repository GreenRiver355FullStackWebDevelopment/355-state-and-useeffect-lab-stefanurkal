import { useState, useEffect } from 'react'
import './App.css'
import Cards from "./components/Cards.jsx";

function App() {
  const [pokemon, setPokemon] = useState({results:[]});
  const [page, setPage] = useState([0]);

  useEffect(() => {
    fetchPokemon(page);
  }, [page]);

  const fetchPokemon = async (page) => {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${page[0]}`);
      const data = await res.json();
      setPokemon(data);
    } catch (error) {
      console.log(error);
    }
  }

  const onClickNext = () => {
    if(page[0] > 152){
      setPage([0]);
    }else{
      setPage(prev => [prev[0] + 20]);
    }
  };

  const onClickBack = () => {
    if(page[0] > 0){
      setPage(prev => [prev[0] - 20]);
    }
  }

  return (
    <div className="App">
      <h1>PokeDex</h1>
      <div className="main-container ">
        <div>
          <Cards pokemon={pokemon.results} />
        </div>
      </div>
      <div>
            <button onClick={onClickBack} disabled={page === 1}>Back</button>
            <button onClick={onClickNext}>Next</button>
      </div>
    </div>
    
  )
}
export default App;
