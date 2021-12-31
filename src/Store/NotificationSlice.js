import { uiSliceActions } from './UiSlice'
import { useSelector  } from 'react-redux'

const NotificationStatus = (cartData) => {
    const cart = useSelector(state => state.cartSlice.cart)
    return async (dispatch) => {
        dispatch(uiSliceActions.notificationShow())

        const showNotification = async (cartData) => {
            const responce = await fetch('https://add-cart-cec6d-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify(cart)

            })

            if (!responce) {
                throw new Error("Something went Wrong")
            }
            dispatch(uiSliceActions.notificationSuccess())
            const data = await responce.json()
            return data;
        }
        try {
            showNotification()
        }
        catch (error) {
            dispatch(uiSliceActions.notificationError)
        }
    }
}


export default NotificationStatus;

