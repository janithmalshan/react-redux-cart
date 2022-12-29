import { removeItem} from '../redux/cartSlice'
import { useDispatch } from 'react-redux'

function CartItem({id, name, odd, event_name}) {
    const dispatch = useDispatch()

    return (
        <div className="cartItem">
            <div className="cartItem__info">
                <p className="cartItem__title">{name} <small><i>({event_name})</i></small></p>
                <p className="cartItem__price">{odd}</p>
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
