import './AddItemForm.css'
import {useState} from 'react';
import { useNavigate } from 'react-router';

const AddItemForm = ({dispatch}) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(1);
    const [category, setCategory] = useState('Food');
    const [image, setImage] = useState('https://cdn-icons-png.flaticon.com/');

    const navigate = useNavigate();

    const addItemFunction = e => {
        e.preventDefault();
        alert(`${name} has been added!`);
        dispatch({type:'ADD_ITEM', payload: {name: name, description: description, price: price, category: category, image: image}});
        setAll();
        navigate('/all');
    }

    const setAll = () => {
        setName('');
        setDescription('');
        setPrice('');
        setCategory('');
        setImage('');
    }

    return(
        <>    
            <div className='form'>
                <h2>Add Product</h2>
                <form onSubmit={addItemFunction}>
                    <div>
                        <input placeholder='Item Name' type='text' value={name} onChange={(e)=>setName(e.target.value)}></input>
                    </div>
                    <div>
                        <input placeholder='Description' type='text' value={description} onChange={(e)=>setDescription(e.target.value)}></input>
                    </div>
                    <div>
                        <p>
                            <label htmlFor='price'>Price:</label>
                        </p>
                        <input id='price' placeholder='Price' type='tel' value={price} onChange={(e)=>setPrice(e.target.value)}></input>
                    </div>
                    <div>
                        <select className='select' value={category} onChange={(e)=>setCategory(e.target.value)}>
                            <option value='Food'>Food</option>
                            <option value='Drinks'>Drinks</option>
                            <option value='Snacks'>Snacks</option>
                            <option value='Snacks'>Desserts</option>
                        </select>
                    </div>
                    <div>
                        <input placeholder='Image URL' type='text' value={image} onChange={(e)=>setImage(e.target.value)}></input>
                    </div>

                    <input className='btn' type='submit' value='Add Product'></input>
                </form>
            </div>
        </>
    )
}

export default AddItemForm;