import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector , useDispatch } from 'react-redux'
import Notification from './components/UI/Notification'
import React, { useEffect } from 'react';
import sendCartData from './Store/NotificationSlice'



function App() {
  const dispatch = useDispatch()
  let initalcondi=false
  const cart = useSelector(state => state.cartSlice.items)
  const totalPrice = useSelector(state => state.cartSlice.totalPrice)
  const notification = useSelector(state => state.cartUi.showNotification)
  const totalQuantity = useSelector(state => state.cartSlice.totalQuantity)
  const showCart = useSelector(state => state.cartUi.cartIsVisible)
  const data = { cart, totalPrice, totalQuantity }
  useEffect(() => {
      if(initalcondi===false){
        initalcondi=true
        return
      }
      dispatch(sendCartData(data))
  }, [cart,dispatch])


  return (
    <>
      {notification && <Notification />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
