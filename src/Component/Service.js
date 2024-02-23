import React from 'react';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './aap.css';
import Header from './Header';
import Footer from './Footer';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput
  }
  from 'mdb-react-ui-kit';

function Service() {
  
	return (
        <>
        <Header/>
		<div>
			<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"/>

<section class="section services-section" id="services">
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <div class="section-title">
                    <h2>Services To Serve You</h2>
                </div>
            </div>
        </div>
        <div class="row">
            
            <div class="col-sm-6 col-lg-4">
                <div class="feature-box-1">
                    <div class="icon">
                        <i class="fa fa-desktop"></i>
                    </div>
                    <div class="feature-content">
                        <h5>Electrician and Mainteinance</h5>
                        <p>Our electrical services ensure that your building's or Society's electrical systems are in top-notch condition. From installations to repairs, our skilled technicians are equipped to handle any electrical issue efficiently and safely.echnicians are responsible for installing, maintaining and repairing electronic equipment.</p>
                        <br></br>
                        <Link to="/login">
                        <MDBBtn className="mb-4 w-100 gradient-custom-2">Get Service</MDBBtn>
                        </Link>
                    </div>
                </div>
            </div>
            
            
            <div class="col-sm-6 col-lg-4">
                <div class="feature-box-1">
                    <div class="icon">
                        <i class="fa fa-user"></i>
                    </div>
                    <div class="feature-content">
                        <h5>Garden Maintenance</h5>
                        <p>In addition to basic gardening tasks such as mowing, trimming, and weeding, our gardening services also include landscape design and maintenance. Whether you're looking to create a tranquil outdoor space or enhance your building's curb appeal, our team will work closely with you to bring your vision to life.</p>
                        <br></br>
                        <Link to="/login">
                        <MDBBtn className="mb-4 w-100 gradient-custom-2">Get Service</MDBBtn>
                        </Link>
                    </div>
                </div>
            </div>
            
            
            <div class="col-sm-6 col-lg-4">
                <div class="feature-box-1">
                    <div class="icon">
                        <i class="fa fa-comment"></i>
                    </div>
                    <div class="feature-content">
                        <h5>Sewage Mainteinance and cleaning</h5>
                        <p>Our sewage maintenance services encompass everything from routine cleaning and unclogging to major repairs and system upgrades. We utilize advanced equipment and techniques to effectively manage sewage issues and minimize disruptions to your daily operations.</p>
                        <br></br>
                        <Link to="/login">
                        <MDBBtn className="mb-4 w-100 gradient-custom-2">Get Service</MDBBtn>
                        </Link>
                    </div>
                </div>
            </div>
            
            
            <div class="col-sm-6 col-lg-4">
                <div class="feature-box-1">
                    <div class="icon">
                        <i class="fa fa-image"></i>
                    </div>
                    <div class="feature-content">
                        <h5>Deep cleaning Services</h5>
                        <p>Our home and bathroom cleaning services are designed to save you time and effort while providing exceptional results. Our experienced cleaners use top-quality products and techniques to ensure a spotless and hygienic environment for you and your family.
                        </p>
                        <br></br>
                        <Link to="/login">
                        <MDBBtn className="mb-4 w-100 gradient-custom-2">Get Service</MDBBtn>
                        </Link>

                    </div>
                </div>
            </div>
            
            
            <div class="col-sm-6 col-lg-4">
                <div class="feature-box-1">
                    <div class="icon">
                        <i class="fa fa-th"></i>
                    </div>
                    <div class="feature-content">
                        <h5>Lift Maintenance</h5>
                        <p>Ensure the safety and reliability of your building's lifts with our comprehensive maintenance services. Our technicians conduct regular inspections, lubrication, and repairs to keep your lifts in optimal working condition.
                        </p>   
                        <br></br> 
                        <Link to="/login">
                        <MDBBtn className="mb-4 w-100 gradient-custom-2">Get Service</MDBBtn>
                        </Link>
                        
                    </div>
                </div>
            </div>
            
            
            <div class="col-sm-6 col-lg-4">
                <div class="feature-box-1">
                    <div class="icon">
                        <i class="fa fa-cog"></i>
                    </div>
                    <div class="feature-content">
                        <h5>Pest Control</h5>
                        <p>Say goodbye to unwanted pests with our professional pest control services.Our pest control experts are trained to identify and eliminate common pests such as rodents, insects, and termites. We use environmentally friendly products and methods to ensure the safety of your residents and the integrity of your building or society.</p>
                        <br></br>
                        <Link to="/login">
                        <MDBBtn className="mb-4 w-100 gradient-custom-2">Get Service</MDBBtn>
                        </Link>
                    </div>
                </div>
            </div>

 <div class="col-sm-6 col-lg-4">
                <div class="feature-box-1">
                    <div class="icon">
                        <i class="fa fa-comment"></i>
                    </div>
                    <div class="feature-content">
                        <h5>Garbage Collection Service</h5>
                        <p>Keep your premises clean and organized with our society garbage collection services. Our team will efficiently collect and dispose of waste, adhering to the highest standards of cleanliness and environmental responsibility .
</p>
<br></br>
                        <Link to="/login">   
                        <MDBBtn className="mb-4 w-100 gradient-custom-2">Get Service</MDBBtn>
                        </Link>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</section>
		</div>

<Footer/>
        </>
	);
}
export default Service;