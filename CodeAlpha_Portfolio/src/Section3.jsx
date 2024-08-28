import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import android from "./assets/android.jpg"
import bootsrap from "./assets/bootstrap.jpg"
import c from "./assets/c++.jpg"
import css from "./assets/css.jpg"
import express from "./assets/express.jpg"
import github from "./assets/github.jpg"
import html from "./assets/html.jpg"
import java from "./assets/java.jpg"
import jslogo from "./assets/jslogo.jpg"
import mongodb from "./assets/mongodb.jpg"
import mui from "./assets/mui.jpg"
import nodelogo from "./assets/nodelogo.jpg"
import reactlogo from "./assets/reactlogo.jpg"
import springboot from "./assets/springboot.jpg"
import sql from "./assets/sql.jpg"


function Section3() {
    return (
        <>
            <div style={{ backgroundColor: "#191970" }} className=''>
                <div className="container pb-3">
                    <div className="row text-light fw-bold " data-aos="fade-down" data-aos-duration="1500">
                        <h1 className='d-flex justify-content-center my-5'>
                            <FontAwesomeIcon icon={faLaptopCode} className='me-2 mt-2' /> Skills & <span style={{ color: "yellow" }}>Abilities</span>
                        </h1>
                    </div>
                    <div className="container " style={{ backgroundColor: "#0818A8" }}>
                        <div className="row d-flex justify-content-between">
                            <div className="col-md-3" data-aos="fade-up" data-aos-duration="1500">
                                <div className="card bg-dark my-2"  >

                                    <img src={bootsrap} alt="" className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-md-3" data-aos="fade-up" data-aos-duration="1500">
                                <div className="card bg-dark my-2"  >

                                    <img src={c} alt="" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="col-md-3" data-aos="fade-up" data-aos-duration="1500">
                                <div className="card bg-dark my-2"  >

                                    <img src={android} alt="" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="col-md-3" data-aos="fade-up" data-aos-duration="1500">
                                <div className="card bg-dark my-2"  >

                                    <img src={mui} alt=""className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-md-3" data-aos="fade-up" data-aos-duration="1500">
                                <div className="card bg-dark my-2"  >

                                    <img src={sql} alt="" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="col-md-3" data-aos="fade-up" data-aos-duration="1500">
                                <div className="card bg-dark my-2"  >

                                    <img src={mongodb} alt="" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="col-md-3" data-aos="fade-up" data-aos-duration="1500">
                                <div className="card bg-dark my-2"  >

                                    <img src={express} alt="" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="col-md-3" data-aos="fade-up" data-aos-duration="1500">
                                <div className="card bg-dark my-2"  >

                                    <img src={reactlogo} alt="" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="col-md-3" data-aos="fade-up" data-aos-duration="1500">
                                <div className="card bg-dark my-2"  >

                                    <img src={nodelogo} alt="" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="col-md-3" data-aos="fade-up" data-aos-duration="1500">
                                <div className="card bg-dark my-2"  >

                                    <img src={html} alt="" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="col-md-3" data-aos="fade-up" data-aos-duration="1500">
                                <div className="card bg-dark my-2"  >

                                    <img src={css} alt="" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="col-md-3" data-aos="fade-up" data-aos-duration="1500">
                                <div className="card bg-dark my-2"  >

                                    <img src={jslogo} alt="" className="img-fluid"/>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Section3;