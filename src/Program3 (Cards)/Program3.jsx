import React from 'react'
import './Program3.css'
const Program3 = () => {
    const programArray=[
        {
            image:"https://images.pexels.com/photos/16948489/pexels-photo-16948489/free-photo-of-young-girl.jpeg?auto=compress&cs=tinysrgb&w=600",
            name:"Jasmine",
            age:"21",
            stream:"Arts",
        },
        {
            image:"https://images.pexels.com/photos/19305920/pexels-photo-19305920/free-photo-of-a-woman-in-a-leather-skirt-leaning-against-a-wall.jpeg?auto=compress&cs=tinysrgb&w=600",
            name:"Alice",
            age:"20",
            stream:"Medical",
        },
        
    ]
  return (
    <div className='program3'>
      {programArray.map((program)=>(

        <div className='program-sub'>
<img className='program-img' src={program.image}></img>
<div className='program-subb'>
<h4 className='program-name'>{program.name}</h4>
<h4 className='program-age'>{program.age}</h4>
<h4 className='program-stream'>{program.stream}</h4>
</div>
            </div>
      ))}
    </div>
  )
}

export default Program3
