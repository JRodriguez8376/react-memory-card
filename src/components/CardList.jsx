import Card from "./Card";
import crypto from 'crypto';
function CardList() {

    
    const testUrlIds = Array.from({length: 10}, () => Math.floor(Math.random() * (151-1) + 1));

    const cardLists = testUrlIds.map(id =>
            <Card key= {self.crypto.randomUUID()} id={id}></Card>
    );

    return (
        <div className="card-list">
            {cardLists}
        </div>
    )

}

export default CardList;