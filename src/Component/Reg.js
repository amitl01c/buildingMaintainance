import React, { useState,useEffect} from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBRadio,
  
}
from 'mdb-react-ui-kit';
import Header from './Header';
import { signUp } from '../connectivity/user-service';

const Reg=()=> {

  const[data,setData]=useState({

    name:'',
    address:'',
    pincode:'',
    email:'',
    password:''

  }) 

  //submitForm
  // const submitForm=(event)=>{
  //   console.log(data);

  //   signUp(data).then((resp)=>{
  //     console.log(resp);
  //     console.log("successfully registered");
  //   }).catch((error)=>{
  //     console.log(error);
  //   })

  // };



  //handle change

  useEffect(()=>{
    console.log(data)
  },[data])

  const handleChange=(event,property)=>{
    //in this we set all the data dynamically without creating function for each field
    setData({...data,[property]:event.target.value})
  }

  const [error,setError]=useState({
    error:{},
    isError:false
  })
  
  return (
    <>
  <Header/>
    <MDBContainer fluid className='lightblue'>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol>

          <MDBCard className='my-4'>

            <MDBRow className='g-0'>

              <MDBCol md='6' className="d-none d-md-block">
                <MDBCardImage src='https://www.odtap.com/wp-content/uploads/2022/12/46776-scaled.jpg' alt="Sample photo" className="rounded-start" fluid/>
              </MDBCol>

              <MDBCol md='6'>

                <MDBCardBody className='text-black d-flex flex-column justify-content-center' style={{}}>
                  <h3 className="mb-5 text-uppercase fw-bold">Registration Form</h3>

                  {/* onSubmit={submitForm()} */}
                  <form > 
                   <MDBInput wrapperClass='mb-4' label='User Name' size='lg' id='name' type='text' onChange={(e)=>handleChange(e,'name')} value={data.name} />

                  <MDBInput wrapperClass='mb-4' label='Address' size='lg' id='address' type='text' onChange={(e)=>handleChange(e,'address')} value={data.address}/>
                  
                  <MDBInput wrapperClass='mb-4' label='Pincode' size='lg' id='pincode' type='text' onChange={(e)=>handleChange(e,'pincode')} value={data.pincode}/>

                  <MDBInput wrapperClass='mb-4' label='Email ID' size='lg' id='email' type='email'onChange={(e)=>handleChange(e,'email')} value={data.email}/>

                  <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='password' type='password'onChange={(e)=>handleChange(e,'password')} value={data.password}/>

                  <div className="d-flex justify-content-end pt-3">
                    <MDBBtn color='light' size='md' type='reset'>Reset all</MDBBtn>
                    <MDBBtn className='ms-2' color='warning' size='md' type='submit'>Submit form</MDBBtn>
                  </div>
                  </form>
                </MDBCardBody>

              </MDBCol>
            </MDBRow>

          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>

    </>
  );
}

export default Reg;