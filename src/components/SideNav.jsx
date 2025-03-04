import { useState } from "react"
import {getFullPokedexNumber, pokemonList} from "../utils"

export default function SideNav(props){
    const {selectedPokemon, setSelectedPokemon, handleToggleMenu, showSideMenu} = props

    const [searchValue, setSearchValue] = useState('')


    const filteredPokemon = pokemonList.filter((ele, eleIndex) => {
        //if full pokedex number includes the current search value, return true
        if ((getFullPokedexNumber(eleIndex)).includes(searchValue)){
            return true}

        //if the pokemon name includes the current search value, return true
        if (ele.toLowerCase().includes(searchValue.toLowerCase())){
            return true}

        //otherwise, exclude value from the array
        return false
        
    })
    return (
        <nav className={' ' + (!showSideMenu ? " open" : '')}>
            <div className={"header " + (!showSideMenu ? " open" : '')}>
                <button onClick={handleToggleMenu} className="open-nav-button">
                <i className="fa-solid fa-arrow-left-long"></i>
                </button>
                <img 
        className='default-img' 
        src={`/logo/Pokédex_logo.png`}/>
                {/* <h1 className="text-gradient">Pokédex</h1> */}
            </div>
            <input placeholder="E.g. 001 or Bulba..." value={searchValue}  onChange={(e) => {
                setSearchValue(e.target.value)
            }}/>
            {filteredPokemon.map((pokemon, pokemonIndex) => {
                const truePokedexNumber = pokemonList.indexOf(pokemon)
                
               return (
                <button onClick={() => {
                    setSelectedPokemon(truePokedexNumber),
                    setSearchValue('')
                    handleToggleMenu()
                }} key={pokemonIndex} className={'nav-card ' + (pokemonIndex === selectedPokemon ? 'nav-card-selected' : ' ')}>
                    <p>{getFullPokedexNumber(truePokedexNumber)}</p>
                    <p>{pokemon}</p>
                </button>
               ) 
            })}
        </nav>
    )
}