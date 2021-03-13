import React from 'react'
import {DivHeader, DivIconProfileUser, DivLogo, DiviIconMenu, IconLogo, TextLogo} from './stylesHeader'
import { Menu } from '@material-ui/icons'
import rocketIcon from '../../assets/rocket.png'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import { Tooltip } from '@material-ui/core'

export default function Header ({onClickMenu}) {

    return (
        <DivHeader>
      <DiviIconMenu>
        <Tooltip title="Menu" onClick={onClickMenu} >  
          <Menu  
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
    )
}