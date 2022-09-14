import './ItemCart.css'

const CartCard = ({item, dispatch}) => {
    return(
        <div className='container'>
            <div className='cartcontainer'>
                    <img src={item.image} alt={item.name}/>
                    <p>{item.name.toUpperCase()}</p>
                    <p>Php {item.price}</p>
                    <p>Quantity:</p>
                    <p><button onClick={()=>dispatch({type: 'DECREMENT', 
                            payload: {id:item.id}})}>-
                        </button>
                                {item.quantity}
                        <button onClick={()=>dispatch({type: 'INCREMENT', 
                            payload: {id:item.id}})}>+
                        </button>
                    </p>
                    <button onClick={()=>dispatch({type: 'REMOVE_CART', 
                        payload: {id: item.id}})}>
                            Remove
                    </button>
            </div>
        </div>
    )
}

export default CartCard;