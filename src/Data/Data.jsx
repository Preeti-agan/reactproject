

import React from 'react';
const Data = ({items}) => {
const items=[
        
        {
            id:"1",
            category:"Popular",
             price:"$31",
            image:"https://images.pexels.com/photos/10682514/pexels-photo-10682514.jpeg?auto=compress&cs=tinysrgb&w=600",
            title:"Avenger",
        },
        {
            id:"2",
            category:"Action",
            price:"$31",
            image:"https://images.pexels.com/photos/10682514/pexels-photo-10682514.jpeg?auto=compress&cs=tinysrgb&w=600",
            title:"Avenger",
            
        },
        {
            id:"3",
            category:"Genre",
            price:"$31",
            image:"https://images.pexels.com/photos/10682514/pexels-photo-10682514.jpeg?auto=compress&cs=tinysrgb&w=600",
            title:"Avenger",
            
        },
        {
            id:"4",
            category:"Genre",
            price:"$31",
            image:"https://images.pexels.com/photos/10682514/pexels-photo-10682514.jpeg?auto=compress&cs=tinysrgb&w=600",
            title:"Avenger",
            
        },
        {
            id:"5",
            category:"Genre",
            price:"$31",
            image:"https://images.pexels.com/photos/10682514/pexels-photo-10682514.jpeg?auto=compress&cs=tinysrgb&w=600",
            title:"Avenger",
            
        },
        {
            id:"6",
            category:"Genre",
            price:"$31",
            image:"https://images.pexels.com/photos/10682514/pexels-photo-10682514.jpeg?auto=compress&cs=tinysrgb&w=600",
            title:"Avenger",
            
        },
        
    ];
        
    return (
        <>
        {/* <div class="sidenav">
                <div class="search-container">
                    <form action="/action">
                        <input type="text" placeholder="Search.." name="search" />
                        <button type="submit">
                        </button>
                    </form>
                </div>
              
                 {cateroriesList.map((movie, index) => (
                   
                     <div  key = { index } >
                    
                       <h1 className='pre' onClick = {()=>  onGenreChange(movie.category)}>{movie.category}</h1>
                       {/* <Iconboxp>{movie.description}</Iconboxp> */}
                   
                   {/* </div> */}
                  {/* ))}   */}

{/*                 
            <a href="#" className="side-link">Genres</a>
            <a href="#" className="side-link">Popular</a>
            <a href="#" className="side-link">Action</a>
            <a href="#" className="side-link">Adventure</a>
            <a href="#" className="side-link">Animation</a>
            <a href="#" className="side-link">Biography</a>
            <a href="#" className="side-link">Comedy</a>
            <a href="#" className="side-link">Crime</a>
            <a href="#" className="side-link">Documentary</a>
            <a href="#" className="side-link">Drama</a>
            <a href="#" className="side-link">Family</a>
            <a href="#" className="side-link">Fantasy</a>
            <a href="#" className="side-link">Film-Noir</a>
            <a href="#" className="side-link">History</a>
            <a href="#" className="side-link">Horror</a>
            <a href="#" className="side-link">Music</a>
            <a href="#" className="side-link">Musical</a>
            <a href="#" className="side-link">Mystry</a> */}
        {/* </div > */}
        </>
    )
}


export default Data;