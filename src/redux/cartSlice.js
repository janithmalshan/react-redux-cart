import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        showSuccess: false,
        showError: false,
    },
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.cart.find((item) => item.id === action.payload.id);
            if (itemInCart) {
                return
            } else {
                state.cart.push({...action.payload});
                console.log('selec', action.payload.id)
            }
        },
        removeItem: (state, action) => {
            const removeItem = state.cart.filter((item) => item.id !== action.payload);
            state.cart = removeItem;
        },
        makeStoreEmpty: (state) => {
            state.cart = [];
            state.showSuccess = true
        },
    },
});

export const cartReducer = cartSlice.reducer;
export const {
    addToCart,
    removeItem,
    makeStoreEmpty
} = cartSlice.actions;
