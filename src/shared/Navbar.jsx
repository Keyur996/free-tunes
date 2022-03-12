import React, { useState } from "react";

import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiMusic, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { BiCog } from "react-icons/bi";


import "react-pro-sidebar/dist/css/styles.css";
import "../styles/Navbar.css";


const Header = () => {

    const [menuCollapse, setMenuCollapse] = useState(true)
   
    return (
        
            <div id="header">
                <ProSidebar collapsed={menuCollapse}onMouseEnter={()=>setMenuCollapse(false)} onMouseLeave ={()=>setMenuCollapse(true)} >
                    <SidebarContent>
                        <Menu iconShape="square">
                            <MenuItem active={true} icon={<FiHome />}>
                                Home
                            </MenuItem>
                            <MenuItem icon={<FaList />}>Library</MenuItem>
                            <MenuItem icon={<FaRegHeart />}>Favourite</MenuItem>
                            <MenuItem icon={< AiOutlinePlus  />}>Creat PlayListy</MenuItem>
                            <MenuItem icon={<BiCog />}>Settings</MenuItem>
                        </Menu>
                    </SidebarContent>
                    <SidebarFooter>
                        <Menu iconShape="square">
                            <MenuItem icon={<FiMusic />}>Free-Tunes</MenuItem>
                        </Menu>
                    </SidebarFooter>
                </ProSidebar>
            </div>
       
    );
};

export default Header;