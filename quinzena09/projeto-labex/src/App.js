import React, { useState } from 'react'
import Header from './components/Header/Header'
import {DivApp, DivInitial, ImageAtronaut, DivTextInitial, DivImageInitial} from './styledApp'
import CssBaseline from '@material-ui/core/CssBaseline';
import imageAstronauta from './assets/astronauta.jpg'

function App() {
  // const [activeMenu, setActiveMenu] = useState(false)

  // const openMenu = () => {
  //   setActiveMenu(!activeMenu)
  // }

  
  return (
    <React.Fragment>
      <CssBaseline />
      <DivApp>
        <Header />
        <DivInitial >
          <DivTextInitial>
            Venha para sua viagem ao Espaço
          </DivTextInitial>
          <DivImageInitial>
            <ImageAtronaut src={imageAstronauta} />
          </DivImageInitial>
        </DivInitial>
      </DivApp>
    </React.Fragment>
    
  );
}

export default App;
