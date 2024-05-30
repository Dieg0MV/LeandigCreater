import "./style/home.css";
import { Sidebar, Menu, SubMenu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
export default function Home() {

 return(
  <div className="content">
    <nav>
      <h1>Home</h1>
    </nav>

    <div className="body">
      <Sidebar className="bar">
        <Menu>
          <SubMenu label="Chats">
            <MenuItem> MS </MenuItem>
            <MenuItem> WSp </MenuItem>
          </SubMenu>
          <MenuItem> Dashboard </MenuItem>
          <MenuItem component={<Link to="/maker"/>}> LandingMaker </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  </div>
)}