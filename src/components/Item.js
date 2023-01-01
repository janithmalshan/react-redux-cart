import {useDispatch, useSelector} from 'react-redux';
import {addToCart} from '../redux/cartSlice';
import React from "react";

function Item({id, name, odd, event}) {
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    let selected = false

    cart.forEach(item => {
        if (item.id === id) {
            selected = true
        }
    })

    return (
        <div
            className={`item ${selected ? 'item--selected' : ""}`}
            onClick={() =>
                dispatch(addToCart({
                    id, name, odd, event
                }))
            }>
            <div className="item__info">
                <p className="item__title">{name}</p>
                <p className="item__price">{odd}</p>
            </div>
        </div>
    )
}

export default Item
