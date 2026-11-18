import {useEffect,useState} from 'react'
import Pokemon from './Pokemon'

const PokemonApplication =()=>{
    const [pokemon,setPokemon] = useState(null)
    const [pokemonList,setPokemonList] = useState([])
    const [pokemondetail, setPokemondetail] = useState (null)

useEffect (() => {
    const getpokemon = async () => {
        const res =await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
        const data= await res.json();
        console.log(data);
        setPokemonList(data.results);
    };
        getpokemon();

},[pokemon])
    const getpokemondetail = async () => {
        const res = await fetch(pokemon)
        const data = await res.json();
        console.log(data)
        setPokemondetail(data);
       
    }
        
return(
    <main>
        <h1>Pokemon-applicationen </h1>
        
        <select className="option" onChange={(e)=> setPokemon(e.target.value)}>
        <option  value="">Välj pokemon</option>
        
        {pokemonList.map((pokemon,index) => {
            return(
                <option className="option" key={index} value={pokemon.url}>
                {pokemon.name}</option> 
             )
            })} 
        </select >
            <br/>
            <br/>
            <button className="btnn" onClick ={getpokemondetail} disabled={!pokemon}>Hämta Pokemon</button>
            <br/>
            {pokemondetail && <Pokemon pokemon={pokemondetail} />}
                
    </main>
)
}
export default PokemonApplication;