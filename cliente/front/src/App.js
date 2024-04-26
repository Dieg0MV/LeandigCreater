import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login  from "./componentes/log.jsx";

export default function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Login/>}/>
      </Routes>
    </BrowserRouter>
   
  
)}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
