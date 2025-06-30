import { useEffect, useState } from "react";

import CardList from "./CardList";

function PlayArea() {
const [clicked, setClicked] = useState(null); //Array variable to contain list of ids that player has clicked
const [count, setCount] = useState(0);
const pushNewClick = (newID) => {
    if(clicked == null) {
        const newList = [newID]
        console.log("add New pokemon:", newID)
        setClicked(newList);
        setCount(1);
        return;
    }
    if(clicked.includes(newID)) {
        // change state of playarea to fail
        setCount('Fail');

    } else {
        // add pokemon to list that was clicked
        const newList = clicked;
        newList.push(newID);
        console.log("add New pokemon:", newID)
        setClicked(newList);
        setCount(newList.length);
    }
}

    return(
        <div className="play-area">
            {count}
            <CardList 
                pushNewClick={pushNewClick}
            />
        </div>
    )

}
export default PlayArea;