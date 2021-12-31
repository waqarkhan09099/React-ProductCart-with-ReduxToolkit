import classes from './CartButton.module.css';
import {uiSliceActions} from '../../Store/UiSlice'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'

const CartButton = (props) => {
  const dispatch = useDispatch()
  const quantity=useSelector(state=>state.cartSlice.totalQuantity)
  const showCartHandler=()=>{
    dispatch(uiSliceActions.showCart())
  }
  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
