import { useState } from "react";
import "./style/home.css";
import { Sidebar, Menu, SubMenu, MenuItem } from "react-pro-sidebar";

export default function Home() {
  const [rtl, setRtl] = useState(false);
  const [fileName, setFilename]= useState('')
  const[data, setData]= useState('')

  const make = async (e)=>{
    e.preventDefault();
      try {
        await fetch('http://localhost:4000/api/createlans',{
          method:'POST',
          headers:{
            'Contet-Type':'application/json'
          },
          body:JSON.stringify({fileName, data})
        }.then((res)=>{ 
          return(res)
        }) 
      )
      } catch (error) {
        console.log("error --> ",error)
      }
  }


 
  return(
    <div className="content">
      <nav className="top">
        <h1>Home</h1>
      </nav>

      <div style={{ display: 'flex', height: '100%', direction: rtl ? 'rtl' : 'ltr' }}>
        <Sidebar className="bar">
          <Menu>
            <SubMenu label="Chats">
              <MenuItem> MS </MenuItem>
              <MenuItem> WSp </MenuItem>
            </SubMenu>
            <MenuItem> Dashboard </MenuItem>
            <MenuItem 
            
            > LandingMaker </MenuItem>
          </Menu>
        </Sidebar>
      </div>
    </div>
)}