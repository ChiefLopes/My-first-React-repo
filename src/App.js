import React from "react";
import Header from "./components/Header";
import "./index.css";


function App() {
  
  return (
    <div className="App">
     <Header/>
  </div>)
}
  // declaring props
Header.defaultProps = {
    title: "Task Tracker"}



export default App;



