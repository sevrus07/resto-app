import './HomePage.css';
import { useNavigate } from 'react-router';
import MyImage from './Images/excefullcolor.png'

const HomePage = () => {

    const navigate = useNavigate();

    return(
        <div className='home'>
            <h1>Welcome to Excellion's Pub!</h1><br/>
                <div className='main-content'>
                      <img src={MyImage} alt='design'></img>  
                </div><br/><br/>
            <h3>Want to taste a bit of heaven? Don't worry you'll only find hell here.</h3><br/><br/>
            <button onClick={()=>navigate('/all')}>Try if you dare!</button>
        </div>
    )
}

export default HomePage;