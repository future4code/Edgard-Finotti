import React from 'react'
import { DivImageInitial, DivTextInitial, ImageAtronaut, DivInitial } from './stylesHomePage'
import imageAstronauta from '../../assets/astronauta.jpg'
import Login from '../Login/Login';


function HomePage() {
  
  return (     
    <DivInitial >
        <DivTextInitial>
        Encontre as melhores viagens espaciais
        </DivTextInitial>
        <DivImageInitial>
        <ImageAtronaut src={imageAstronauta} />
        </DivImageInitial>
    </DivInitial>
    
  );
}

export default HomePage;