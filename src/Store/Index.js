import React from 'react';
import {configureStore} from '@reduxjs/toolkit'
import uiReducer  from './UiSlice'
import cartReducer from './CartSlice'



const store=configureStore({
    reducer:{cartUi:uiReducer,cartSlice:cartReducer}
})

export default store;