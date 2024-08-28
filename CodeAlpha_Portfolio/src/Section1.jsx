import React, { useState, useEffect } from "react";
import avatar from "./assets/avatar.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function Section1() {
    const textArray = ["FrontEnd Development", "Web Development", "App Development", "BackEnd Development"];
    const [textIndex, setTextIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);
    AOS.init();

    useEffect(() => {
        const handleTyping = () => {
            const currentText = textArray[textIndex];

            if (isDeleting) {
                if (charIndex > 0) {
                    setDisplayedText(currentText.slice(0, charIndex - 1));
                    setCharIndex(charIndex - 1);
                } else {
                    setIsDeleting(false);
                    setTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
                }
            } else {
                if (charIndex < currentText.length) {
                    setDisplayedText(currentText.slice(0, charIndex + 1));
                    setCharIndex(charIndex + 1);
                } else {
                    setTimeout(() => setIsDeleting(true), 1000);
                }
            }
        };

        const timeout = setTimeout(handleTyping, 40);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, textIndex, textArray]);

    return (
        <>
            <div className="moving-object object-1"></div>
            <div className="moving-object object-2"></div>
            <div className="moving-object object-3"></div>
            <div className="moving-object object-4"></div>
            <div className="moving-object object-5"></div>
            <div className="moving-object object-6"></div>
            <div className="moving-object object-7"></div>
            <div className="moving-object object-8"></div>
            <div className="moving-object object-9"></div>
            <div className="moving-object object-10"></div>
            <div className="d-flex justify-content-between align-items-center section1 section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7" data-aos="fade-right" data-aos-duration="1500">
                            <h1 className="display-5 fw-bold">Hi There,</h1>
                            <h1 className="display-5 fw-bold">I'm Abdul <span style={{ color: "orange" }}>Rafay</span></h1>
                            <h4>I am into <span style={{ color: "red" }}>{displayedText}</span></h4>
                            <button className="btn btn-primary rounded-pill shadow-lg text-light my-3 "><a className="text-light text-decoration-none p-3 fs-5" role="button" href="Section2" >About me</a></button>
                            {/* <div className="row d-flex ">
                                <div className="links ms-4 me-3 "><FontAwesomeIcon className="icons" icon={faLinkedin} /></div>
                                <div className="links"><FontAwesomeIcon className="icons" icon={faGithub} /></div>
                            </div> */}
                        </div>
                        <div className="col-md-5" data-aos="fade-left" data-aos-duration="1500">
                            <div className="circle shadow-lg">
                                <img src={avatar} alt="Avatar" className="img-fluid circleimg" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Section1;
