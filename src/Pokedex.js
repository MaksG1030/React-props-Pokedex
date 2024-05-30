import React from 'react';
import Pokecard from './Pokecard'
import './Pokedex.css'

const Pokedex = ({ pokemon }) => {
    return (
        <>
            <h1 className='pokedex-title'> Pokedex </h1>
            {pokemon.map(p => (
                <Pokecard key={p.id} id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
            ))}
        </>
    );
}

export default Pokedex;