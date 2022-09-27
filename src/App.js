import Home from "./component/Home"
import Singleele from "./component/Singleele";
import Error from "./component/Error";
import './App.css'
import {  Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
    
      
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="movie/:id" element={<Singleele></Singleele>}/>
        <Route path="*" element={<Error></Error>}/>
        
      </Routes>
    
      
    
    </>
      
  );
}

export default App;
