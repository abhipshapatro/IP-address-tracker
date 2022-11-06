
import React from 'react'
import InputBox from './InputBox'

const Header = () => {
  return (
    <div className="flex flex-col bgImage">
      <div className='flex items-center justify-center'>
        <h1 className="font-bold text-white text-4xl mt-5">
          IP Address Tracker
        </h1>
      </div>
      <InputBox />
    </div>
  )
}

export default Header
