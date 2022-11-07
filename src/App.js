import logo from './logo.svg';
import './App.css';
import {Routes, Route } from "react-router-dom";
import Dashboard from './Component/Dashboard';
import Page from './Component/Page';
import TOC from './Component/TOC';

function App() {
  return (
    <div className='App'>
    
        <Routes>
              <Route index path="/" element={<Dashboard/>}/>   
              <Route index path="/TOC" element={<TOC/>}/>    
          </Routes>
    </div>
  );
}

export default App;
