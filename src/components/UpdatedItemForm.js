import './UpdatedItemForm.css'
import {useState} from 'react';
import { useNavigate } from 'react-router';

const UpdatedItemForm = ({item, dispatch}) => {
    const [name, setName] = useState(item.name);
    const [description, setDescription] = useState(item.description);
    const [price, setPrice] = useState(item.price);
    const [category, setCategory] = useState(item.category);
    const [image, setImage] = useState(item.image);

    const navigate = useNavigate();

    const updateItemFunction = e => {
        e.preventDefault();
        dispatch({type:'UPDATE_ITEM', payload: {id: item.id, name: name, description: description, price: price, category: category, image: image}});
        clearAll();
        navigate('/all');
    }

    const clearAll = () => {
        setName('');
        setDescription('');
        setPrice('');
        setCategory('');
        setImage('');
    }

    return(
        <div className='form'>
            <h2>Update Product</h2>
            <form onSubmit={updateItemFunction}>
                <div>
                    <input type='text' value={name} onChange={(e)=>setName(e.target.value)}></input>
                </div>
                <div>
                    <input type='text' value={description} onChange={(e)=>setDescription(e.target.value)}></input>
                </div>
                <div>
                    <p>
                        <label htmlFor='price'>Set Price:</label>
                    </p>
                    <input id='price' type='tel' value={price} onChange={(e)=>setPrice(e.target.value)}></input>
                </div>
                <div>
                    <select value={category} onChange={(e)=>setCategory(e.target.value)}>
                        <option value='Food'>Food</option>
                        <option value='Drinks'>Drinks</option>
                        <option value='Snacks'>Snacks</option>
                    </select>
                </div>
                <div>
                    <input type='text' value={image} onChange={(e)=>setImage(e.target.value)}></input>
                </div>

                <input type='submit' value='Update Product'></input>
            </form>
        </div>
    )
}

export default UpdatedItemForm;