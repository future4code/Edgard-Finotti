import React from 'react'
import {DivHeader, DivIconProfileUser, DivLogo, DiviIconMenu, IconLogo, TextLogo, DivMenu, DivRegisterTravel, ImagemIconRegister, ImageIconLogin} from './stylesHeader'
import { Menu } from '@material-ui/icons'
import rocketIcon from '../../assets/rocket.png'
import iconLoginUser from '../../assets/iconlogin.png'
import { Tooltip } from '@material-ui/core'
import iconRegister from '../../assets/register.png'
import { goToLoginUser, goToHomePage, goToRegisterToTravel } from '../routes/Coordinator'
import { useHistory } from 'react-router'

export default function Header () {
  const history = useHistory();

  return (
    <DivHeader>
      <DiviIconMenu>
        <DivMenu>
            <DivRegisterTravel>
                <Tooltip title="Inscrever-se para Viagem">
                    <ImagemIconRegister src={iconRegister} onClick={() => goToRegisterToTravel(history) }/>
                </Tooltip>
            </DivRegisterTravel>
        </DivMenu>
      </DiviIconMenu>
      <Tooltip title="Página Inicial">
        <DivLogo onClick={() => goToHomePage(history)}>
          <IconLogo src={rocketIcon} />
          <TextLogo>LabeX</TextLogo>
        </DivLogo>
      </Tooltip>
    <DivIconProfileUser>
      <Tooltip title="Login" onClick={() => goToLoginUser(history)}>
          <ImageIconLogin src={iconLoginUser} />
      </Tooltip>
    </DivIconProfileUser>
  </DivHeader>
  )
}