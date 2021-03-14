import React, {useEffect, useState} from 'react'
import {DivHeader, DivIconProfileUser, DivLogo, DiviIconMenu, IconLogo, TextLogo, DivMenu, DivRegisterTravel, ImagemIconRegister, ImageIconLogin} from './stylesHeader'
import { Menu } from '@material-ui/icons'
import rocketIcon from '../../assets/rocket.png'
import iconLoginUser from '../../assets/iconlogin.png'
import { Tooltip } from '@material-ui/core'
import iconLogin from '../../assets/iconlogin.png'
import iconRegister from '../../assets/register.png'
import iconLogout from '../../assets/iconLogout.png'
import { goToLoginUser, goToHomePage, goToRegisterToTravel } from '../routes/Coordinator'
import { useHistory } from 'react-router'

export default function Header ({token}) {
  const history = useHistory();
  const [ tokenLabex, setTokenLabex ] = useState(token)

  useEffect(() => {
    (window.localStorage.getItem("tokenLabex") !== undefined && window.localStorage.getItem("tokenLabex") !== "")  
      ? setTokenLabex(window.localStorage.getItem("tokenLabex")) 
      : setTokenLabex("")
  },[token ])

  const logoutUser = () => {
    window.localStorage.setItem("tokenLabex", "" )
    setTokenLabex("")
  }

  console.log("tokenLabex", tokenLabex)
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
      { (tokenLabex === "" || tokenLabex === undefined) ?  
        <Tooltip title="Login" onClick={() => goToLoginUser(history)}>
          <ImageIconLogin src={iconLogin} />
        </Tooltip>
        :
        <Tooltip title="Logout" onClick={logoutUser}>
          <ImageIconLogin src={iconLogout} />
        </Tooltip>
      }
      
    </DivIconProfileUser>
  </DivHeader>
  )
}