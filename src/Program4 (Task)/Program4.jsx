import React, { useState } from 'react';
import "./Program4.css";

const Program4 = ({studentCards, setSelected}) => {
    const [hover, sethover] = useState(null);
    function handleClick(cards) {
      setSelected(cards);
    }
    return (
        <>
            <main>
                <div className="add">
                    {studentCards.map((cards, index) => (
                        <div
                            className="oncee"
                            key={index}
                            onClick={() => handleClick(cards)}
                            onMouseEnter={() => sethover(index)}
                            onMouseLeave={() => sethover(null)}
                            style={{
                                transform: hover === index ? "scale(1.1)" : "scale(1)",
                                transition: "transform 0.3s ease",
                                cursor: "pointer",
                                color:"white",
                            }}
                        >
                            <img src={cards.image} alt={cards.name} className="photos" />
                            <div className="twice">
                                <div className="style">
                                    <h3 className="name">Name</h3>
                                    <p className="names">: {cards.name}</p>
                                </div>
                                <div className="style">
                                    <h3 className="name">Age</h3>
                                    <p className="names">: {cards.age}</p>
                                </div>
                                <div className="style">
                                    <h3 className="name">Class</h3>
                                    <p className="names">: {cards.class}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
}

export default Program4;

// import React, { useState } from 'react';
// import "./List.css";

// const List = ({studentCards, setSelectedCards}) => {
//     const [hover, sethover] = useState(null);
//     function handleClick(cards) {
//         setSelectedCards(cards);
//     }
//     return (
//         <>
//             <main>
//                 <div className="add">
//                     {studentCards.map((cards, index) => (
//                         <div
//                             className="oncee"
//                             key={index}
//                             onClick={() => handleClick(cards)}
//                             onMouseEnter={() => sethover(index)}
//                             onMouseLeave={() => sethover(null)}
//                             style={{
//                                 transform: hover === index ? "scale(1.1)" : "scale(1)",
//                                 transition: "transform 0.3s ease",
//                                 cursor: "pointer",
//                                 color:"white",
//                             }}
//                         >
//                             <img src={cards.images} alt={cards.name} className="photos" />
//                             <div className="twice">
//                                 <div className="style">
//                                     <h3 className="name">Name</h3>
//                                     <p className="names">: {cards.name}</p>
//                                 </div>
//                                 <div className="style">
//                                     <h3 className="name">Age</h3>
//                                     <p className="names">: {cards.age}</p>
//                                 </div>
//                                 <div className="style">
//                                     <h3 className="name">Class</h3>
//                                     <p className="names">: {cards.class}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </main>
//         </>
//     );
// }

// export default List;




// import React from 'react'
// import "./Start.css"
// const Start = ({ selectedCard }) => {
//   console.log(selectedCard)

//   return (
//     <>
//       <div className="second-page">


//         <div className="main-page"
//         >



//           <div className="left-side">
//             <img src={selectedCard.images} alt="" className="photos2" />
//           </div>


//           <div className="right-side">
//             <div className="twice2">
//               <div className="style2">
//                 <h3 className="name2">Name</h3>
//                 <p className="names2">: {selectedCard.name}</p>
//               </div>
//               <div className="style2">
//                 <h3 className="name2">Age</h3>
//                 <p className="names2">: {selectedCard.age}</p>
//               </div>
//               <div className="style2">
//                 <h3 className="name2">Class</h3>
//                 <p className="names2">: {selectedCard.class}</p>
//               </div>
//               <div className="style3">
//                 <h3 className="name3">Description</h3>
//                 <p className="names3"> {selectedCard.description} </p>
//               </div>
//             </div>
//           </div>


//         </div>

//       </div>
//     </>
//   )
// }

// export default Start



// import { useEffect, useState } from 'react';
// import './App.css';
// import List from './assets/lists/List';
// import Start from './assets/Start/Start';
// import Img from './assets/image/Img';
// import Card from './assets/Card/Card';
// import Newcards from './assets/NewCards/Newcards';

// function App() {
//   const studentcard = [
//     {
//       images: "student2.webp",
//       name: "Nikita",
//       age: "18",
//       class: "12th",
//       description: "Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito"
//     },
//     {
//       images: "student1.jpg",
//       name: "Nitya",
//       age: "17",
//       class: "12th",
//       description: "Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito"
//     },
//     {
//       images: "student4.webp",
//       name: "Nisha",
//       age: "18",
//       class: "12th",
//       description: "Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito"
//     },
//     // {
//     //   images: "one.jpg",
//     //   name: "Nisha",
//     //   age: "18",
//     //   class: "12th",
//     //   description: "Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito"
//     // },
//   ];

//   const [selectedCards, setSelectedCards] = useState(studentcard[0]); 
//   useEffect(() => {
//     console.log(selectedCards);
//   }, [selectedCards])

//   return (
//     <>
//       <List studentCards={studentcard} setSelectedCards={setSelectedCards}/> 
//        <Start selectedCard={selectedCards} />
//        {/* <Card></Card> */}
//        {/* <Img/> */}
//        {/* <Newcards/> */}
//     </>
//   );
// }

// export default App;