import React from "react";

function Button(props) {
    console.log(props);
    return (<button className="Button" onClick={(evt) => {
        console.log(evt);
        props.onbuttonclick("coucou");
    }} >{props.text}</button>);    
}

/*const Button = (props) => {
    return <button>Benjamin</button>
}*/

/*const Button = (props) => <button>Benjamin</button>;*/

export default Button;