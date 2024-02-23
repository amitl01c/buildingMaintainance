import React from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import Slider from "../Component/Slider";
import img from "./vision.png"
import img1 from "./mission.png"

function Home()
{
    return(

        <>
        <Header/>
        <Slider/>
        <div
  className="conatiner-fluid"
  style={{ backgroundColor: "white", paddingTop: "5%" }}
>
  <div className="container mt-5">
    <div className="row">
      {/* First Card */}
      <div className="col-md-6">
        <div className="card">
          <div className="card-body" style={{ backgroundColor: "black" }}>
            <div
              id="carouselExampleSlidesOnly"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={img}
                    className="d-block w-100"
                    alt="..."
                    height={350}
                    width={105}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Second Card */}
      <div className="col-md-6">
        <div className="card">
          <div
            className="card-body"
            style={{ backgroundColor: "black", color: "antiquewhite" }}
          >
            <h5 className="card-title text-center">Our Vision</h5>
            <p className="card-text">
              At Building Maintenance Services, our vision is to redefine the
              standard of building care, fostering environments that inspire
              safety, comfort, and sustainability. We envision buildings not
              merely as structures, but as vibrant hubs of community,
              innovation, and well-being. Through our unwavering commitment to
              excellence, innovation, and environmental stewardship, we aim to
              set new benchmarks in building maintenance, elevating the quality
              of life for occupants while preserving resources for future
              generations. Our vision is to be recognized as the premier partner
              in building maintenance, trusted to deliver unparalleled service,
              reliability, and value to our clients, empowering them to thrive
              in spaces that are meticulously cared for and thoughtfully
              managed. Together, we are building a future where every building
              is a beacon of excellence, integrity, and sustainability,
              enriching the lives of all who&nbsp;inhabit&nbsp;them.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* second part */}
  <div className="container mt-5">
    <div className="row">
      {/* First Card */}
      <div className="col-md-6">
        <div className="card">
          <div
            className="card-body"
            style={{ backgroundColor: "black", color: "antiquewhite" }}
          >
            <h5 className="card-title text-center">Our Mission</h5>
            <p className="card-text">
           <ul>
            <li>
            Implement a schedule for regular inspections to identify potential issues before they become major problems.
            </li>
            <li>
            Check for signs of wear and tear, damage, or deterioration in various building components.
            </li>
            <li>Schedule regular servicing of equipment and systems, such as HVAC, plumbing, lift maintenance, electrical systems etc.</li>
            <li>Maintain detailed records of all maintenance activities, including inspections, repairs, and replacements.</li>
            <li>Ensure that maintenance staff are well-trained on safety procedures, equipment operation, and new technologies.</li>
            <li>Engage with building occupants and nearby communities to address concerns, gather feedback, and create a sense of shared responsibility for the building's upkeep.</li>
           </ul>
            </p>
          </div>
        </div>
      </div>
  
 
      {/* Second Card */}
      <div className="col-md-6">
        <div className="card">
          <div className="card-body" style={{ backgroundColor: "black" }}>
            <div
              id="carouselExampleSlidesOnly"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={img1
                    }
                    className="d-block w-100"
                    alt="..."
                    height={350}
                    width={105}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
 
  
  
</div>

        <Footer/>
        </>
    )
}

export default Home