import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
function Section4() {
    return (
        <>
            <div className='section'>
                <div className="container">
                    <div className="header" data-aos="fade-down" data-aos-duration="1500">
                        <h1 className='d-flex justify-content-center mt-5'>
                            <FontAwesomeIcon icon={faGraduationCap} className='me-2 mt-2' /> My <span style={{ color: "purple" }}>Education</span>
                        </h1>
                        <p className='text-center mb-5'>Education is not the learning of facts, but the training of the mind to think.</p>
                    </div>
                    <div className="row justify-content-center">
                        <div className="d-flex justify-content-start shadow p-3 mb-5 border" style={{ width: "800px" }} data-aos="fade-up" data-aos-duration="1500"> 
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkes0GjWuHNaPnaw5SpIXWIQcCwQFDQ41FFg&s"
                                className="card-img-top img-fluid"
                                alt="..."
                                style={{ width: "200px" }}
                            />
                            <div className="ms-3">
                                <h4 className="text-primary">Bachelor of Software Engineer</h4>
                                <p className="-text">National University of Computer and Emerging Sciences | NUCES</p>
                                <p className="text-success">2021 - 2025 | Pursuing</p>
                            </div>
                        </div>

                        <div className="d-flex justify-content-start shadow p-3 mb-5 border" style={{ width: "800px" }} data-aos="fade-up" data-aos-duration="1500"> 
                            <img
                                src="https://pgc.edu/wp-content/uploads/2022/09/Front-view--300x225.jpg"
                                className="card-img-top img-fluid"
                                alt="..."
                                style={{ width: "200px" }}
                            />
                            <div className="ms-3">
                                <h4 className="text-primary">FSC Pre-Engineering</h4>
                                <p className="-text">Punjab Group of Colleges | PGC</p>
                                <p className="text-success">2019 - 2021 | Completed</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Section4