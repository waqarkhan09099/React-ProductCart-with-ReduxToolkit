import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux'

const Cart = (props) => {
  const addItems = useSelector(state => state.cartSlice.items)
  const total = useSelector(state => state.cartSlice.totalPrice)

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {addItems.map(items => (

          <CartItem
            key={items.id}
            title={items.title}
            quantity={items.quantity}
            price={items.price}
            total={items.price}
            id={items.id}
          />
        ))}
        <h1>Total Price:  {total}$</h1>
      </ul>
    </Card>
  );
};

export default Cart;
