import React from 'react'
import "./Navbar.css";
import { Link } from 'react-router-dom';
import Cartwidget from './CartWidget';

const Navbar = () => {
  return (
    <nav>
        
        <li>
          <img src="https://tse4.mm.bing.net/th?id=OIP.Uo2_GU2GaU1m_ZZV11-yawHaER&pid=Api&P=0&h=180" alt="" />
          <Link className='title' to="/">SITIO WEB</Link>
        </li>
        <ul>
            <li>
              <Link to="/about">Acerca</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/services">Servicios</Link>
            </li>
            <li>
              <Link to="/contact">Contactos</Link>
            </li>
            <li>
              <Link to="/carrito"><Cartwidget/></Link>
            </li>
        </ul>    
    </nav>
  );
};

export default Navbar;
