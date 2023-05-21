import React, { useState } from 'react'
// we hav ewriiteen this here and we will export this item to the main file just by importing this file to appjs and calling the function name theere


export default function Textform(props) {
    const[text,setText]=useState("");
    

//    setText("newtextvalue")
   const handleupclick=()=>{
    console.log("the content clicked "+{text});
    let newtext= text.toUpperCase()
    setText(newtext)

   }



   const handleupclick2=()=>{
    console.log("the content clicked "+{text});
    let newtext= text.toLowerCase()
    setText(newtext)

   }
   const handleonchange=(e)=>{
    console.log("event clicked");
    setText(e.target.value)

   }
   

  return (<>
    
  <div className="mx-3">
  <h2> {props.heading}</h2> 
  
    
    <label htmlFor="mybox" className="form-label"   onChange={handleonchange}>Example textarea</label>
    <textarea className="form-control" value={text} onChange={handleonchange} id="mybox" rows="8"></textarea>
    </div>
    <br></br>
    <br></br>
    
    <button className='btn btn-primary mx-3'  onClick= {handleupclick}>convert to uppercase </button>
    
    <button className='btn btn-primary mx-3'  onClick= {handleupclick2}>convert to lowercase</button>
    



    <div className='newdiv'>
      <h1>
        it has {text.split(" ").length} words and {text.length} characters
      </h1>

    </div>
</> 
  )
}
