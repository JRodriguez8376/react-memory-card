import { useEffect, useState } from "react";

import CardList from "./CardList";
import GameMenu from "./GameMenu";

function PlayArea() {
    const [clicked, setClicked] = useState(null); //Array variable to contain list of ids that player has clicked
    const [gameState, setGameState] = useState(false);
    const [count, setCount] = useState(0);
    const [loadImages, setLoadImages] = useState(false);

    const pushNewClick = (newID) => {
        if (clicked == null) {
            const newList = [newID]
            console.log("add New pokemon:", newID)
            setClicked(newList);
            setCount(1);
            return;
        }
        const newList = clicked;
        if (clicked.includes(newID)) {
            // change state of playarea to fail
            setGameState(false);
        }
            newList.push(newID);
            console.log("add New pokemon:", newID)
            setClicked(newList);
            setCount(newList.length); 
    }
    const showGame = () => {

        
        if(gameState) {
        return(
            <>
            {count}
            <CardList
                pushNewClick={pushNewClick}
                pokemonSelected={clicked}
                loadImages={loadImages}
                setLoadImages={setLoadImages}
            />
            </>
        )               
    } else {
        return(
            <GameMenu
                setGameState={setGameState}
                count={count}
                setCount={setCount}
                clicked={clicked}
                setClicked={setClicked}
            >

            </GameMenu>
        )
    }
    }
    return (
        <div className="play-area">
            
            {
            showGame()
            }
        </div>
        
    )

}
export default PlayArea;