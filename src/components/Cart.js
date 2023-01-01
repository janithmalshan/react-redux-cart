import Total from "./Total";
import CartItem from "./CartItem";
import {makeStoreEmpty, showStatus} from '../redux/cartSlice';
import React from "react";
import {useDispatch, useSelector} from "react-redux";

function Cart() {
    const cart = useSelector((state) => state.cart)
    const showSuccess = useSelector((state) => state.showSuccess)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>🛒 Cart</h2>
            <Total />
            {/*{todo message for no data}*/}
            {
                cart.length > 0 && <div>
                    {cart.map(item => (
                        <CartItem
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            event={item.event}
                            odd={item.odd}
                        />
                    ))}
                    <hr/>
                    <button className="item__btn block" onClick={() => {
                        dispatch(showStatus())
                        setTimeout(() => {
                            dispatch(makeStoreEmpty())
                        }, 5000)
                    }}>{showSuccess ? `Success ✔` : 'Place Bet'}</button>
                </div>
            }
        </div>
    )
}

export default Cart
