import React from "react";

function Button(props) {
    console.log(props);
    return (
    <button 
        className="Button" 
        onClick={(evt) => {
            // traitement de l'event préalable propre au composant
            console.log(evt);
            // déclenchement de le fonction envoyée par les props 
            props.onbuttonclick("coucou");
        }} 
    >
        {props.text}</button>);    
}

/*const Button = (props) => {
    return <button>Benjamin</button>
}*/

/*const Button = (props) => <button>Benjamin</button>;*/

export default Button;