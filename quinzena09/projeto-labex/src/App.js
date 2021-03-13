import React, { useState } from 'react'
import { DivHeader, DivLogo, DiviIconMenu, IconLogo, ImageProfileUser, TextLogo, DivIconProfileUser } from './styledApp'
import ListIcon from '@material-ui/icons/List';
import rocketIcon from './assets/rocket.png'
import profileIcon from './assets/profile-user.png'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Tooltip } from '@material-ui/core';

function App() {
  const [activeMenu, setActiveMenu] = useState(false)

  const openMenu = () => {
    setActiveMenu(!activeMenu)
  }

  console.log("activeMenu", activeMenu)
  return (
    <DivHeader>
      <DiviIconMenu>
        <Tooltip title="Menu" onClick={openMenu}> 
          <ListIcon  
            style={{ fontSize: 30 }}
          />
        </Tooltip>
      </DiviIconMenu>
      <DivLogo>
        <IconLogo src={rocketIcon} />
        <TextLogo>LabeX</TextLogo>
      </DivLogo>
      <DivIconProfileUser>
        <Tooltip title="Login">
          <AccountCircleIcon 
            color="disabled"
            style={{ fontSize: 40 }}
          />
        </Tooltip>
      </DivIconProfileUser>
    </DivHeader>
  );
}

export default App;
