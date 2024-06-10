import { useState } from "react";
import "./style/home.css";
import { Sidebar, Menu, SubMenu, MenuItem } from "react-pro-sidebar";

export default function Home() {
  
  const [fileName, setFilename]= useState('');
  const [data, setData]= useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [showcreat, setShowcreate] = useState(false);
  //const [showFields, setShowFields] = useState(false);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = () => {
    setShowcreate(true);
    handleClose();
  };

  const make = async (e)=>{
    e.preventDefault()
      try {
        const response = await fetch('http://localhost:4000/api/createlans',{
          method:'POST',
          mode:'cors',
          headers:{
           'Content-Type': 'application/json'
          },
          body:JSON.stringify({fileName, data})
        })
        const result = await response.json();
        console.log(result); 

      } catch (error) {
        console.log("error --> ",error)
      }
  };

  return(
    <div className="content">
      <nav className="top">
        <h1>Home</h1>
      </nav>

      <div style={{ display: 'flex', height: '100%' }}>
        <Sidebar className="bar">
          <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          >
            <SubMenu label="Chats">
              <MenuItem> MS </MenuItem>
              <MenuItem> WSp </MenuItem>
            </SubMenu>
            <MenuItem> Dashboard </MenuItem>
            <MenuItem 
              onClick={handleMenuItemClick}
            > LandingMaker </MenuItem>
          </Menu>
        </Sidebar>

        {showcreat && (
        <div className="savelans">
          <form onSubmit={make} method="POST">
          <input 
            type="name"
            placeholder="Nombre de la landi"
            onChange={(e) => setFilename(e.target.value)}
          />
          <input 
          type="text"
          placeholder="Titulo de la landig"
          onChange={(e) => setData(e.target.value)}
          />
          <button> Save </button>
          </form>
         </div>
        )}
      </div>
     </div>
)}
