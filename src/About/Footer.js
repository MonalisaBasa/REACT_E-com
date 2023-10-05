import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className="bg-info d-flex mt-5 pt-3 pb-2 juistify-content-center align-items-center margin-left:50%" >
        <h1 className="display-1 text-white fw-bold justify-content-center">The Generic</h1>
        <div style={{marginLeft:'40%'}}>
          <span className="me-3 ">
            <a href="https://youtube.com">
              <img
                src="	https://prasadyash2411.github.io/ecom-website/img/6260efc8fc9a9002669d2f4ad9956cc0.jpg"
                alt="youtube"
                style={{ width: "30px", height: "30px" }}
              />
            </a>
          </span>
          <span className="me-3">
            <a href="https://spotify.com">
              <img
                src="https://prasadyash2411.github.io/ecom-website/img/Spotify%20Logo.png"
                alt="Spotify"
                style={{ width: "30px", height: "30px" }}
              />
            </a>
          </span>
          <span className="me-3 ">
            <a href="https://flipkart.com">
              <img
                src="https://prasadyash2411.github.io/ecom-website/img/Facebook%20Logo.png"
                alt="Flipkart"
                style={{ width: "30px", height: "30px" }}
              />
            </a>
          </span>
        </div>
      </div>
      
    </div>
  )
}

export default Footer;
