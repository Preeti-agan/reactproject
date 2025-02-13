// import React from 'react'
// import "./Update.css"
// const Update = ({lists}) => {
//     console.log(lists);
    
//     return (
//         <>
//             <div className="sidenav">
//                 <div className="search-container">
//                     <form action="/action">
//                         <input type="text" placeholder="Search.." name="search" />
//                         <button type="submit">
//                         </button>
//                     </form>
//                 </div>
//                 <div className="side-link">
//                     {lists.map(( cards,index)=>(
                        
//                     <ul className="side-links" key={index} >
//                         <li>
//                             <p className="side-items">{cards.category}</p>
//                         </li>
                        
//                     </ul>
//                 ))}
//                 </div>


//             </div >
//         </>
//     )
// }

// export default Update;



import "./Update.css";

const Update = ({ lists, onCategoryClick, selectedCategory }) => {
  return (
    <div className="sidenav">
     
      <div className="side-link">
        {lists.map((card) => (
          <ul className="side-links" key={card.id}>
            <li>
              <p
                className={`side-items ${selectedCategory === card.category ? 'active' : ''}`} 
                onClick={() => onCategoryClick(card.category)}
              >
                {card.category}
              </p>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Update;