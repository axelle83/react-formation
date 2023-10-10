import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import style from './Button.module.css';

const Button = (props) => {
    console.log(props);
    const [isClicked, setIsClicked] = useState(false);
    useEffect(() => {
      setTimeout(() => {
        setIsClicked(false);
    },350);
    }, [isClicked])
    return (
        <button 
            type={props.type}
            className={`${style.Button}${isClicked ? " " + style.clicked : ""}`} 
            onClick={(evt) => {
                setIsClicked(true);
                // traitement de l'event préalable propre au composant
                //console.log(evt);
                // déclenchement de le fonction envoyée par les props 
                if(undefined != props.onbuttonclick) {
                    props.onbuttonclick("coucou");
                }
            }} 
        >
            {props.children}
        </button>
    );    
};

Button.propTypes = {
    onbuttonclick: PropTypes.func,
    children: PropTypes.any.isRequired,
    type: PropTypes.oneOf(['submit', 'reset', 'button']),
}

Button.defaultProps={
    type: 'button'
}

export default Button;