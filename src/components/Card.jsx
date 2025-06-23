import { useState, useEffect } from 'react'
import Zorua from '../assets/Zorua.png'
import {fetchData} from 'api.js'
function Card() {
    const testVar = "Zorua"
    const testUrl = "https://pokeapi.co/api/v2/pokemon/0571/"
    const [exp, setExp] = useState(null)

    const getPokemon = () => {
        
    }
    useEffect(() => {
        let ignore = false;
        setExp(null);
        fetchData(testUrl).then(result => {
            if(!ignore) {
                console.log(result.base_experience)
            }
        });
        return () => {
            ignore = true;
        };
    }, [])
    
    return(
        <div className="card-name">{testVar}
            <div className="card-image">
                <img src={Zorua}></img>
            </div>
        </div>
    )
}

export default Card;