// import './App.css'
// import {useState,useEffect} from 'react'


// import Program1 from './program1/Program1'
// import Program2 from './Program2 (Cards)/Program2'
// import Program3 from './Program3 (Cards)/Program3'
// import Program4 from './Program4 (Task)/Program4'
// import Start from './Start/Start'
// import Data from './Data/Data'
// import Program6 from './Program6(page right)/Program6'
// import Button from './Button/Button'


// import 'bootstrap'
// import Update from './Update/Update';
// import Gener from './Gener/Gener';


// function App() {


  // const studentcard=[
  //   {
  //     image:"https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     name:"Jasmine",
  //     age:"21",
  //     class:"Arts",
      
  //     description:"Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito",
  //   },
  //   {
  //     image:"https://images.pexels.com/photos/220575/pexels-photo-220575.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     name:"Alice",
  //     age:"20",
  //     class:"Medical",
  //     description:"Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito",
  //   },
  //   {
  //     image:"https://images.pexels.com/photos/1310518/pexels-photo-1310518.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     name:"Jenifer",
  //     age:"21",
  //     class:"Arts",
  //     description:"Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito",
  //   },
    
  // ];
  // const [selectedCards, setSelectedCards] = useState(studentcard[0]); 
  // useEffect(() => {
  //    console.log(selectedCards);
  //  }, [selectedCards])



  // filteration of the data
// const [seletctedAction, setSeletctedAction] = useState("");
// const handleonGenreChange =(Genre) => {
//   setSeletctedAction(Genre);
//   console.log("I m here", Genre);
// }

// const [item,setItems]=useState(Data)
// const menuitems=[...new Set(Data.map((val)=> val.category))]

// const filterItems=(cat)=>{
//   const newitems=Data.filter((newval)=>newval.category===cat)
//   setItems(newitems)

// const [selectedgener,setSelectedgener]=useState(0);

// const category=[
//   {
//     id:"0",
//     category:"popular",
//   },
//   {
//     id:"1",
//     category:"Action",
//   },
//   {
//     id:"2",
//     category:"comedy",
//   },
//   {
//     id:"3",
//     category:"Adventures",
//   },
//   {
//     id:"4",
//     category:"Horror",
//   },
// ];


// const movies= [
//   {
//     images: "https://images.pexels.com/photos/10682514/pexels-photo-10682514.jpeg?auto=compress&cs=tinysrgb&w=600",
//     name: "Avenger",
//     category: "Drama",
//     year: 1994,
//     id:[0,1],
    
//   },
//   {
//     images: "https://images.pexels.com/photos/12767877/pexels-photo-12767877.jpeg?auto=compress&cs=tinysrgb&w=600",
//     name: "The Godfather",
//     category: "Crime",
//     year: 1972,
//     id:[3,4],
   
//   },
//   {
//     images: "https://images.pexels.com/photos/21815184/pexels-photo-21815184/free-photo-of-medieval-knight-pointing-into-camera.jpeg?auto=compress&cs=tinysrgb&w=600",
//     name: "The Dark Knight",
//     category: "Action",
//     year: 2008,
//     id:[0,1]
    
//   },
//   {
//     images: "https://images.pexels.com/photos/7519010/pexels-photo-7519010.jpeg?auto=compress&cs=tinysrgb&w=600",
//     name: "12 Angry Men",
//     category: "Drama",
//     year: 1957,
//     id:[3,2],
//   },
//   // {
//   //   images: "",
//   //   name: "Schindler's List",
//   //   category: "Biography",
//   //   year: 1993,
//   //   id:[1,2],
    
//   // },
//   //   {
//   //   images: "",
//   //   name: "The Lord",
//   //   category: "Fantasy",
//   //   year: 2003,
//   //   id:[3,2],
    
//   // },
//   // {
//   //   images: "",
//   //   name: "Pulp Fiction",
//   //   category: "Crime",
//   //   year: 1994,
//   //   id:[3,2],
    
//   // },
//   //   {
//   //   images: "",
//   //   name: "The Good",
//   //   category: "Western",
//   //   year: 1966,
//   //   id:[3,4],
//   // },
//   //   {
//   //   images: "",
//   //   name: "Forrest Gump",
//   //   category: "Drama",
//   //   year: 1994,
//   //   id:[3,4],
//   // },
//   //   {
//   //   images: "",
//   //   name: "Inception",
//   //   category: "Sci-Fi",
//   //   year: 2010,
//   //   id:[3,4],
//   // }
// ];

