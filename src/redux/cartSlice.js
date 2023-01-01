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
            }
        },
        removeItem: (state, action) => {
            const removeItem = state.cart.filter((item) => item.id !== action.payload);
            state.cart = removeItem;
        },
        placeBet: (state) => {
            state.showSuccess = true;
        },
        makeStoreEmpty: (state) => {
            state.showSuccess = false;
            state.cart = [];
        }
    },
});

export const cartReducer = cartSlice.reducer;
export const {
    addToCart,
    removeItem,
    placeBet,
    makeStoreEmpty
} = cartSlice.actions;
