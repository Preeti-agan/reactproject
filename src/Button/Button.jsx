import React from 'react'
import Data from './Data/Data'

const Button = ({menuitems,filterItems,setItems}) => {
  return (
    <>
    <div className='d-flex justify-content-center'>
      {menuitems.map(val=>(
        <button className='btn-dark text-white p-1 px-2 mx-5 btn fw-bold'
        onClick={()=>filterItems(val)}>
            
            {val}
        </button>
      ))}
      <div className='btn-dark text-white p-1 px-2 mx-5 btn fw-bold'
      onClick={()=>setItems(Data)}>
        All
      </div>
    </div>
    </>
  )
}

export default Button;
