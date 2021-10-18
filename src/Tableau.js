export default function Tableau({cards, onCardClick}) {

    return <div className="tableau">
        { cards.map(c => <Card key={c.index} card={c} onClick={() => onCardClick(c.index)} />) }
    </div>
}

function Card({card, onClick}) {
    return <button className={`card ${card.faceDown ? 'face-down' : 'face-up'}`} onClick={onClick}></button>
}