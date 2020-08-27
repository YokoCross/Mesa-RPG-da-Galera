import React from 'react'

import '../css/styles.css'
import Header from './pages/header/header'
import HomeControler from './controller/homeControler/homeControler'

function App() {
  return (
    <>
      <Header />
      <div className='global-body'>
        <HomeControler/>
      </div>
    </>
  );
}

export default App;
