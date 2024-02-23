import React from "react";
function Footer()
{
    return(

        <>
        <div className="cotainer-fluid bg-dark mt-5">
  <div className="containerA" style={{color:'white'}}>
    <div className="row">
      <div className="col-lg-4 ml-2 mt-5">
        <p>
          <i className="fa fa-phone" aria-hidden="true" />
           <hb></hb>+916854654221 <br /> +91656565465
        </p>
        <p>
          <i className="fa fa-location-arrow" aria-hidden="true" />
            E-8/ 118 ishwar nagar,Dana Pani Road, Gulmohar Colony Bhopal
        </p>
        <i className="fa-regular fa-envelope" aria-hidden="true" />
          amit.lauwanshi09@gmail.com
        <br />
          alauwanshi@gmail.com
        <p></p>
      </div>
      <div className="col-lg-4 pt-5 text-center">
        <h4>Join us At </h4>
        <div className="row" style={{ placeContent: "center" }}>
          <div className="col-lg-1">
            <a href="https://www.instagram.com/" target="_blank">
              <i
                className="fa-brands fa-instagram"
                style={{ fontSize: "40px!important" }}
                aria-hidden="true"
              />
            </a>
          </div>
          <div className="col-lg-1">
            <a href="https://www.facebook.com/" target="_blank">
              <i
                className="fa-brands fa-facebook-square"
                aria-hidden="true"
                style={{ fontSize: "40px!important" }}
              />
            </a>
          </div>
          <div className="col-lg-1">
            <a href="https://twitter.com/home" target="_blank">
              <i
                className="fa-brands fa-x-twitter"
                aria-hidden="true"
                style={{ fontSize: "40px!important" }}
              />
            </a>
          </div>
        </div>
        <br />
        <br />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque ab vel
          rerum provident distinctio itaque sit placeat earum hic dolorem
          incidunt nulla totam ipsam, est doloribus praesentium esse inventore
          voluptates. Nulla praesentium quod quos id atque, sunt nam quis iste
          error totam adipisci autem alias neque reprehenderit natus odio quia!
        </p>
      </div>
      <div className="col-lg-4 mt-5 mr-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1833.6743095651111!2d77.43804!3d23.193962449999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c43bb0293f237%3A0xd392e9623ca384cf!2sIshwar%20Nagar%2C%20Gulmohar%20Colony%2C%20Bhopal%2C%20Madhya%20Pradesh%20462039!5e0!3m2!1sen!2sin!4v1700546716464!5m2!1sen!2sin"
          width={400}
          height={400}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  </div>
</div>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.2/css/fontawesome.min.css" integrity="sha384-BY+fdrpOd3gfeRvTSMT+VUZmA728cfF9Z2G42xpaRkUGu2i3DyzpTURDo5A6CaLK" crossorigin="anonymous"></link>
        </>
    )
}
export default Footer