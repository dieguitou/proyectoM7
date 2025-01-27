import { Link } from 'react-router';
import UserDrow from './UserDrow/UserDrow';

const Navigator = () => {
    return (
        <div className='container'>
            <nav className="navbar">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/login" className="nav-link">Login</Link>
                        <Link to="/counter" className="nav-link">Counter</Link>
                        <Link to="/think" className="nav-link">Think</Link>
                        <Link to="/products" className="nav-link">Product</Link>
                        <Link to="/about" className="nav-link">About</Link>
                    </div>

                    <UserDrow />

                </div>
            </nav>

        </div>
    );
}

export default Navigator;