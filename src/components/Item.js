import { useDispatch } from 'react-redux';
import {addToCart} from '../redux/cartSlice';

function Item({id, name, odd, event_name}) {

    const dispatch = useDispatch()

    return (
        <div className="item" id={id}>
            <div className="item__info">
                <p className="item__title">{name}<small><b> {event_name}</b></small></p>
                <p className="item__price">
                    <small>$</small>
                    <strong>{odd}</strong>
                </p>
            </div>
            <button
                onClick={() =>
                    dispatch(addToCart({
                        id, name, odd, event_name
                    }))
                }>Add to Cart
            </button>
        </div>
    )
}

export default Item
