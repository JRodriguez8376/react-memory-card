import { useState, useEffect } from 'react'
import Zorua from '../assets/Zorua.png'
import fetchData from './api'
import '../styles/Card.css'
function Card({ id, pushNewClick}) {
    const testVar = "Zorua"
    const testUrl = 'https://pokeapi.co/api/v2/pokemon/570/'
    const url = 'https://pokeapi.co/api/v2/pokemon/'
    const { data, loading, error } = fetchData(url + id + '/');

    const getSprite = () => {
        if (!loading) {
            return (data.sprites.front_default);
        }
    }
    const getName = () => {
        if (!loading) {
            //console.log(data);
            return (data.name);
        }
    }
    const getNum = () => {
        if (!loading) {
            return (data.id);
        }
    }
    const getType = () => {
        if(!loading) {
            const type1 = data.types[0].type.name;
            if(data.types.length > 1) {
                const type2 = data.types[1].type.name;
                return(type1 + ' ' + type2);
            } else {
                return(type1);
            }
        }
    }
    const handleClick = () => {
        console.log(id);
        pushNewClick(id);
    }
    return (
        <div className='card'>
            <div className="card-name">
                <h4 className='card-title'>{getNum() + ':'} {getName()}</h4>
                <div className="card-image"
                    onClick={handleClick}
                >
                    <img src={getSprite()}></img>
                </div>
            </div>
            <div className='card-footer'> {getType()}</div>
        </div>
    )
}

export default Card;