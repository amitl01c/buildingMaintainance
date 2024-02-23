
import React from 'react';
// import './App.css';  
import Login from './Component/Login';
import Reg from './Component/Reg';
import About from './Component/About';
import Service from './Component/Service';

import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Component/Home';
import AdminLogin from './admin/AdminLogin'
import Profile from './Component/Profile';

function App() {
  return (
    <>
     {<BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Reg/>}/>
        <Route path='/about' element={<About/>}/>
      <Route path='/admin' element={<AdminLogin/>}/>
      <Route path='/profile' element={<Profile/>}/>

      </Routes>
     </BrowserRouter> }
    
     
      
    </>
  );
}

export default App;
