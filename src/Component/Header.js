import React from "react";
import logo from './logo.png'
import { Link } from "react-router-dom";

function Header() {

    
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img
                            src={logo}
                            alt="residentEase"
                            height="40px"
                            width="40px"
                            style={{ borderRadius: '5%' }}
                        />
                    </Link>
                    <h3 style={{color:'ButtonShadow'}}>resident<b>Ease</b></h3>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown" >
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/service">
                                    Services
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/login">
                                    Login
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/register">
                                    Register
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/about">
                                    About Us
                                </Link>
                            </li>
                            
                        </ul>
                    </div>

                    {/* user profile */}


                    
                </div>
            </nav>
        </>
    );

    
}

export default Header;
