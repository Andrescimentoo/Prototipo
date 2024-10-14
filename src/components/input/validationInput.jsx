import React from "react";
import Input from "./input.jsx";
import Atributes from "./createInputs.js";

const ComponentInputs = () => {
      
   return(
      <>
      { Atributes.map((item,index)=>(
         <Input
            key={index}
            type={item.type} 
            placeholder={item.placeholder}
         />
   ))}
    </>
   )
   
   
}
export default ComponentInputs