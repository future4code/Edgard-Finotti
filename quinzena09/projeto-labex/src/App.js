import React, { useState } from 'react'
import Header from './components/Header/Header'
import {DivApp, DivInitial, ImageAtronaut, DivTextInitial, DivImageInitial} from './styledApp'
import CssBaseline from '@material-ui/core/CssBaseline';
import imageAstronauta from './assets/astronauta.jpg'
import Login from './components/Login/Login';

function App() {
  const [showLogin, setShowLogin] = useState(false)

  const onClickLogin = () => {
    setShowLogin(!showLogin)
  }

  const contentInitial = <DivInitial >
    <DivTextInitial>
      Encontre as melhores viagens espaciais
    </DivTextInitial>
    <DivImageInitial>
      <ImageAtronaut src={imageAstronauta} />
    </DivImageInitial>
  </DivInitial>
  
  return (
    <React.Fragment>
      <CssBaseline />
      <DivApp>
        <Header 
          clickIconLogin={onClickLogin}
        />
        {showLogin ? <Login /> : contentInitial }
      </DivApp>
    </React.Fragment>
    
  );
}

export default App;
