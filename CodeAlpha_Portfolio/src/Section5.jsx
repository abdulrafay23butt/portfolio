import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadphones } from '@fortawesome/free-solid-svg-icons'
import contact from "./assets/contact.jpg"
function Section5() {
    return (
        <>
            <div style={{backgroundColor:"lightblue",paddingBottom:"30px"}}>
                <div className="row text-light fw-bold" data-aos="fade-down" data-aos-duration="1500">
                    <h1 className='d-flex justify-content-center my-5'>
                        <FontAwesomeIcon icon={faHeadphones} className='me-2 mt-2' /> Get in <span style={{ color: "purple" }}>Touch</span>
                    </h1>
                </div>
                <div className="container p-3 rounded shadow-lg " style={{backgroundColor:"white"}} >
                    <div className="row">
                        <div className="col-md-6" data-aos="fade-down" data-aos-duration="1500">
                            <img src={contact} alt="" className='img-fluid' />
                        </div>
                        <div className="col-md-6" data-aos="fade-down" data-aos-duration="1500">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder="name" style={{backgroundColor:"lightblue"}}/>
                                <label htmlFor="floatingInput">Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" style={{backgroundColor:"lightblue"}}/>
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingPassword" placeholder="Phone" style={{backgroundColor:"lightblue"}} />
                                <label htmlFor="floatingPassword">Phone</label>
                            </div>
                            <div className="form-floating mb-3">
                                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" rows="50" style={{backgroundColor:"lightblue"}}></textarea>
                                <label htmlFor="floatingTextarea2">Message</label>
                            </div>
                            <div className="submit d-flex justify-content-end">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Section5;