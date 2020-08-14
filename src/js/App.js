import React from 'react'

import '../css/styles.css'
import Header from './view/header/header'
import HomeControler from './controller/homeControler/homeControler'

function App() {
  return (
    <>
      <Header />
      <div className='global-body'>
        <HomeControler></HomeControler>
      </div>
    </>
  );
}

export default App;
