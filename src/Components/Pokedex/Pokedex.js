import React, { useEffect, useState }from 'react';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import PokemonCard from '../Pokemons/PokemonCard';
import './Pokedex.css';
import image from'../Assets/Images/pokeball.ico';


const Pokedex = () => {

    const userName = useSelector((state) => state.userName);

    const [pokemons, setPokemons] = useState([]);
    const [pokemonSearch, setPokemonSearch] = useState('');
    const [types, setTypes] = useState([]);
    
    
    const navigate = useNavigate();
    
    
    useEffect(() => {
      axios.get('https://pokeapi.co/api/v2/pokemon/?offeset=0&limit=1126')
      .then(res => setPokemons(res.data.results));
      
      axios.get('https://pokeapi.co/api/v2/type/')
      .then(res => setTypes(res.data.results));
      
    },[]);
    
    const search = () => {
      navigate(`/pokedex/${pokemonSearch.toLowerCase()}`);
    }
    //console.log(pokemonSearch);
    
    const filterPokemons = e => {
      axios.get(e.target.value)
      .then(res => setPokemons(res.data.pokemon));     
    }
    //console.log(pokemons);
    //console.log(types);
    
    const [page, setPage] = useState(1);
    const pokemonsPerPage = 10;
    const lastIndex = pokemonsPerPage * page;
    const firstIndex = lastIndex - pokemonsPerPage;
    const pokemonPaginate = pokemons?.slice(firstIndex, lastIndex);
    const lastpage = Math.ceil(pokemons?.length / pokemonsPerPage);

    //=============================================================
    //PAGES NAVIGATION
    // const pageNumber = [];
    // for (let i = 1; i <= lastpage; i++) {
    //   pageNumber.push(i);
    // }

  return (
    <div>
        <div className='logo'></div>
        
        <div>
            <h1 className="welcome">...Welcome...</h1>
        </div>
        <h1 className='name'> '{userName}'
        </h1>
        <h2 
        className='text'><img className='icon' src={image} alt=''/> Here you can find your favorite Pokemon <img className='icon' src={image}alt=''/></h2>
        
         <div>
            <input
            className="search"
            type="text"
            value={pokemonSearch}
            onChange={(e) => setPokemonSearch(e.target.value)}
            placeholder="Enter Pokemon Name or ID..."
            />
            
            <input
            className="search-button"
            type="submit"
            onClick={search}
            value='Search' />
            
        </div> 

         <div className='filter'> Select Type<br/>
            <select onChange={filterPokemons}>
                <option>Choose</option>
                {
                    types.map(type => (
                        <option 
                        className='filter1' 
                        key={type.url} 
                        value={type.url}>{type.name}</option>
                    ))
                }
            </select>
         </div> 

        <div className='pagination'>
        <button
          className='prev'
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >Prev
        </button>
        
        {/* ========PAGES NAVIGATION========= */}
        {/* {
        pageNumber.map(number => (
          <button
          className='page-number'
          onClick={() => setPage(number)} 
          >{number}</button>
        ))
        } ====================================*/}
        
        <button 
          className='next'
          onClick={() => setPage(page + 1)}
          disabled={page === lastpage}
          >Next
          </button>
        </div>
                
           {
            pokemonPaginate.map(pokemon => (
                <PokemonCard
                pokemonName={pokemon.name}
                key={pokemon.url !== undefined? pokemon.url : pokemon.pokemon.url}
                pokemonUrl={pokemon.url !== undefined? pokemon.url : pokemon.pokemon.url}
                />
           ))
        }
        <hr />  
        <h1 className="footer"> <img className='icon' src={image} alt=''/> Created by Jhon Espitia <br />©Copyrigth reserved® 2022 <img className='icon' src={image} alt=''/></h1>
          <hr />
         
    </div>
  )
}

export default Pokedex;