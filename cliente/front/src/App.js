import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Login from "./componentes/log.jsx";
import Home  from "./componentes/home.jsx";
import Maker from './componentes/maker.jsx';

export default function App() {
  return (
   <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/maker' element={<Maker/>}/>
      </Routes>
      </BrowserRouter>
    </div>
)}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);