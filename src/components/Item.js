import { useDispatch } from 'react-redux';
import {addToCart} from '../redux/cartSlice';

function Item({id, name, odd, event_name}) {

    const dispatch = useDispatch()

    return (
        <div className="item" id={id}>
            <div className="item__info">
                <p className="item__title">{name} - {event_name}</p>
                <p className="item__price">
                    <small>$</small>
                    <strong>{odd}</strong>
                </p>
            </div>
            {/*TODO: click func to the card, disable cliked items*/}
            <button
                className="item__btn"
                onClick={() =>
                    dispatch(addToCart({
                        id, name, odd, event_name
                    }))
                }>Add
            </button>
        </div>
    )
}

export default Item
