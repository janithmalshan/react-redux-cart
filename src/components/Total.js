import {useSelector} from 'react-redux'

function Total() {

    const cart = useSelector((state) => state.cart)

    const getTotal = () => {
        let totalPrice = 0
        cart.forEach(item => {
            totalPrice += item.odd
        })
        return {totalPrice}
    }

    return (
        <div className="total">
            <h2>ORDER SUMMARY</h2>
            <div>
                <h3 className="total__info">
                    Total
                    : <strong>{getTotal().totalPrice.toFixed(2)}$</strong>
                    <div className="total__info--summary">({getTotal().totalPrice.toFixed(2)} X 1$)</div>
                </h3>
            </div>
            <hr />
        </div>
    )
}

export default Total
