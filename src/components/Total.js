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
                <p className="total__p">
                    total
                    : <strong>${getTotal().totalPrice.toFixed(2)}</strong>
                </p>
            </div>
        </div>
    )
}

export default Total
