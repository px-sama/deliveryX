import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.items = [...state.items, action.payload]
        },
        removeFromBasket: (state, action) => {
            const index = state.items.findIndex((item) => item.id === action.payload.id)

            let newBasket = [...state.items]

            if (index >= 0) {
                newBasket.splice(index, 1)
            } else {
                console.warn(`can't remove product ()`)
            }

            state.items = newBasket
        },
    },
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions

// Create a selector to access the global state
export const selectBasketItems = (state) => state.basket.items

export const selectBasketItemsWithId = (state, id) =>
    state.basket.items.filter((item) => item.id === id)

export default basketSlice.reducer