import React from "react"
import "./input.css"



const Input = ({
   type,placeholder 
}) => {

   return(
      <>
       <div className="inputs">
          <input type={type} placeholder={placeholder}/>
       </div>
        
     </>
   )
} 
export default Input

//qual eh minha missao aqui? eh literalmente criar 2 inputs com valores diferentes
//apartir desse input generico q eu criei, mas como fazer isso? qual a sintaxe e a logica
//para executar isso? 



//agora eu quero travar a pagina para a cada refresh ela nao atualizar pra isso eu uso o use efect e uma funcao/hoock
// que justamente vai atuar como o travador da pagina...seu nome: {?}

//e de fato nao sera resposablidade da  funcao Input realizar a validaçao da pagina mas simm nossa login.jsx