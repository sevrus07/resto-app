import './RestoItem.css'
import { useNavigate } from 'react-router';

const RestoItem = ({ item, dispatch } ) => {

    const navigate = useNavigate();

    const updateFunction = () => {
        dispatch({type: 'FOR_UPDATE', payload: {id: item.id}})
        navigate('/update-item');
    }

    const deleteFunction = () => {
        dispatch({type: 'DELETE_ITEM', payload: {id:item.id}});
        alert(`${item.name} has been deleted!`)
    }

    const addToCartFunction = () => {
        dispatch({type:'ADD_CART', payload: {id: item.id}})
        alert(`${item.name} has been added to cart!`)
    }

    return(
        <div className='container'>
            <div className='content'>
                <img src={item.image} alt={item.name}/>
                <p><strong>{item.name.toUpperCase()}</strong></p>
                <p>{item.description}</p>
                <p><strong>Php {item.price}</strong></p>
                <button onClick={()=>updateFunction()}>Edit</button>
                <button onClick={()=>deleteFunction()}>Delete</button>
                <button onClick={()=>addToCartFunction()}>Add to Cart</button>
            </div>
        </div>            
    )
}

export default RestoItem;