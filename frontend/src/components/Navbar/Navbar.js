import React,{useState} from 'react'
import Button from '../Button/Button';
import logo from "../../images/logo.png"
import { Link } from 'react-router-dom';
function Navbar() {
  const [switchlogin,setSwitchlogin]=useState(false);
    const signinclick = () => {
      setSwitchlogin(true)
    };
    return (
      <div className='w_upperbar'>
        <img className='w_img' src={logo} alt='logo' />
        
        <Link to="/sigin" >
        <Button content='Sign In' handleevent={signinclick}/>
        </Link>
      </div>
    );
}

export default Navbar
