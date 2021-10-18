import { useState } from 'react';
import './App.css';
import Tableau from './Tableau';

const initCards = count => Array(count).fill({}).map((e,i) => ({ index: i, faceDown: true }));

function App() {
    const [cards, setCards] = useState(initCards(10))

    const handleCardClick = index => {
        if (cards[index].faceDown === true) {
            setCards(
                cards.map(c => c.index === index ? {...c, faceDown: false} : c ) // Turn the clicked card face-up.
                     .map(c => c.index === index + 1 ? {...c, faceDown: !c.faceDown} : c) // Toggle the card to the right if it exists.
                );
        }
    }

    return <Tableau cards={cards} onCardClick={handleCardClick}/>;
}

export default App;
