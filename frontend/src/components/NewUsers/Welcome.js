import React from 'react'

import "../../CSS/welcome.css";
import Button from '../Button/Button';

function Welcome() {
    return (
      <div>
        
        <h1 className="w_text">Unlimited movies, TV shows and more.</h1>

        <Button
        content="Get Started >"
        height="2"
        width="10"
        margin="auto"
        fontsize="2"
        padding="3% 0"
        />
        
      </div>
    );
}

export default Welcome
