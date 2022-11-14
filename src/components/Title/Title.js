import React from "react";
import classes from "../Title/Title.module.css"

    const Title = (props) => {
        const titleCss=`${classes.font} bg-primary text-center rounded text-white`;
        return(           
                
                <h1 className={titleCss}>{props.children}</h1>
            
        )}


export default Title;