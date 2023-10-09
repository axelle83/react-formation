import React from "react";
import "./App.css";
import Button from "./components/uis/Button/Button";

function App() {
  return (
    <div className="App">
      Hello React
      <hr />
      <Button 
        onbuttonclick={(param) => {
          console.log("action", param);
        }}
        children="test"
      />
      <Button text="Annuler">
        <img alt="img" src="https://cdn3.iconfinder.com/data/icons/miscellaneous-80/60/check-256.png" />
        Coucou
      </Button>
      <Button text="Benjamin" />
      <Button />
    </div>
  );
}


export default App;