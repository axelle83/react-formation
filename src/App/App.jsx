import React, { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/uis/Button/Button";

function App() {
  const [counter, setcounter] = useState(-1);
  // componentDidMount
  useEffect(() => {
    //corps du cycle de vie
    setcounter(0);
    // démontage de composant
    //return () => {
      //effect
      //
    //};
  }, [])
  // componentDidUpdate -> mise à jour counter
  useEffect(() => {
    //corps du cycle de vie
    console.log('didupdate sur effect', counter);
  }, [counter])
  //const [userState, setUserState] = useState({name:"dd",value:0});
  return (
    <div className="App">
      Valeur counter : {counter}
      {/*Valeur counter de userstate : {userState.value}*/}
      <hr />
      <Button 
        onbuttonclick={() => {
          setcounter(counter-1);
          //setUserState({...userState,value:userState.value-1});
          console.log(counter);
        }}
        >
          -1
      </Button>
      <Button 
        text="Annuler"
        onbuttonclick={()=> {
          setcounter(counter+1);
          console.log(counter);
        }}
      >
        +1
      </Button>      
    </div>
  );
}


export default App;