import React from 'react'
import './Program1.css'
const Program1 = () => {

    const imgArray=[
        {
            images:'https://images.pexels.com/photos/30472381/pexels-photo-30472381/free-photo-of-elegant-male-fashion-portrait-with-moody-lighting.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
        },
        {
            images:'https://images.pexels.com/photos/30472381/pexels-photo-30472381/free-photo-of-elegant-male-fashion-portrait-with-moody-lighting.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
        },{
            images:'https://images.pexels.com/photos/30472381/pexels-photo-30472381/free-photo-of-elegant-male-fashion-portrait-with-moody-lighting.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
        },
        {
            images:'https://images.pexels.com/photos/30472381/pexels-photo-30472381/free-photo-of-elegant-male-fashion-portrait-with-moody-lighting.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
        },
        {
            images:'https://images.pexels.com/photos/30472381/pexels-photo-30472381/free-photo-of-elegant-male-fashion-portrait-with-moody-lighting.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
        },
        {
            images:'https://images.pexels.com/photos/30472381/pexels-photo-30472381/free-photo-of-elegant-male-fashion-portrait-with-moody-lighting.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
        },
    ]
  return (
    <>
    <div className='main'>
        {imgArray.map((index)=>(
        <div className='img'>
        <img src={index.images}/>
        </div>
    ))}
    </div>
    </>
  )
}

export default Program1
