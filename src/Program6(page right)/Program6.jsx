import React from 'react'
import './Program6.css'
const Program6 = ({item}) => {
    console.log(item);

  return (
    <div className='container'>
        <div className='row justify-content-center'>
            {item.map((val)=>(
                <div key={val.id} className='col-md-4 col-sm-6 card my-3 border-0'>
                    <div className='card-img-top text-center'>
                        <img src={val.image}alt="" className='w-75'></img>
                        </div>
                        <div className='card-body'>
                            <div className='card-title fw-bold fs-4'>
                                {val.title} -- {val.price}
                                </div>
                                <div className='card-text'>
                                    {val.desc}
                                    </div>
                        </div>
                    </div>
            ))}
        </div>
    </div>
  )
}
export default Program6;
