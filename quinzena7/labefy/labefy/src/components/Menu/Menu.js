import React from 'react'
import {DivisaoMenu, ConteudoMenu, ItemMenu} from './stylesMenu'



const  Menu = (props) => {


    const componenteMenu = props.itemsMenu.map((item, index) => {
        return <ConteudoMenu key={index}>
            <ItemMenu onClick={() => props.onClickMenu(item)}>{item}</ItemMenu>
        </ConteudoMenu>
    })
    

    return (
      <DivisaoMenu>
          {componenteMenu}
      </DivisaoMenu>
    );
  }
  
  export default Menu;