import React from 'react'
import Button from '../Button/Button'
import "../../CSS/Signin.css"
import { Link } from 'react-router-dom';
function Sigin() {
    return (
      <div className='signin_area'>
          <h1 className="box_title">Sign in</h1>
        <label className='inp_lable'>Email</label>
        <input type='email' placeholder='Enter your email' className='inp' />
        <label className='inp_lable'>Password</label>
        <input type='password' placeholder='Enter password' className='inp' />
        <Button margin="auto" content="Sign in"/>
        <p className="not_member"> not a member yet? <Link to="/signup"><span className="no_mem">Create account</span></Link></p>
      </div>
    );
}

export default Sigin