//   return (
//     <>


      {/* <Program1></Program1>  */}
      {/* <Program2></Program2>
      <Program3></Program3>
      <Program4 studentCards={studentcard} setSelected={setSelectedCards}></Program4>
      <Start selectedCard={selectedCards}></Start> */}






      {/* filteration of the data */}
      {/* <Program5 seletctedAction={seletctedAction} onGenreChange={handleonGenreChange}></Program5> */}
      {/* <div className='container-fluid'>
        <div className='row'>
          <h1 className='text-center col-12 fw-bold mt-3 mb-5'>
         filteration
          </h1>
          <Program6 item={item}  ></Program6>
          <Button menuitems={menuitems}
          filterItems={filterItems}
          setItems={setItems}
          ></Button>

        </div>
      </div> */}
//        <Update lists={category}></Update>
//        <Gener movies={movies} setSelectedgener={setSelectedgener} ></Gener>
//     </>
//   )
// }


// export default App;



import './App.css';
import { useState, useEffect } from 'react';
import 'bootstrap';
import Update from './Update/Update';
import Gener from './Gener/Gener';

function App() {
  const category = [
    {
      id: "0",
      category: "POPULAR",
    },
    {
      id: "1",
      category: "ACTION",
    },
    {
      id: "2",
      category: "COMEDY",
    },
    {
      id: "3",
      category: "ADVENTURES",
    },
    {
      id: "4",
      category: "HORROR",
    },
  ];

  const allMovies = [ 
    {
      images: "https://www.movieposters.com/cdn/shop/products/4c177c2b7f7bb9a679f089bcb50f844e_3e89eb5d-ffbd-4033-a00f-e595a3ef2e2a_240x360_crop_center.progressive.jpg?v=1573587540",
      name: "Dunkirk",
      category: "POPULAR", 
      year: 1994,
      id: [0, 1],
    },
    {
      images: "https://www.movieposters.com/cdn/shop/products/101855dc0989bad0324237731b9d8d9b_240x360_crop_center.progressive.jpg?v=1573594812",
      name: "Top Gun",
      category: "ADVENTURES", 
      year: 1972,
      id: [3, 4],
    },
    {
      images: "https://www.movieposters.com/cdn/shop/files/skyfall_c668003e_240x360_crop_center.progressive.jpg?v=1722011703",
      name: "Skyfall",
      category: "ACTION", 
      year: 2008,
      id: [0, 1]
    },
    {
      images: "https://cdn.shopify.com/s/files/1/0057/3728/3618/files/interstellar-139399_500x749.jpg?v=1708527823",
      name: "Interseller",
      category: "COMEDY", 
      year: 1957,
      id: [3, 2],
    },
    {
      images: "https://www.movieposters.com/cdn/shop/products/f5ded947bdcdc78f844c6239fd739196_dfcba993-8165-42fd-a8c4-ff63f11ce433_240x360_crop_center.progressive.jpg?v=1573613651",
      name: "Texas",
      category: "HORROR", 
      year: 1957,
      id: [3, 2],
    },
    {
      images:"https://www.movieposters.com/cdn/shop/products/b4261a9c91022958a7d82c4955d1a2b8_9734f41a-7869-49da-906b-2054cd134d90_240x360_crop_center.progressive.jpg?v=1573590286",
      name:"Army of Darkness",
      category:"HORROR",
      year:2003,
      id:[4,1],
    },
    {
      images:"https://www.movieposters.com/cdn/shop/files/scan062_0c434b34-5d9e-4cff-a3ce-79d724ac3335_240x360_crop_center.progressive.jpg?v=1736368971",
      name:"Last Breath",
      category:"ADVENTURES",
      year:2003,
      id:[3,1],
    },
    {
      images:"https://www.movieposters.com/cdn/shop/files/captain-america-brave-new-world_2reaj42x_240x360_crop_center.progressive.jpg?v=1736260569",
      name:"Captain America",
      category:"ACTION",
      year:2003,
      id:[2,1],
    },
    

    
  ];

  const [filteredMovies, setFilteredMovies] = useState(allMovies); 
  const [selectedCategory, setSelectedCategory] = useState("POPULAR"); 

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
    if (categoryName === "POPULAR") {
      setFilteredMovies(allMovies); 
    } else {
      const filtered = allMovies.filter(movie => movie.category === categoryName);
      setFilteredMovies(filtered);
    }
  };

  return (
    <>
      <Update 
        lists={category} 
        onCategoryClick={handleCategoryClick} 
        selectedCategory={selectedCategory} 
      />
      <Gener movies={filteredMovies} /> 
    </>
  );
}

export default App;



