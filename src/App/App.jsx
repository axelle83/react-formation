import React, { useEffect, useState } from "react";
import "./App.css";
import FlexHGrow from "./components/layouts/FlexHGrow/FlexHGrow";
import FlexWGrow from "./components/layouts/FlexWGrow/FlexWGrow";
import Header from "./components/uis/Header/Header";
import Navbar from "./components/uis/Navbar/Navbar";
import MemeSVGViewer from "./components/uis/MemeSVGViewer/MemeSVGViewer";
import Footer from "./components/uis/Footer/Footer";
import MemeForm from "./components/functionnals/MemeForm/MemeForm";


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
    console.log('didUpdate sur effect', counter);
  }, [counter])
  //const [userState, setUserState] = useState({name:"dd",value:0});
  return (
    <div className="App">
      <FlexHGrow>
        <Header/>
        <Navbar/>
        <FlexWGrow>
          <MemeSVGViewer/>
          <MemeForm/>
        </FlexWGrow>
        <Footer/>
      </FlexHGrow> 
    </div>
  );
}


export default App;