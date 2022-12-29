import {useDispatch} from 'react-redux';
import {addToCart} from '../redux/cartSlice';
import React from "react";

function Item({id, name, odd, event_name}) {

    const dispatch = useDispatch()

    return (
        <div
            className="item item--selected"
            id={id}
            onClick={() =>
                dispatch(addToCart({
                    id, name, odd, event_name
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
