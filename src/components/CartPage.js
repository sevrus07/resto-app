import './CartPage.css'
import ItemCart from './ItemCart';
import { useNavigate } from 'react-router';

const CartPage = ({items, total, dispatch}) => {
    const navigate = useNavigate();

    return(
        <div className='cartcontainer'>
            <div className='cartcontent'>
                
                <h1>My Cart</h1>
            </div>
            

            <div className='cart'>               
                {total===0?'Cart is Empty. Shop now in menu section!' : items.map(item=><ItemCart key={item.id} item={item} dispatch={dispatch}/>)}
                
            </div>
                <div className='total'>
                    <h2>Total: Php {total}</h2>
                    {total!==0 && <button onClick={()=>navigate('/payment')}>Place Order</button>}
                </div>
        </div>
    )
}

export default CartPage;