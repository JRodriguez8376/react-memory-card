import { useState, useEffect } from 'react'
import "../styles/Card.css"
import fetchData from './api'
import '../styles/Card.css'
function Card({ id, pushNewClick}) {
    const assetSrc =  '../assets/icons/types/';
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
            const newName = data.name.charAt(0).toUpperCase() + data.name.slice(1);
            return (newName);
        }
    }
    const getNum = () => {
        if (!loading) {
            return (data.id);
        }
    }
    const getType1 = () => {
        if(!loading) {
            const type1 = data.types[0].type.name;
                return(type1);
            }
        }
    const getType2 = () => {
        if(!loading) {
            if(data.types.length > 1) {
                const type2 = data.types[1].type.name;
                return(type2);
            } else {
                return;
            }
        }
    }
    const getTypeImage = (typeName) => {
        const image = assetSrc + typeName + '.png';
        console.log(image)
        return(image);
     }
     const displayTypeImages = () => {
        if(getType2()) {
            return(
                <>
                <img src={getTypeImage(getType1())} /> 
                <img src={getTypeImage(getType2())} /> 
                </>
            )
        } else {
            return(
                <>
                <img src={getTypeImage(getType1())} /> 
                </>
            )
        }
    }
    const handleClick = () => {
        console.log(id);
        new Audio(data.cries.latest).play();
        pushNewClick(id);
    }
    return (
        <div className='card'>
            <div className="card-name">
                <h4 className='card-title'>#{getNum() + ':'} {getName()}</h4>
                <div className="card-image"
                    onClick={handleClick}
                >
                    <img src={getSprite()}></img>
                </div>
            </div>
            <div className='card-footer'>
                {displayTypeImages()}
                
            </div>
        </div>
    )
}

export default Card;