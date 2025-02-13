import { useEffect, useState } from "react"
import { getFullPokedexNumber, getPokedexNumber, pokemonList } from "../utils"
import  TypeCard  from "./TypeCard"
import Modal from "./Modal"

export default function PokeCard(props) {
    const {selectedPokemon, setSelectedPokemon} = props
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [skill, setSkill] = useState(null)
    const [loadingSkill, setLoadingSkill] = useState(false)
    const [pokemonAbility, setPokemonAbility] = useState(null)
    const [loadingAbility, setLoadingAbility] = useState(false)
    const [type, setType] = useState(null)

    const {name, height, abilities, stats, types, moves, sprites} = data || {}

    const imgList = Object.keys(sprites || {}).filter(val => {
        if (!sprites[val]) {return false}
        if (['versions', 'other'].includes(val)) {return false}
        return true
    })

    function capitalizeFirstLetter(string){
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    function getPokemonIndex(pokeName) {
        // Normalize the pokeName (remove spaces and convert to lowercase for consistency)
        const normalizedPokeName = pokeName.trim().toLowerCase();
    
        // Normalize the pokemonList for consistency (all lowercase)
        const normalizedPokemonList = pokemonList.map(pokemon => pokemon.toLowerCase());
    
        // Find the index of the normalized pokemon name
        const index = normalizedPokemonList.indexOf(normalizedPokeName);
    
        if (index === -1) {
            console.error(`Pokemon "${pokeName}" not found in the list!`);
            return null;  // Return null if not found
        }
        console.log('the pokemons index:', index )
        return index;  // Return the index (0-based index)
    }

    async function fetchAbilityData(ability, abilityUrl){
        if(loadingAbility || !localStorage || !abilityUrl) {return}

        //check cache for ability
        let c = {}
        if (localStorage.getItem('pokemon-abilities')){
            c = JSON.parse(localStorage.getItem('pokemon-abilities'))
        }

        if (ability in c) {
            setSkill(c[ability])
            console.log('Found ability in cache')
            return
        }

        try {
            setLoadingAbility(true)
            const res = await fetch(abilityUrl)
            const abilityData = await res.json()
            console.log('Fetched move from API', abilityData)
            const description = abilityData?.flavor_text_entries.filter(val =>
                val.language.name === "en")[0]?.flavor_text

            const pokemonAbilityData = {
                name: ability,
                description
            }
            setSkill(pokemonAbilityData)
            c[ability] = pokemonAbilityData
            localStorage.setItem('pokemon-abilities', JSON.stringify(c))
            
        }catch(err){
            console.log(err.message)
        }finally{
            setLoadingAbility(false)
        }
    
        
    }

    async function fetchMoveData(move, moveUrl) {
        if (loadingSkill || !localStorage || !moveUrl) return;
    
        let cache = localStorage.getItem("pokemon-moves")
            ? JSON.parse(localStorage.getItem("pokemon-moves"))
            : {};
    
        if (move in cache) {
            setSkill(cache[move]);
            console.log("Found move in cache");
            return;
        }
    
        try {
            setLoadingSkill(true);
            const res = await fetch(moveUrl);
            const moveData = await res.json();
            console.log("Fetched move from API", moveData);
    
            const description = moveData.flavor_text_entries.find(
                (val) => val.language.name === "en"
            )?.flavor_text;
    
            const skillData = {
                name: move,
                description,
                type: moveData.type, 
                accuracy: moveData.accuracy,
                power: moveData.power,
                pp: moveData.pp,
                priority: moveData.priority,
                learnedBy: moveData.learned_by_pokemon,
            };
    
            setSkill(skillData);
            cache[move] = skillData;
            localStorage.setItem("pokemon-moves", JSON.stringify(cache));
        } catch (err) {
            console.log(err.message);
        } finally {
            setLoadingSkill(false);
        }
    }
    

    useEffect(() => {
        // if loading, exit logic
        if (loading || !localStorage) {return}

        // check if the selected pokemon information is available in the cache
        //1. define the cache
        let cache = {}
        if (localStorage.getItem('pokedex')){
            cache = JSON.parse(localStorage.getItem('pokedex'))
        }

        //2. check if the selected pokemonis in the cache, otherwise fetch from the api

        if (selectedPokemon in cache) {
            //read from cache
            setData(cache[selectedPokemon])
            console.log('Found pokemon in cache')
            return
        }

        //we passed all the cache stuff and now need to fetch the data from the api

        async function fetchPokemonData() {
            setLoading(true)
            try{
                const baseURL = 'https://pokeapi.co/api/v2/'
                const suffix = 'pokemon/' + getPokedexNumber(selectedPokemon)
                console.log('selected pokemon name:', selectedPokemon)
                const finalURL = baseURL + suffix
                console.log("Fetching:", finalURL);
                const res = await fetch(finalURL)
                const pokemonData = await res.json()
                setData(pokemonData)
                console.log('Fetched pokemon data')

                cache[selectedPokemon] = pokemonData
                localStorage.setItem('pokedex', JSON.stringify(cache))
            } catch(err) {
                console.log(err.message)
            }finally{
                setLoading(false)
            }
        }

        fetchPokemonData()

        // if we fetch from the api, make sure to save the information to the cache for next time
    }, [selectedPokemon])

    if (loading || !data) {
        return(
            <div><h4>Loading...</h4></div>
        )
    }
    return(
        <div className='poke-card'>
      {skill && (
    <Modal handleCloseModal={() => setSkill(null)}>
        <div>
            <h4>Name</h4>
            <h1 className="skill-name">{skill.name.replace(/-/g, " ")}</h1>
        </div>
        <div>
            <h4>Description</h4>
            <strong>{skill.description}</strong>
        </div>

        {/*  Move Type */}
        {skill.type && (
            <div>
                <h6>Type</h6>
                <TypeCard type={skill.type.name} />
            </div>
        )}

        {/*  Move Stats */}
        {(skill.pp !== undefined ||
            skill.priority !== undefined ||
            skill.accuracy !== undefined ||
            skill.power !== undefined) && (
            <div className="stat-item">
                {skill.accuracy !== undefined && <h3>Accuracy: {skill.accuracy}</h3>}
                {skill.power !== undefined && <h3>Power: {skill.power}</h3>}
                {skill.pp !== undefined && <h3>PP: {skill.pp}</h3>}
                {skill.priority !== undefined && <h3>Priority: {skill.priority}</h3>}
            </div>
        )}

        {/*  Scrollable Pokémon List */}
        {Array.isArray(skill.learnedBy) && skill.learnedBy.length > 0 && (
            <div>
                <h3>Pokémon that Learn This Move:</h3>
                <div className="pokemon-list-scrollable">
                    {skill.learnedBy.map((poke, index) => (
                        <button 
                            key={index}
                            className="button-card pokemon-move"
                            onClick={() => {console.log("Selected Pokémon:", poke.name);
                                
                                setSelectedPokemon(getPokemonIndex(poke.name));
                                setSkill(null)}}
                                
                        >
                            {capitalizeFirstLetter(poke.name)}
                        </button>
                    ))}
                </div>
            </div>
        )}
    </Modal>
)}




        
            <div>
                <h4>#{getFullPokedexNumber(selectedPokemon)}</h4>
                <h2>{capitalizeFirstLetter(name)}</h2>
            </div>
            <div className='type-container'>
                {types.map((typeObj, typeIndex) => {
                    return(
                        <TypeCard key={typeIndex} type={typeObj?.type?.name} />
                    )
                })}
            </div>
            <img 
        className='default-img' 
        src={`/pokemon/${getFullPokedexNumber(selectedPokemon)}.png`} 
        alt={`${name}-large-img`} 
/>

            <div className='img-container'>
                {imgList.map((spriteUrl, spriteIndex) => {
                    const imgUrl = sprites[spriteUrl]
                    return(
                        <img key={spriteIndex} src={imgUrl} alt={`${name}-img-${spriteUrl}`} />
                    )
                })}
            </div>
            <div>
                <h3>Stats</h3>
                <div className='stats-card'>
                    {stats.map((statObj, statIndex) => {
                        const {stat, base_stat} = statObj
                        return(
                            <div key={statIndex} className='stat-item'>
                                <p>{stat?.name.replaceAll('-', ' ')}</p>
                                <h4>{base_stat}</h4>
                            </div>
                        )
                })}
                </div>
                <h3>Abilities</h3>
<div className="pokemon-move-grid">
    {abilities.map((abilityObj, abilityIndex) => (
        <button 
            className="button-card pokemon-move"
            key={abilityIndex}
            onClick={() => fetchAbilityData(abilityObj?.ability?.name, abilityObj?.ability?.url)}
        >
            {capitalizeFirstLetter(abilityObj?.ability?.name.replace(/-/g, ' '))}
        </button>
    ))}
</div>

                <h3>Moves</h3>
<div className="pokemon-move-grid">
    {moves
        // ?.slice() // Create a shallow copy
        // .filter(moveObj => 
        //     moveObj.version_group_details.some(
        //         version => version.version_group.name === "firered-leafgreen" 
        //         || version.version_group.name === "emerald" 
        //         || version.version_group.name
        //     )
        // ) // Filter moves by version name
        .sort((a, b) => a.move.name.localeCompare(b.move.name)) // Sort alphabetically
        .map((moveObj, moveIndex) => (
            <button 
                className="button-card pokemon-move" 
                key={moveIndex} 
                onClick={() => fetchMoveData(moveObj?.move?.name, moveObj?.move?.url)}
            >
                <p>{moveObj?.move?.name.replace(/-/g, ' ')}</p>
            </button>
        ))}
</div>
            </div>
        </div>
    )
}