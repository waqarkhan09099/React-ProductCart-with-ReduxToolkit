import classes from './Notification.module.css'
import { useSelector } from 'react-redux';
const Notification  = () => {
    const title=useSelector(state=>state.cartUi.title)
    const message=useSelector(state=>state.cartUi.message)
    return ( 
        <div className={classes.container}>
            <h3>{title}</h3>
            <h3>{message}</h3>
        </div>
     );
}
 
export default Notification ;