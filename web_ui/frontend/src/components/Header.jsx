import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header className='header'>
      <Link className="nav-button" to="/">HOME</Link>
      <Link className="nav-button" to="/about">ABOUT</Link>
    </header>
  );
}
