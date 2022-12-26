import { removeItem} from '../redux/cartSlice'
import { useDispatch } from 'react-redux'

function CartItem({id, name, odd}) {
    const dispatch = useDispatch()

    return (
        <div className="cartItem">
            <div className="cartItem__info">
                <p className="cartItem__title">{name}</p>
                <p className="cartItem__price">
                    <small>$</small>
                    <strong>{odd}</strong>
                </p>
                <button
                    className='cartItem__removeButton'
                    onClick={() => dispatch(removeItem(id))}>
                    Remove
                </button>
            </div>
        </div>
    )
}

export default CartItem
