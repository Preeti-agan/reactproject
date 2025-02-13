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
    { id: "0", category: "POPULAR" },
    { id: "1", category: "ACTION" },
    { id: "2", category: "COMEDY" },
    { id: "3", category: "ADVENTURES" },
    { id: "4", category: "HORROR" },
    {id:"5", category:"ROMANTIC"},
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
      images: "https://www.movieposters.com/cdn/shop/products/jerrymaguire.flo.ar_240x360_crop_center.progressive.jpg?v=1597169327",
      name: "Jerry Maguire",
      category: "ROMANTIC", 
      year: 1972,
      id: [3, 5],
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
      year:1965,
      id:[3,1],
    },
    {
      images:"https://www.movieposters.com/cdn/shop/products/c104f1bfed20481f35bc96cb9addc940_240x360_crop_center.progressive.jpg?v=1573588574",
      name:"Titanic",
      category:"ACTION",
      year:2009,
      id:[2,1],
    },
    {
      images:"https://www.movieposters.com/cdn/shop/files/godzilla2_240x360_crop_center.progressive.jpg?v=1729789153",
      name:"Gozilla",
      category:"ADVENTURES",
      year:2023,
      id:[4,1],
    },
    {
      images:"https://www.movieposters.com/cdn/shop/files/ROMAN-HOLIDAY_240x360_crop_center.progressive.jpg?v=1730233162",
      name:"Roman Holiday",
      category:"ACTION",
      year:1999,
      id:[2,1],
    },
    {
      images:"https://www.movieposters.com/cdn/shop/products/a02f2674426d0953c7e2d0a21c4116fb_48dcfda4-e1c6-492c-8234-b047bf783188_240x360_crop_center.progressive.jpg?v=1573617287",
      name:"The Notebook",
      category:"ROMANTIC",
      year:2021,
      id:[0,5],
    },
    {
      images:"https://www.movieposters.com/cdn/shop/files/the-end_myndexn0_240x360_crop_center.progressive.jpg?v=1733864478",
      name:"The End",
      category:"ACTION",
      year:1921,
      id:[3,1],
    },
    {
      images:"https://www.movieposters.com/cdn/shop/files/28-years-later_h7dwenku_240x360_crop_center.progressive.jpg?v=1739372526",
      name:"28 Years Later",
      category:"ACTION",
      year:1987,
      id:[2,1],
    },
    {
      images:"https://www.movieposters.com/cdn/shop/files/FIGHT-CLUB_240x360_crop_center.progressive.jpg?v=1730231824",
      name:"Fight Club",
      category:"ACTION",
      year:2004,
      id:[2,1],
    },
    {
      images:"https://www.movieposters.com/cdn/shop/files/THE-WARRIORS_240x360_crop_center.progressive.jpg?v=1730234310",
      name:"Warriors",
      category:"ADVENTURES",
      year:2019,
      id:[3,1],
    },
    {
      images:"https://www.movieposters.com/cdn/shop/files/working_man_240x360_crop_center.progressive.jpg?v=1738012373",
      name:"Working Man",
      category:"COMEDY",
      year:1978,
      id:[2,1],
    },
    {
      images:"https://www.movieposters.com/cdn/shop/products/2caa8048128efd72cb9661247b781781_c36ea40f-048e-4ba8-8e89-516e307c37bc_240x360_crop_center.progressive.jpg?v=1573619050",
      name:"Casablanca",
      category:"ROMANTIC",
      year:1943,
      id:[5,0],
    },
    {
      images:"https://www.movieposters.com/cdn/shop/products/724a561a5ec979e82787759776405d04_03a29a6d-1c0e-4d77-a953-9758e03899a8_240x360_crop_center.progressive.jpg?v=1573652480",
      name:" Crazy Rich Asian",
      category:"ROMANTIC",
      year:2011,
      id:[5,1],
    },
    {
      images:"https://www.movieposters.com/cdn/shop/products/204f4eda33d6f32f11e2624a3f675871_afa6d0f1-503d-4e1a-abc3-15b4404592ae_240x360_crop_center.progressive.jpg?v=1573651243",
      name:"Romeo and Juliet",
      category:"Romantic",
      year:2009,
      id:[5,0],
    },
    {
      images:"https://www.movieposters.com/cdn/shop/products/4940c5878babf3dc5d2ca567b7558178_9e62fc4c-4116-48e5-a4f5-3a99c73ae7b1_240x360_crop_center.progressive.jpg?v=1573651499",
      name:"Jurassic Park",
      category:"ADVENTURES",
      year:1932,
      id:[3,1],
    },
    {
      images:"https://www.movieposters.com/cdn/shop/files/darkknight.building.24x36_20e90057-f673-4cc3-9ce7-7b0d3eeb7d83_240x360_crop_center.progressive.jpg?v=1707491191",
      name:"The Dark Knight",
      category:"ADVENTURES",
      year:"20215",
      id:[3,1],
    },
    
  ];

  const [filteredMovies, setFilteredMovies] = useState(allMovies);
  const [selectedCategory, setSelectedCategory] = useState("POPULAR");
  const [searchTerm, setSearchTerm] = useState(""); 

  useEffect(() => {
    
    let categoryFilteredMovies = allMovies;
    if (selectedCategory !== "POPULAR") {
      categoryFilteredMovies = allMovies.filter(movie => movie.category === selectedCategory);
    }

    
    if (searchTerm) {
      const searchFilteredMovies = categoryFilteredMovies.filter(movie =>
        movie.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredMovies(searchFilteredMovies);
    } else {
      setFilteredMovies(categoryFilteredMovies); 
    }
  }, [selectedCategory, searchTerm, allMovies]); 


  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <Update
        lists={category}
        onCategoryClick={handleCategoryClick}
        selectedCategory={selectedCategory}
        searchTerm={searchTerm} 
        onSearchChange={handleSearchChange} 
      />
      <Gener movies={filteredMovies} />
    </>
  );
}

export default App;



