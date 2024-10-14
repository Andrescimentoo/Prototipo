import React from 'react';
import ComponentInputs from '../input/validationInput.jsx';
import Title from '../title/title.jsx';
;
import "/src/App.css";
import ButtonProvider from '../buttonGoogle/buttonProvider.jsx';

const LoginPage = () => {
  
  return (
    <div className="main">
      <form >
        <section className='title'><Title/></section>
        <section><ComponentInputs/></section>
        <section>/<ButtonProvider/></section>
      </form>
     
      
    </div>
  );
}

export default LoginPage;