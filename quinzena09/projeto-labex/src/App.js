import React, { useState } from 'react'
import Header from './components/Header/Header'

function App() {
  const [activeMenu, setActiveMenu] = useState(false)

  const openMenu = () => {
    setActiveMenu(!activeMenu)
  }

  console.log("activeMenu", activeMenu)
  return (
    <Header 
      onClickMenu={openMenu}
    />
  );
}

export default App;
