// import logo from "./logo.svg";
import "./App.css";
// import News from "./News";
// import Home from "./Home";
import React, { useState } from "react";
import Coderdost from "./Coderdost";
import Card from "./Card";
import card1 from "../src/Card1";
// import Event from "./Event";
// import Counter from "./Counter";
// this is object method

function App({deleteVideo}) {

   
  function deleteVideo(id){
card1(card1.filter(card=>card.id!==id))
console.log(id)
  }


  return (
    <>
  {
   card1.map(card=><Card 
      key={card.id}
      id={card.id}
      btn={"x"}
      tittle={card.tittle}
      price={card.price}
      add={card.add}
      deleteVideo={deleteVideo}
      ></Card>  
      )
    }

    {/* <card   deleteVideo={deleteVideo}/> */}
  {/* <Card
  id={1}
  tittle='dhruvil patel'
  price={20}
  add='add'



  /> */}


 
    </>
  );
}

















         {/* <Counter/> */}



        {/* play and pause btn  */}
       {/* <Event onPlay={() => console.log("play")} onPause={() => console.log("pause")}> enter </Event>  */}

      {/* <Event></Event> */}

        {/* <Card  tittle='zara ti shart' price='320' add='add to card' vry={0} /> */}
        <Card />



export default App;

// {
//   /* <News/> */
// }
// {
 
// }
