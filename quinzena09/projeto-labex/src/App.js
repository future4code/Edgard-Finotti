import React, { useState } from 'react'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import {DivApp} from './styledApp'
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  const [activeMenu, setActiveMenu] = useState(false)

  const openMenu = () => {
    setActiveMenu(!activeMenu)
  }

  console.log("activeMenu", activeMenu)
  return (
    <React.Fragment>
      <CssBaseline />
      <DivApp>
        <Header 
          onClickMenu={openMenu}
        />
        {activeMenu && <Menu />}
      </DivApp>
    </React.Fragment>
    
  );
}

export default App;
