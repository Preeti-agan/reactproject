// import React from 'react'
// import "./Gener.css"
// const Gener = ({movies ,selectedgener,setSelectedgener}) => {
//   return (
//     <>
//     <div className="container">
//     <div className="main">
//         {movies.map((cards)=>(
//             <div className="lists">
//             <img src={cards.images} alt="" className="photos" />
//             <h3 className="names">{cards.name}</h3>
//             <p className="years">{cards.year}</p>
//         </div>))}
        
//     </div>
//     </div>
//     </>
//   )
// }

// export default Gener



import React from 'react';
import "./Gener.css";

const Gener = ({ movies }) => {
  return (
    <div className="container">
      <div className="main">
        {movies.map((movie) => (
          <div className="lists" key={movie.name}> 
            <img src={movie.images} alt={movie.name} className="photos" />
            <h3 className="names">{movie.name}</h3>
            <p className="years">{movie.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gener;