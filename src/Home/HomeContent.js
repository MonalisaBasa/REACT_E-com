import React from 'react';
import './HomeContent.css';


const homeItems= [{
    date: "JUL 16",
    place: "Noida",
    event: "DTE ENERGY MUSIC THEATRE",
  },
  {
    date: "JUL 19",
    place: "TORONTO,ON",
    event: "BUDWEISER STAGE",
  },
  { date: "JUL 22", place: "BRISTOW, VA", event: "CONCORD PAVILION" },
  { date: "JUL 29", place: "PHOENIX, AZ", event: "AK-CHIN PAVILION" },
  { date: "JUL 30", place: "TORONTO,ON", event: "BUDWEISER STAGE" },
]

export default function HomeContent() {
    return (
      <div>
        <div className="homePage">
          {/* <Title />
          <h3 className="textSize">Get our Latest Album</h3>
          <p className="icon">
            <FontAwesomeIcon icon={faCirclePlay} />
          </p> */}
         
        

        </div>
        <div className="container">
          <h2 className="mb-3">TOURS</h2>
          {homeItems.map((item) => (
            <div className="row mt-2 mb-2 homeItem">
              <div className="col-md-2 ">{item.date}</div>
              <div className="col-md-3 ">{item.place}</div>
              <div className="col-md-4 ">{item.event}</div>
              <div className="col-md-3">
                <button className="btn btn-primary btn-md mb-1">
                  Buy Tickets
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
          }
