import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase-config'
import './Navbar.css';


function Navbar(){
    const navigate = useNavigate();
    const handleLogout = async () => {
        await signOut(auth);
        navigate('/');
    }
    const handleLost = () => {
        navigate('/main/lost');
    }
    return(

        <header className="header">
            <a href="#">
                <img className="logo" alt="logo-img" src="/images/foundmate-logo.jpg"/>
            </a>

            <nav className="main-nav">
            <ul className="main-nav-list">
                <li><a className="main-nav-link" href="/main/lost">LOST</a></li>
                
                <li><Link className="main-nav-link"  to="">FOUND</Link></li>
                <li><Link className="main-nav-link"  to="/main/account">MY ACCOUNT</Link></li>
                <li><button className="main-nav-link"  onClick={handleLogout}> LOGOUT </button></li>
                {/* <li><a class="main-nav-link nav-cta"  href="#"></a></li> */}

            </ul>
        </nav>     
        </header>

    );
}

export default Navbar;
