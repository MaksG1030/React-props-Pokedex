import React from 'react';
import './Pokecard.css'

const Pokecard = ({ id, name, type, exp }) => {
    return (
        <div className='pokecard'>
            <h3 className='pokecard-name'>{name}</h3>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="" />
            <p className='pokecard-p'>Type: {type}</p>
            <p className='pokecard-p'>EXP: {exp}</p>
        </div>
    )
}

export default Pokecard;