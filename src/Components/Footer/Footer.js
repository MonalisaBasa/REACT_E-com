import React from 'react';
import flipkart from '../../Images/Flipkart.png';
import spotify from '../../Images/Spotify.png';
import youtube from '../../Images/youtube.jpg';

const Footer = () => {
  return (
    <>
    <div className='align-items-center justify-center' style={{marginLeft:"50%"}}>
      <button className='bg-info text-white p-2 rounded-md'>See The Cart</button>

    </div>
      <div className="bg-info d-flex mt-5 pt-3 pb-2 juistify-content-center align-items-center margin-left:50%" >
        <h1 className="display-1 text-white fw-bold justify-content-center">The Generic</h1>
        <div style={{marginLeft:'40%'}}>
          <span className="me-3 ">
            <a href="https://youtube.com">
              <img
                src={youtube}
                alt="youtube"
                style={{ width: "30px", height: "30px" }}
              />
            </a>
          </span>
          <span className="me-3">
            <a href="https://spotify.com">
              <img
                src={spotify}
                alt="Spotify"
                style={{ width: "30px", height: "30px" }}
              />
            </a>
          </span>
          <span className="me-3 ">
            <a href="https://flipkart.com">
              <img
                src={flipkart}
                alt="Flipkart"
                style={{ width: "30px", height: "30px" }}
              />
            </a>
          </span>
        </div>
      </div>

    </>
  );
}

export default Footer;
