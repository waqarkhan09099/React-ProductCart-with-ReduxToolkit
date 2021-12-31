import React from 'react';
import { createSlice } from '@reduxjs/toolkit'

const cartNewItemsSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalQuantity: 0,
        totalPrice: 0
    },
    reducers: {
        addItemtoCart(state, action) {
            const newItem = action.payload
            const existingItems = state.items.find(item => item.id === newItem.id)
            if (!existingItems) {
                state.items.push(
                    {
                        id: newItem.id,
                        title: newItem.title,
                        price: newItem.price,
                        quantity: 1
                    }
                )
                state.totalQuantity+=1
                state.totalPrice+=newItem.price

            }
            else {
                existingItems.quantity++;
                state.totalPrice += existingItems.price;

            }
        },
        removeItemtoCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id)
            if (existingItem === 1) {
                state.items.filter(item => item.id !== id)
                state.totalPrice -= existingItem.price
                state.totalQuantity -= existingItem.quantity
            }
            else {
                existingItem.quantity--;
                state.totalPrice -= existingItem.price;
            }

        }
    }
})

export const cartActions = cartNewItemsSlice.actions;

export default cartNewItemsSlice.reducer;

