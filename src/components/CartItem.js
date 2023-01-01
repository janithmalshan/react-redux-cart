import { removeItem} from '../redux/cartSlice'
import { useDispatch } from 'react-redux'

function CartItem({id, name, odd, event}) {
    const dispatch = useDispatch()

    return (
        <div className="cartItem">
            <div className="cartItem__info">
                <p className="cartItem__title">
                    {name}
                    <span className="cartItem__title--event">{event}</span>
                </p>
                <p className="cartItem__price">{odd}</p>
            </div>
            <button
                className='cartItem__btn'
                onClick={() => dispatch(removeItem(id))}>
                Remove
            </button>
        </div>
    )
}

export default CartItem
