import { useState } from 'react';
import './App.css';
import GetCity from './components/getCity/GetCity';
import Home from './components/home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  const [data1, setData] = useState(null);
  function handleData(data1) {
    setData(data1);
  }
  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home onData={handleData}/> } />
        <Route path="getCity" element={ <GetCity data1={data1}  /> } />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
