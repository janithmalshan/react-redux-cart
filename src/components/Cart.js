import Total from "./Total";
import CartItem from "./CartItem";
import { makeStoreEmpty} from '../redux/cartSlice'
import React from "react";
import {useDispatch, useSelector} from "react-redux";

function Cart() {
    const cart = useSelector((state) => state.cart)
    const showSuccess = useSelector((state) => state.showSuccess)
    const dispatch = useDispatch()
    console.log('showSuccess ', showSuccess)
    return (
        <div>
            <h2>🛒 Cart</h2>
            <Total />
            {
                cart.length > 0 && (<div>
                    {cart?.map((item) => (
                        <CartItem
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            event_name={item.event_name}
                            odd={item.odd}
                        />
                    ))}
                    <hr/>
                    <button className="item__btn block" onClick={() => {
                        console.log('00 ', showSuccess)
                        dispatch(makeStoreEmpty())
                    }}>Place Bet</button>

                </div>)
            }
            {
                showSuccess && <h3>success</h3>
            }
        </div>
    )
}

export default Cart
