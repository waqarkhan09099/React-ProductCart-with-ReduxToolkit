import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import {useDispatch } from 'react-redux'
import {cartActions} from '../../Store/CartSlice'

const ProductItem = (props) => {
  const { title, price, description ,id } = props;
  const dispatch = useDispatch()
  const addItemHandler=()=>{
    console.log("clicked!!")
    dispatch(cartActions.addItemtoCart({
      id,
      title,
      price
    }))
  }
  return (
    <li className={classes.item} id={id} key={id}>
      <Card>
        <header >
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItemHandler} >Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
