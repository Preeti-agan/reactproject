import React from 'react'
import './program2.css'
const Program2 = () => {
    const newArray=[
        {
           id:'1',
            image_src:'pic1.jpg',
            heading:"Cheese Burger",
            description:"Food provides the essential nutrients for overall health and well-being.",
            price:"12",

        },
        {
          id:'2',
           image_src:'pic2.jpg',
           heading:"Veggy Salad ",
           description:"Food provides the essential nutrients for overall health and well-being.",
           price:"13",

       },
       {
        id:'3',
         image_src:'pic3.jpg',
         heading:"Classic Burger",
         description:"Food provides the essential nutrients for overall health and well-being.",
         price:"16",

     },
     {
      id:'4',
       image_src:'pic4.jpg',
       heading:"Chicken Fry",
       description:"Food provides the essential nutrients for overall health and well-being.",
       price:"10",

   },
        
    ];
  return (
    <div className='mainn'>
        {newArray.map((note)=>(
       <div className="count">
        <div className='count1'>
        <img  className="img1"src={note.image_src}></img>
        </div>
        <div className='count2'>
        <h2 className='h2'>{note.heading}</h2>
        <p className='para'>{note.description}</p>
        <p className='para1'>${note.price}</p>
        </div>
       </div>
      ))}
    </div>
  )
}

export default Program2
