import React from "react";
import './App.css';
import Routes from "./Routes/Routes";
import { auth } from './firebase'


function App() {
console.log(auth)
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
