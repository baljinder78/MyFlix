import React from 'react';
import "../../CSS/button.css"
function Button(props) {
  const st = {
    height: props.height + 'em',
    width: props.width + 'em',
    margin:props.margin,
    fontSize:props.fontsize+"em",
    
  };
  const stp = {
    padding: props.padding,
  };

  const handle=()=>
  {
      if (props.handleevent()) {props.handleevent()};
  }
  return (
    <div className='button_' style={st} onClick={handle}>
      <p className="button_text" style={stp}>{props.content}</p>
    </div>
  );
}

export default Button;
