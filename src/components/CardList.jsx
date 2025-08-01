import Card from "./Card";
import '../styles/CardList.css';
function CardList({pushNewClick, pokemonSelected, loadImages, setLoadImages}) {
    const generateUniqueValue = (playerList) => {
        //generate unique value
        //check playerList to find unique value not in range
        //regenerate number if it exists in player array
        // add # to
        //return new array
        let randomList = Array.from({length: 10}, () => Math.floor(Math.random() * (151-1) + 1));
        if(playerList == null) {
            return(randomList);
        }
        let duplicate = true;
        let randomPokemon = Math.floor(Math.random() * (151-1) +1);
        while(duplicate) {
            // generate random value, if it is in clicked array, regenerate
            if(playerList.includes(randomPokemon)) {
                console.log("Dupe Detected, regenerating");
                randomPokemon = Math.floor(Math.random() * (151-1) +1);
                continue;
            }
            duplicate = false;
        }
        
        randomList[Math.floor(Math.random()* (10-1))] = randomPokemon;
        return(randomList);
    }
    const cardLists = generateUniqueValue(pokemonSelected).map(id =>
            <Card 
                key= {self.crypto.randomUUID()} 
                id={id}
                pushNewClick={pushNewClick}>
            </Card>
    );

    return (
        <div className="card-list">
            {cardLists}
        </div>
    )

}

export default CardList;