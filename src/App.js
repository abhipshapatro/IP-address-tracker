import React from 'react'
import Header from './Components/Header';
import Map from './Components/Map';

const App = () => {

  return(
    <div className='h-screen w-full'>
      <div className="flex flex-col">
        <Header />
      </div>
      <div className="h-fit w-full">
        <Map />
      </div>
    </div>
  )
}

export default App;
