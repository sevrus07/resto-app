import './CategoryPage.css';
import { useParams } from 'react-router';
import {Link} from 'react-router-dom';

import RestoItem from './RestoItem';

const CategoryPage = ({state, dispatch}) => {
    const {category} = useParams();

    return(
        <div className='categorycontainer'>
            <div className='categorycontentlinks'>
                <Link to='/all' className='categorylinks'><img src='https://cdn-icons.flaticon.com/png/512/737/premium/737967.png?token=exp=1659895362~hmac=fe78b19cc3f490501a5461dd4fb37dac' alt='all' title='all'></img></Link>
                <Link to='/food' className='categorylinks'><img src='https://cdn-icons-png.flaticon.com/512/1404/1404945.png' alt='food' title='food'></img></Link>            
                <Link to='/drinks' className='categorylinks'><img src='https://cdn-icons-png.flaticon.com/512/2738/2738730.png' alt='drinks' title='drinks'></img></Link>            
                <Link to='/desserts' className='categorylinks'><img src='https://cdn-icons.flaticon.com/png/512/2770/premium/2770077.png?token=exp=1659895459~hmac=7542d9be5b0acc54961c0c16f025775f' alt='snacks' title='snacks'></img></Link>
            </div><br/>

                <div>
                    <h2>{category.charAt(0).toUpperCase().concat(category.slice(1))}</h2>
                </div>
            <div className='categorycontent'>

                {/* For any category-based link that uses useParams */}
                {state.items.filter(item=>item.category.toLowerCase()===category.toLowerCase()).map(item=> <RestoItem item={item} key={item.id} dispatch={dispatch}/>) }

                {/* For category = all */}
                {category.toLowerCase()==='all' && state.items.map(item=> <RestoItem item={item} key={item.id} dispatch={dispatch} />)}              
            </div>
        </div>
    )
}

export default CategoryPage;