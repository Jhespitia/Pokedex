import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { backgroundColors, colors } from '../Assets/Colors'
import './Styles.css';

const PokemonCard = ({pokemonUrl}) => {
  
  const [pokemon, setPokemon] = useState('');
  const navigate = useNavigate();


useEffect(() => {
  axios.get(pokemonUrl)
  .then(res => {
    setPokemon(res.data);
  })
} , []);
 
//console.log(pokemon);

  return (
    <div className='container'>

        <div 
        className='card' 
        onClick={()=> navigate (`/pokedex/${pokemon.id}`)}
        style={{backgroundColor: backgroundColors[pokemon.types?.[0].type.name]}}
        >
        
        <div 
        className='card-body'
        >
        <h2 className='pokemon-name'>{pokemon.name}</h2>
          
          <h2 className='pokemon-id'>#{pokemon.id}</h2>
          
          <h3 className='type'>Types</h3>
          <h4 className='type1'
          style={{color: colors[pokemon.types?.[0].type.name]}}
          >{pokemon.types?.[0].type.name}</h4>
          <h4 className='type1'
          style={{color: colors[pokemon.types?.[1]?.type.name]}}
          >{pokemon?.types?.[1]?.type.name}</h4>
          
          <img className='image' src={pokemon.sprites?.other.home.front_default} alt={pokemon.name}/>
          <h4 className='stats'>stats</h4>
          <h3 className='height'> height: {pokemon.height * 10} Cm.</h3>
          <h3 className='weight'> Weight: {pokemon.weight} Kl.</h3>
        </div>
      </div>
    </div>
  )
}

export default PokemonCard;