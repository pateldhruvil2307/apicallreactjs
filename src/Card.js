import React, { useState } from 'react'


export default function Card({tittle,id,price,add ,btn,deleteVideo}) {





  return (
    <>
   
    <div className='container1' >
        <div className='container2'>
          <button className='close' onClick={()=>deleteVideo(id)}   >{btn}</button>
            <img src={`https://picsum.photos/id/${id}/200/300`}  />
        <h3> {tittle} </h3>
      <p> {price}</p>
      <button > {add}</button>
      </div>
    </div>
    
  
    </>
  );
}

