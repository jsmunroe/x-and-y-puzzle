import { useState } from 'react';
import './App.css';
import Tableau from './Tableau';

const initCards = count => Array(count).fill({}).map((e,i) => ({ index: i, faceDown: true }));

function App() {
    const [cardCount, setCardCount] = useState(10);
    const [cards, setCards] = useState(initCards(cardCount))
    const [clicks, setClicks] = useState(0);

    const handleCardClick = index => {
        if (cards[index].faceDown === true) {
            setClicks(clicks => clicks + 1);
            setCards(
                cards.map(c => c.index === index ? {...c, faceDown: false} : c ) // Turn the clicked card face-up.
                     .map(c => c.index === index + 1 ? {...c, faceDown: !c.faceDown} : c) // Toggle the card to the right if it exists.
                );

        } 
    }

    const handleClicksClick = event => {
        setCards(initCards(cardCount));
        setClicks(0);
    }

    const handleCardCountChange = event => {
        const cardCount = event.target.value * 1;
        setCardCount(cardCount);
        setCards(initCards(cardCount));
        setClicks(0);
    }

    return <div className="app">
        <div className="parameters">
            <label>Number of cards: <input type="number" min="1" max="100" value={cardCount} onChange={handleCardCountChange}/></label>
        </div>
        <Tableau cards={cards} onCardClick={handleCardClick} clicks={{value:clicks, set:setClicks}} onClicksClick={handleClicksClick}/>
    </div>;
}

export default App;
