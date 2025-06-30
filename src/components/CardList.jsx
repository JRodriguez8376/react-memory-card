import Card from "./Card";
import crypto from 'crypto';
function CardList({pushNewClick}) {

    
    const testUrlIds = Array.from({length: 10}, () => Math.floor(Math.random() * (151-1) + 1));

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