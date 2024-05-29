import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Login from "./componentes/log.jsx";
import Home  from "./componentes/home.jsx";
import Maker from './componentes/maker.jsx';
import Sheet from './componentes/landis.jsx';

export default function App() {
  return (
   <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element= {<Login/>}/>
        <Route path='/login/home' element={<Home/>}/>
        <Route path='/maker' element={<Maker/>}/>
        <Route path='/sheets' element={<Sheet/>}/>
      </Routes>
      </BrowserRouter>
    </div>
)}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
