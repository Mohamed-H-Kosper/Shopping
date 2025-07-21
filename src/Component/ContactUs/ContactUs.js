import contactImg from "../images/contact2.jpg";
import contactImg2 from "../images/contact1.jpg";
import "../ContactUs/ContactUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHourglass,
  faLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
function ContactUs() {
  return (
    <>
      <div className="contact-all">
        <div className="wave-image ">
          <img
            className="w-100  image-contact1"
            src={contactImg}
            alt="NoPhoto"
          />
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-5 col-md-6 col-12">
              <img className="image-contact2" src={contactImg2} alt="NoPhoto" data-aos="zoom-out-right" />
            </div>
            <div className="col-xl-7 col-md-6 col-12" data-aos="fade-left">
              <h1 className="mt-4">Contact Us</h1>
              <div className="mt-5 mb-3 ">
                <label for="exampleFormControlInput1" className="form-label">
                  Name
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter your Name"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Email@example.com"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="6"
                ></textarea>
              </div>
              <div className="form-check mt-3 mb-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  I accept the Terms of Service
                </label>
              </div>
              <button className="btn btn-info form-control btn-submit">
                <h5 className="text-white fw-bold">Submit</h5>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* BOX CONTACT */}
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="box">
            <div className="box1 bg-info text-white col-xl-3 col-md-5 col-12 mt-5" data-aos="fade-right">
              <h4 className="fw-bold text mt-5">
                <FontAwesomeIcon icon={faPhone} /> CALL US
              </h4>
              <h5 className="text mt-4"> 01111208422</h5>
            </div>
            <div className="box1 bg-info text-white col-xl-3  col-md-5 col-12 mt-5 " data-aos="fade-up">
              <h4 className="fw-bold text mt-5">
                <FontAwesomeIcon icon={faLocation} /> LOCATION
              </h4>
              <h5 className="text mt-4">
                121 Rock Sreet, 21 Avenue, New York, NY 92103-9000
              </h5>
            </div>
            <div className="box1 bg-info text-white col-xl-3  col-md-5 col-12 mt-5 ml-2" data-aos="fade-right">
              <h4 className="fw-bold text mt-5">
                <FontAwesomeIcon icon={faHourglass} /> HOURS
              </h4>
              <h5 className="text mt-4">
                Mon – Fri …… 11 am – 8 pm, Sat, Sun …… 6 am – 8 pm
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ContactUs;
