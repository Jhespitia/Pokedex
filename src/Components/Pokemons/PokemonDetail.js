import React, { useEffect, useState} from "react";
import axios from "axios";
import  {useParams} from 'react-router-dom';
import  {backgroundColors, colors } from '../Assets/Colors';
import image from'../Assets/Images/pokeball.ico';
import './Styles.css';

const PokemonDetail = () => {

    const [pokemon, setPokemon] = useState({});
    const [otherInfo, setOtherInfo] = useState({});
   
     useEffect(() => {
         
         axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
         .then(res => setPokemon(res.data));
         
         axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
         .then(res => setOtherInfo(res.data));

    } , []);
    //console.log(pokemon);
    //console.log(otherInfo);

    const {id} = useParams();
   
    return (
        <div 
        className="logo">
            <div 
                className="card-detail"
                style={{backgroundColor: backgroundColors[pokemon.types?.[0].type.name]}}>    
                <img className='image-detail' src={pokemon.sprites?.other.home.front_default} alt={pokemon.name}/>

                <img  className='back-img'src={pokemon.sprites?.back_default} alt="" width={'80px'}/>

                <div className="name-detail">{pokemon.name}
                <h2 className='id'>#{pokemon.id}</h2>
            
                <div>
                    <h5 className="abi">Abilities</h5>
                    <h4 className="abi1">
                        -{pokemon.abilities?.[0]?.ability.name}
                    </h4>
                    <h4 className="abi2">
                        -{pokemon.abilities?.[1]?.ability.name}
                    </h4>
                </div>

                <div className="types">
                    <h5 className='typesT'>Type</h5>
                    <h4 
                        className='types1'
                        style={{color: colors[pokemon.types?.[0].type.name]}}
                        >{pokemon.types?.[0].type.name}
                    </h4>

                    <h4 className='types2'
                        style={{color: colors[pokemon.types?.[1]?.type.name]}}
                        >{pokemon?.types?.[1]?.type.name}
                    </h4>
                </div>

                <div className="contenedor">
                    <div className="statass">
                        <h2 className="sta">{pokemon.stats?.[0].stat.name}</h2>
                        <div className="bar">
                            <div 
                                className="progress"
                                style={{width: `${pokemon.stats?.[0].base_stat}%`,backgroundColor:colors[pokemon.types?.[0].type.name]}}
                                >{pokemon.stats?.[0].base_stat}%
                            </div>
                        </div>

                        <h2 className="sta">{pokemon.stats?.[1].stat.name}</h2>
                        <div className="bar">
                            <div 
                                className="progress"
                                style={{width: `${pokemon.stats?.[1].base_stat}%`,backgroundColor:colors[pokemon.types?.[0].type.name]}}
                                >{pokemon.stats?.[1].base_stat}%
                            </div>
                        </div>

                        <h2 className="sta">{pokemon.stats?.[2].stat.name}</h2>
                        <div className="bar">
                            <div 
                                className="progress"
                                style={{width: `${pokemon.stats?.[2].base_stat}%`,backgroundColor:colors[pokemon.types?.[0].type.name]}}
                                >{pokemon.stats?.[2].base_stat}%
                            </div>
                        </div>

                        <h2 className="sta">s/defense</h2>
                        <div className="bar">
                            <div 
                                className="progress"
                                style={{width: `${pokemon.stats?.[3].base_stat}%`,backgroundColor:colors[pokemon.types?.[0].type.name]}}
                                >{pokemon.stats?.[3].base_stat}%
                            </div>
                        </div>

                        <h2 className="sta">s/attack</h2>
                        <div className="bar">
                            <div 
                                className="progress"
                                style={{width: `${pokemon.stats?.[4].base_stat}%`,backgroundColor:colors[pokemon.types?.[0].type.name]}}
                                >{pokemon.stats?.[4].base_stat}%
                            </div>
                        </div>

                        <h2 className="sta">{pokemon.stats?.[5].stat.name}</h2>
                        <div className="bar">
                            <div 
                                className="progress"
                                style={{width: `${pokemon.stats?.[5].base_stat}%`,backgroundColor:colors[pokemon.types?.[0].type.name]}}
                                >{pokemon.stats?.[5].base_stat}%
                            </div>
                        </div>
                    </div>
                </div>        
             </div>
            
             <div className="otherInfo">
                <h3 
                className="genera"
                style={{color:colors[pokemon.types?.[0].type.name]}}
                >The {otherInfo.genera?.[7].genus}</h3>
                        
                <h4 className="description">{otherInfo.flavor_text_entries?.[0].flavor_text}</h4>
             </div>
             <hr />  
             <h1 className="footer"> <img className='icon' src={image} alt=''/> Created by Jhon Espitia <br />©Copyrigth reserved® 2022 <img className='icon' src={image} alt=''/></h1>
            <hr />
        </div>
    </div>
    )
}

export default PokemonDetail;