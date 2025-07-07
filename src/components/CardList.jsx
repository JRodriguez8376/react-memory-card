import Card from "./Card";
import '../styles/CardList.css';
function CardList({pushNewClick, pokemonSelected}) {

    
    const testUrlIds = Array.from({length: 10}, () => Math.floor(Math.random() * (151-1) + 1));
    const generateUniqueValue = (playerList, randomList) => {
        //generate unique value
        //check playerList to find unique value not in range
        //push to new array for index 0
        // push random values onto array for index 1-9
        // shuffle array
        //return new array
        if(playerList == null) {
            
        }
    }
    const cardLists = testUrlIds.map(id =>
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