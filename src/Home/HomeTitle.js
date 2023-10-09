import React from 'react';
import './HomeTitle.css';

const HomeTitle = () => {
  return (
    <div className='container-fluid title' style={{height:'350px'}}>
        <h2 className='heading' >The Generics</h2>
        <button className='btn mybutton' >Get our Latest Album</button>
       <div>
       <button className=" btn playbtn">►</button>
       </div>
      
    </div>
   
  )
}

export default HomeTitle;
