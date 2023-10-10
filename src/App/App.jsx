import React, { useEffect, useState } from "react";
import "./App.css";
import FlexHGrow from "./components/layouts/FlexHGrow/FlexHGrow";
import FlexWGrow from "./components/layouts/FlexWGrow/FlexWGrow";
import Header from "./components/uis/Header/Header";
import Navbar from "./components/uis/Navbar/Navbar";
import { MemeSVGViewer, emptyMeme } from "orsys-tjs-meme";
import Footer from "./components/uis/Footer/Footer";
import MemeForm from "./components/functionnals/MemeForm/MemeForm";


function App() {
  return (
    <div className="App">
      <FlexHGrow>
        <Header/>
        <Navbar/>
        <FlexWGrow>
          <MemeSVGViewer basePath="" meme={emptyMeme}/>
          <MemeForm/>
        </FlexWGrow>
        <Footer/>
      </FlexHGrow> 
    </div>
  );
}

export default App;