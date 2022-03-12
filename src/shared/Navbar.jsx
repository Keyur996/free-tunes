import React, { useState } from "react";
import { ProSidebar, Menu, MenuItem, SidebarFooter, SidebarContent } from "react-pro-sidebar";
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiMusic } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { BiCog } from "react-icons/bi";
import "react-pro-sidebar/dist/css/styles.css";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const meneList = [
  { to: "/", name: 'Home', icon: <FiHome />, active: true },
  { to: "/", name: 'Library', icon: <FaList />, active: false },
  { to: "/", name: 'Favourites', icon: <FaRegHeart />, active: false },
  { to: "playlistlist", name: 'PlayLists', icon: <AiOutlinePlus />, active: false },
  { to: "/", name: 'Settings', icon: <BiCog />, active: false },
]

const Navbar = () => {
  const [menuCollapse, setMenuCollapse] = useState(true);
  let sideNavWidth = menuCollapse ? '5%' : '15%';
  return ( 
    <div id="header" style={{ 'width': sideNavWidth }}>
        <ProSidebar collapsed={menuCollapse} onMouseEnter={()=> setMenuCollapse(false)} onMouseLeave ={()=>setMenuCollapse(true)} >
            <SidebarContent>
              <Menu iconShape="square">
                {meneList.map((_menu) => {
                    return (
                    <MenuItem key={_menu.name} active={_menu.active} icon={_menu.icon}>
                        <Link to={_menu.to}>{_menu.name}</Link>
                    </MenuItem>
                    )
                })}
              </Menu>
            </SidebarContent>
            <SidebarFooter>
                <Menu iconShape="square">
                    <MenuItem icon={<FiMusic />}>
                      <Link to="/">Free Tunes</Link>
                    </MenuItem>
                </Menu>
            </SidebarFooter>
        </ProSidebar>
    </div> 
  );
};

export default Navbar;