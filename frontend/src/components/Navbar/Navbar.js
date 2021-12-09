import React, { useState,useEffect } from 'react';
import Button from '../Button/Button';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
function Navbar() {
  const [switchlogin, setSwitchlogin] = useState(true);
  const [login,setLogin]=useState(true);
  function random(){

  }

  return (
    <div className='w_upperbar'>
      <Link to='/'>
        {' '}
        <img className='w_img' src={logo} alt='logo' />
      </Link>

      {login?<div>
        
      </div>
      :switchlogin ? (
        <Link to='/sigin'>
          <Button content='Sign In' handleevent={random}/>
        </Link>
      ) : null
    }
    </div>
  );
}

export default Navbar;
