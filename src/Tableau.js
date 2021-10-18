export default function Tableau({cards, onCardClick, clicks, onClicksClick}) {
    return <div className="tableau">
        { cards.map(c => <Card key={c.index} card={c} onClick={() => onCardClick(c.index)} />) }
        <button className="clicks" onClick={onClicksClick}>{clicks.value}</button>
    </div>
}

function Card({card, onClick}) {
    return <button type="# of clicks" className={`card ${card.faceDown ? 'face-down' : 'face-up'}`} onClick={onClick}></button>
}