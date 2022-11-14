import React from "react";

    const Button = (props) => {
    const buttonCss=`${props.myStyle} ${props.css}`;
        return(
        <button className={buttonCss} onClick={props.clic} style={props.selected ? {opacity:1} : {opacity:0.5}}>{props.children}</button>
        )
        }

export default Button;