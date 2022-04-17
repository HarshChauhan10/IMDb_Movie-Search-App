import React from 'react'
import '../styles/NavBar.css'

export default function NavBar({setInputValue,inputValue,search}) {
    console.log(inputValue);
  return (
    <div className='navbar'>
        <span className='heading'>MOVIE DB</span>
        <input className='search-bar'
        type="text"
        onChange={(e)=>{
            setInputValue(e.target.value);
        }}
        onKeyPress={search}
        placeholder='Search....'/>
    </div>
  )
}
