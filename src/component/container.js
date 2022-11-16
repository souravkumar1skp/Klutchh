import React from 'react';
import Cards from "./team";
import News from "./news";
import Live from "./match";
import '../App.css';
function container() {
  return (
    <div className="container">
        <div className='small-box'>
            <News/>
        </div>
        <div className='large-box'><Cards/></div> 
        <div className='small-box'><Live/></div>
    </div>
  )
}

export default container