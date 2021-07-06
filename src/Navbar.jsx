import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <>
            <div className Name="container-fluid nav_bg">
                <div className Name="row">
                    <div className="navbar">



                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand" to="/">Crick<span class="text-primary">Info</span></NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink activeClassName="menu_active" className="nav-link"  to="/countries">Countries</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName="menu_active" className="nav-link" to="/teams">Teams Profile</NavLink>
                                        </li>


                                        
                                        <li class="nav-item dropdown">
                                            <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Player Profile
                                            </NavLink>
                                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><NavLink className="dropdown-item" to="/india">India Players Profile</NavLink></li>
                                                <li><NavLink className="dropdown-item" to="/england">England Players Profile</NavLink></li>
                                              
                                        </ul>
                                            </li>

                                            <li className="nav-item">
                                            <NavLink activeClassName="menu_active" className="nav-link" to="/venue">Venue</NavLink>
                                        </li>

                                        <li className="nav-item">
                                            <NavLink activeClassName="menu_active" className="nav-link" to="/matches">List of Matches</NavLink>
                                        </li>

                                        <li className="nav-item">
                                            <NavLink activeClassName="menu_active" className="nav-link" to="/summary">Match Summary</NavLink>
                                        </li>


                                        <li className="nav-item">
                                            <NavLink activeClassName="menu_active" className="nav-link" to="/result">Results</NavLink>
                                        </li>
                                     </ul>       
                                </div>
                            </div>
                        </nav>

                            </div>
                </div>
                    </div>
        </>
                )
}

                export default Navbar;