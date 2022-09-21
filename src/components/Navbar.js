import './Navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div className='navbar'>
            <Link to= '/'><img src='https://cdn-icons-png.flaticon.com/512/214/214817.png' alt='home' title='home'></img></Link>
            <Link to= '/all'><img src='https://cdn-icons-png.flaticon.com/512/3638/3638998.png' alt='all' title='all'></img></Link>
            <Link to= '/add-item'><img src='https://cdn-icons-png.flaticon.com/512/3457/3457838.png' alt='add' title='add'></img></Link>
            <Link to= '/cart'><img src='https://cdn-icons-png.flaticon.com/512/2448/2448765.png' alt='cart' title='cart'></img></Link>

        </div>
    )
}
export default Navbar;