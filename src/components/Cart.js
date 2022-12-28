import Total from "./Total";
import CartItem from "./CartItem";
import React from "react";
import {useSelector} from "react-redux";

function Cart() {
    const cart = useSelector((state) => state.cart)
    return (
        <div>
            <h2>🛒 Cart</h2>
            <Total />
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
            <button className="item__btn block" onClick={() => {}}>Place Bet</button>
        </div>
    )
}

export default Cart
