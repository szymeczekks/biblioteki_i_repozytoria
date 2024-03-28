import './Nav.css';
import { useState } from 'react';
import {Link} from 'react-router-dom';

function Nav() {
  const [scrolled, setScrolled] = useState('');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      setScrolled('scrolled');
    } else {
      setScrolled('')
    }
  })

  return (
    <div className={`nav ${scrolled}`}>
      <div className='container'>
        <span><Link to="/">ForumEventum</Link></span>
        <span className='add_new'><Link to="/add-event">Dodaj event +</Link></span>
      </div>
    </div>
  );
}

export default Nav;
