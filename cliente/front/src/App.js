import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Login from "./componentes/log.jsx";

export default function App() {
  return (
   <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
)}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
