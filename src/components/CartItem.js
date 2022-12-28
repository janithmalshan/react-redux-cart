import { removeItem} from '../redux/cartSlice'
import { useDispatch } from 'react-redux'

function CartItem({id, name, odd, event_name}) {
    const dispatch = useDispatch()

    return (
        <div className="cartItem">
            <div className="cartItem__info">
                {/*TODO: show main event name*/}
                <p className="cartItem__title">({event_name} )+{name}</p>
                <p className="cartItem__price">
                    <small>$</small>
                    <strong>{odd}</strong>
                </p>
                <button
                    className='cartItem__btn'
                    onClick={() => dispatch(removeItem(id))}>
                    Remove
                </button>
            </div>
        </div>
    )
}

export default CartItem
