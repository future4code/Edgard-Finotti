import React from 'react'
import {DivHeader, DivIconProfileUser, DivLogo, DiviIconMenu, IconLogo, TextLogo, DivMenu, DivRegisterTravel, ImagemIconRegister, ImageIconLogin} from './stylesHeader'
import { Menu } from '@material-ui/icons'
import rocketIcon from '../../assets/rocket.png'
import iconLoginUser from '../../assets/iconlogin.png'
import { Tooltip } from '@material-ui/core'
import iconRegister from '../../assets/register.png'

export default function Header ({onClickMenu}) {

    return (
        <DivHeader>
      <DiviIconMenu>
        <DivMenu>
            <DivRegisterTravel>
                <Tooltip title="Inscrever-se para Viagem">
                    <ImagemIconRegister src={iconRegister} />
                </Tooltip>
            </DivRegisterTravel>
        </DivMenu>
      </DiviIconMenu>
      <DivLogo>
        <IconLogo src={rocketIcon} />
        <TextLogo>LabeX</TextLogo>
      </DivLogo>
      <DivIconProfileUser>
        <Tooltip title="Login">
            <ImageIconLogin src={iconLoginUser} />
        </Tooltip>
      </DivIconProfileUser>
    </DivHeader>
    )
}