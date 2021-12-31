import {createSlice} from '@reduxjs/toolkit';

const UiSlice=createSlice({
    name:'Show Cart',
    initialState:{
        cartIsVisible:false,
        showNotificaion:false,
        title:'demo',
        message:'demo',
        bgcolor:"none"

    },
    reducers:{
        showCart(state){
            if(state.cartIsVisible===false){
                state.cartIsVisible=true;
                
            }
            else{
                state.cartIsVisible=false
            }
        },
        notificationShow(state){
            state.showNotificaion=true
        },
        notificationSuccess(state){
            state.title='Success!!!';
            state.message="Send Cart Data Successfully"            
        },
        notificationPending(state){
            state.title='Sending..';
            state.message="Sending Cart Data"            
            state.bgcolor="lightblue"
        },
        notificationError(state,action){
            const errorStatus=action.payload
            state.title='Error!!!';
            state.message=`Error status is ${errorStatus}`            
            state.bgcolor='maroon'
        }
    }
})

export const uiSliceActions=UiSlice.actions;

export default UiSlice.reducer;