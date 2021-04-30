import logo from './Logo.svg';
import {Link} from 'react-router-dom'


const Navbar = () => {
    return(
        <nav>
            <div className="logo">
                {/* <h1>Logo</h1> */}
                <img src={logo} className="App-logo" alt="logo" />
            </div>

            <div>
                <ul className="nav-links">
                     <Link to ='/'><li className="link">Home</li></Link>
                    <Link to ='/users'><li className="link">Users</li></Link>
                    <Link to ='/orders'><li className="link">Orders</li></Link>
                    <Link to ='/about'><li className="link">About</li></Link>
                </ul>
            </div>

            {/* <div className="login-section">
                <li><a className="button" href="http://localhost:3000/">Sign Up</a></li>
                <li><a className="button" href="http://localhost:3000/">Log In</a></li>
            </div> */}
        </nav>
    )
}

export default Navbar;