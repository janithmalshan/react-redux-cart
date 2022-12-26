
function Item({id, name, odd, event_name}) {


    return (
        <div className="item">
            <div className="item__info">
                <p className="item__title">{name}<small><b> {event_name}</b></small></p>
                <p className="item__price">
                    <small>$</small>
                    <strong>{odd}</strong>
                </p>
            </div>
        </div>
    )
}

export default Item
