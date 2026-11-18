
import {useState} from 'react'
 
function Pokemon(props){

    return(
    <>
  <div className="detail">
    <br/>
    <br/>
        <p><strong>Pokemon name: {props.pokemon.name}</strong></p>
                    
        <p><strong>Pokemon bild: </strong> </p>
            <img
            src={props.pokemon.sprites.front_default}
            alt={props.pokemon.name}/> 

            {props.pokemon.types.map((type, index) =>(
            <p key={index}> <strong>Pokemon type:</strong> {type.type.name}</p>
             ))}

            <p> <strong>Pokemon vikt: </strong> {props.pokemon.weight}</p>
            <p> <strong>Pokemon Längd:</strong> {props.pokemon.height}</p>         

            </div> 
    
    </>
    )
 }  
 
 export default Pokemon;