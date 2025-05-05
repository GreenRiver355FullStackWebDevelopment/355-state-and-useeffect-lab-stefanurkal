import { useState } from 'react';
import CardDetail from './CardDetail.jsx';

const Cards = ({ pokemon }) => {
    const [singlePokemon, setSinglePokemon] = useState();
    
    console.log(pokemon);
    const showPokemon = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setSinglePokemon(data);
    }
    
    console.log(singlePokemon);
    return (
        <>
          <div className="cards">
            {pokemon.map((monster, index) => (
              <div key={index} className="card" onClick={() => showPokemon(monster.url)}>
                {monster.name}
              </div>
            ))}
          </div>
      
          {singlePokemon && (
            <div className="card-detail-wrapper">
              <CardDetail singlePokemon={singlePokemon} />
            </div>
          )}
        </>
      );
}

export default Cards;