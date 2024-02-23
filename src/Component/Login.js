import React, { useEffect } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from './logo.png'
import Header from './Header';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const Login=() => {

  const[data,setData]=useState({
    email:'',
    password:''

  })

  // const[data,setData]=useEffect({
  //   console.log(data);
  // })

   //submitForm

   const submitForm=(event)=>{
    event.preventDefault();

    // in it we perform 2 task
    //1. validation

    //2. api connection
   }



  //handle change

  const handleChange=(event,property)=>{
    // in this we set all the data dynamically without creating function for each field
   setData({...data,[property]:event.target.value})
  }

  const [error,setError]=useState({
    error:{},
    isError:false
  })

  return (
    <>
    <Header/>
    <MDBContainer className="my-5 gradient-form">

      <MDBRow>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column ms-5">

            <div className="text-center">
              <img src={img}
                style={{width: '185px'}} alt="logo" />
              <h4 className="mt-1 mb-5 pb-1">We are The residentEase</h4>
            </div>

            <p>Please login to your account</p>

          <form onSubmit={submitForm}>
            <MDBInput wrapperClass='mb-4' label='Email address' id='email' type='email' onChange={(e)=>handleChange(e,'email') }/>
            <MDBInput wrapperClass='mb-4' label='Password' id='password' type='password'  onChange={(e)=>handleChange(e,'password')} />

            {/* value={data.password}  */}

            <div className="text-center pt-1 mb-5 pb-1">
              <MDBBtn className="mb-4 w-100 gradient-custom-2" type='submit'>Login</MDBBtn>
              <Link className="text-muted" href="#!">Forgot password?</Link>
            </div>
            </form>
            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Don't have an account?</p>
              <Link to="/register"><MDBBtn outline className='mx-2' color='danger'>
              Register
              </MDBBtn></Link>
            </div>

          </div>

        </MDBCol>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">
           <img src='https://mobisoftinfotech.com/resources/wp-content/uploads/2018/08/Banner.png' height={250}></img>
            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 class="mb-4">We are more than just a company</h4>
              <p class="small mb-0">When hiring any home service professional, it's important to research and choose reputable companies or individuals, check reviews, and verify licenses or certifications. Additionally, obtaining multiple quotes and asking for references can help ensure you get quality service at a fair price.
              </p>
            </div>

          </div>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
    </>
  );
}

export default Login;