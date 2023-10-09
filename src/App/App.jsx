import React from 'react';
import './App.css';
import Button from './components/uis/Button/Button';

function App() {
  return (
    <div className="App">
      Hello React
      <hr/>
      <Button text="Valider" onbuttonclick={(param)=>{console.log('action', param)}} />
      <Button text="Annuler"/>
      <Button text="test"/>
      <Button 
      x={[1,2]} 
      c={{abc:123}} 
      s="cc" 
      n={1} 
      b={true} 
      g={undefined} 
      f={()=> {console.log('test')}}/>
    </div>
  );
}

export default App;
