import React, { useEffect } from 'react';
import logo from "./assets/logo.jpg";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function Layout() {
    useEffect(() => {
        
        const scrollspy = new bootstrap.ScrollSpy(document.body, {
          target: '.navbar',
          offset: 50,
        });
    
        return () => {
          
          scrollspy.dispose();
        };
      }, []);
    return (
        <>
            <header className="shadow align-items-center">
                <div className="container">
                    <div className="row d-flex justify-content-between">
                        <div className="col-md-1 mt-2">
                            <div className="d-flex justify-content-between fs-5 fw-bold">
                                <img 
                                    src={logo} 
                                    className="img-fluid" 
                                    alt="Company Logo" 
                                    style={{ height: "40px" }} 
                                />
                                <p className="mt-1">ARButt</p>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <nav className="navbar navbar-expand-sm justify-content-center">
                                <ul className="navbar-nav fs-5 f">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#section1">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#section2">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#section3">Skills</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#section4">Education</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#section5">Contact</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            <section id="section1">
                <Section1 />
            </section>
            <section id="section2">
                <Section2 />
            </section>
            <section id="section3">
                <Section3 />
            </section>
            <section id="section4">
                <Section4 />
            </section>
            <section id="section5">
                <Section5 />
            </section>
        </>
    );
}

export default Layout;
