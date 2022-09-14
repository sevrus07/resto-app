import './Navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div className='navbar'>
            <Link to= '/'><img src='https://cdn-icons-png.flaticon.com/512/214/214817.png' alt='home' title='home'></img></Link>
            <Link to= '/all'><img src='https://cdn-icons.flaticon.com/png/512/6017/premium/6017916.png?token=exp=1659976728~hmac=a5a8ff4dd87856cec00ab2d7e6df1ca1' alt='all' title='all'></img></Link>
            <Link to= '/add-item'><img src='https://cdn-icons.flaticon.com/png/512/3638/premium/3638998.png?token=exp=1659976662~hmac=baa892b72bbef19e06d1f3b04bb08d2a' alt='add' title='add'></img></Link>
            <Link to= '/cart'><img src='https://cdn-icons-png.flaticon.com/512/2448/2448765.png' alt='cart' title='cart'></img></Link>

        </div>
    )
}
export default Navbar;