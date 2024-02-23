import React from "react";
import img3 from './banner1.png'
import img2 from './banner2.png'
import img1 from './banner2.jpg'



function Slider()
{
    return(
        <>
        <div className="conatiner-fluid mt-5">
  <div
    id="carouselExampleCaptions"
    className="carousel slide"
    data-bs-ride="carousel"
  >
    <div className="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to={0}
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      />
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to={1}
        aria-label="Slide 2"
      />
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to={2}
        aria-label="Slide 3"
      />
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img
          src={img3}
          className="d-block w-100"
          alt="..."
          height={450}
          width={500}
        />
        <div className="carousel-caption d-none d-md-block">
          <h3>residentEase</h3>
          <p>Serve To Ease Life</p>
        </div>
      </div>
      <div className="carousel-item">
        <img
          src={img2}
          className="d-block w-100"
          alt="..."
          height={450}
          width={500}
        />
        <div className="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img
          src={img1}
          className="d-block w-100"
          alt="..."
          height={450}
          width={500}
        />
        <div className="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </div>
      </div>
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>

        
        </>
    )
}

export default Slider  