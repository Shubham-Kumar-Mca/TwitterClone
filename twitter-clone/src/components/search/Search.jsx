import React from 'react'
import {FaSistrix} from 'react-icons/fa'
import './search.css'

function Search() {
  return (
    <>
    <div className='container_search'>
     
        <FaSistrix className='icon_search' />
        <input   type='text' placeholder='Search Twitter' className='Input_search'
            onChange={(e)=>e.target.value}
        />
      </div>
      </>
  )
}

export default Search
