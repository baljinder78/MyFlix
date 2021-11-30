import React from 'react';
import Button from '../Button/Button';
import '../../CSS/Signin.css';
import { Link } from 'react-router-dom';
function Signup() {
  return (
    <div className='signin_area'>
      <h1 className='box_title'>Sign up</h1>
      <label className='inp_lable'>Username</label>
      <input type='email' placeholder='Enter your name' className='inp' />
      <label className='inp_lable'>Email</label>
      <input type='email' placeholder='Enter your email' className='inp' />
      <label className='inp_lable'>Password</label>
      <input type='password' placeholder='Enter password' className='inp' />
      
      <Button margin='auto' content='Sign up' />

      <p className='not_member'>
        Already a member yet? <Link to="/sigin"><span className='no_mem'>Sign in</span></Link>
      </p>
    </div>
  );
}

export default Signup;
