import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/grade_predictor.png'

export default function Header() {
  return (
    <header className='header'>
      <div className="logo-section">
        <img src={logo} alt="Logo" className='logo-img' />
        <span className="logo-text">Grade Predictor</span>
      </div>
      <nav className="nav-buttons">
      <Link className="nav-button" to="/">HOME</Link>
      <Link className="nav-button" to="/about">ABOUT</Link>
      </nav>
    </header>
  );
}
