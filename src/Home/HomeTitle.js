import React from 'react';
import './HomeTitle.css';
// import { BiPlay } from "react-icons/bi";
// import { FontAwesomeIcon } from "@fontawesome/react-fontawesome";
// import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";


const HomeTitle = () => {
  return (
    <div className='container-fluid title' style={{height:'350px'}}>
        <h2 className='heading' >The Generics</h2>
        <button className=' mybutton' >Get our Latest Album</button>
       <div>
       {/* <button className="  playbtn">►</button> */}
       {/* <Button variant="info" style={{ borderRadius: "50%", margin: 10 }}>
          <BiPlay />
        </Button> */}
           {/* <p className="icon">
          <FontAwesomeIcon icon={faCirclePlay} />
        </p> */}
       </div>
      
    </div>
   
  )
}

export default HomeTitle;
