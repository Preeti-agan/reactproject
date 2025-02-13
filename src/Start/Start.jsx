import React from 'react'
import "./Start.css"
const Start = ({ selectedCard }) => {
  console.log(selectedCard)

  return (
    <>
      <div className="second-page">


        <div className="main-page">



          <div className="left-side">
            <img src={selectedCard.image} alt="" className="photos2" />
          </div>


          <div className="right-side">
            <div className="twice2">
              <div className="style2">
                <h3 className="name2">Name</h3>
                <p className="names2">: {selectedCard.name}</p>
              </div>
              <div className="style2">
                <h3 className="name2">Age</h3>
                <p className="names2">: {selectedCard.age}</p>
              </div>
              <div className="style2">
                <h3 className="name2">Class</h3>
                <p className="names2">: {selectedCard.class}</p>
              </div>
              <div className="style3">
                <h3 className="name3">Description</h3>
                <p className="names3"> {selectedCard.description} </p>
              </div>
            </div>
          </div>


        </div>

      </div>
    </>
  )
}

export default Start;
