import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { selectSidebarStatus, setSidebarOff, setSidebarOn } from '../../redux/store/sidebarSlice';
import './Navbar.css';

const Navbar = () => {
  const dispatch = useDispatch();
  const sidebarStatus = useSelector(selectSidebarStatus);

  return (
    <div className="navbar-wrapper">
      <div className='container'>
        <div className='navbar-content'>
          <div className='brand-and-toggler'>
            <Link to="/home" className="navbar-brand">BRO <span>GAMES</span></Link>
            <button type='button' className='navbar-show-btn' onClick={() => dispatch(setSidebarOn())}>
              <HiOutlineMenuAlt3 size={25} />
            </button>
          </div>

          <div className={`navbar-collapse ${sidebarStatus ? "show" : " "}`}>
            <button type="button" className='navbar-hide-btn' onClick={() => dispatch(setSidebarOff())}>
              <MdClose size={25} />
            </button>

            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link to="/home" className='nav-link'>home</Link>
              </li>
              <li className='nav-item'>
                <Link to="/games" className='nav-link'>games</Link>
              </li>
              <li className='nav-item'>
                <Link to="/" className='nav-link'>logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
