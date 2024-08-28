import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import pic from "./assets/pic.png"
import resume from "./assets/Resume.pdf"
function Section2() {
    
    return (
        <section id="section2 ">
            <div className="container my-5 section">
                <div className="row">
                    <div className="heading mb-5" data-aos="fade-down" data-aos-duration="1500">
                        <h1 className='text-center fw-bold'>
                            <FontAwesomeIcon icon={faUser} /> About <span style={{ color: "purple" }}>Me</span>
                        </h1>
                    </div>
                </div>
                <div className="container">
                    <div className="row d-flex justify-content-around">
                        <div className="col-md-4 " data-aos="fade-right" data-aos-duration="1500">
                            <img src={pic} alt="" className='img-fluid rounded shadow-lg' />
                        </div>
                        <div className="col-md-6" data-aos="fade-left" data-aos-duration="1500">
                            <h3>I'm Abdul Rafay</h3>
                            <h6>Full Stack Developer</h6>
                            <p>I am a Full-Stack developer based in Lahore, Pakistan. I am an Software Engineer undergraduate from National Univerity of Computing And Emerging Sciences(NUCES). I am very passionate about improving my coding skills & developing applications & websites. I build WebApps and Websites using MERN Stack. Working for myself to improve my skills. Love to build Full-Stack clones.</p>
                            <div className="row">
                                <p> Email:  <a className='link' href="https://mail.google.com/" target='_blank'>abdulrafay23butt@gmail.com</a></p>
                            </div>
                            <div className="resume">
                                <button className="btn btn-primary fs-5 p-3" onClick={()=>{window.open(resume, '_blank');}}>Resume</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Section2;
