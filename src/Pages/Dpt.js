import React from 'react'
import { ReactDOM } from 'react';



function Dpt(props) {
  //props.description
  //props.filieres
  return ( 
    <div className='root'>
        <div className='Dpt'>
            <h1>{props.titre}</h1>
            <p>{props.description}</p>
            <h4>Les filières</h4>
            <p>{props.filieres}</p>
            <filiereCard/>

            
        </div>
      
    </div>)
}

//const element = <Dpt departement="Département informatique" />;
//ReactDOM.render(
  //element,
  //document.getElementById('root')
//);

export default Dpt
