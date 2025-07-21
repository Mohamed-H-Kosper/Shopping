import { Link } from "react-router-dom";
import "./Footer.css";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <>
      <footer className="text-white text-center text-lg-start footer-bg">
        <div className=" p-4">
          <div className="row mt-4">
            <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">About company</h5>

              <p>
                We believe that online shopping should be easy and secure, which
                is why we are constantly improving our services to meet our
                customers' expectations and achieve their complete satisfaction.
                Whether you're looking for a premium product or a great
                offering, Shooping is your perfect destination to get everything
                you need from the comfort of your home.
              </p>

              <div className="mt-4">
                <a
                  href="https://www.kosper1@gmail.com"
                  type="button"
                  className="btn btn-floating btn-primary btn-lg me-2"
                >
                  <FontAwesomeIcon
                    className="link-profile fs-4"
                    icon={faTwitter}
                  />
                </a>
                <a
                  href="https://www.facebook.com/share/18oiS3cwDM/"
                  type="button"
                  className="btn btn-floating btn-primary btn-lg me-2"
                >
                  <FontAwesomeIcon
                    className="link-profile fs-4"
                    icon={faFacebookF}
                  />
                </a>
                <a
                  href="https://www.facebook.com/share/18oiS3cwDM/"
                  type="button"
                  className="btn btn-floating btn-primary btn-lg me-2"
                >
                  <FontAwesomeIcon
                    className="link-profile fs-4"
                    icon={faWhatsapp}
                  />
                </a>
                <a
                  href="https://www.instagram.com/_mohamed_kosper/?igsh=dGw5OTNzZDNhNm9x"
                  type="button"
                  className="btn btn-floating btn-primary btn-lg"
                >
                  <FontAwesomeIcon
                    className="link-profile fs-4"
                    icon={faInstagram}
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4 pb-1">Search something</h5>

              <div className="form-outline form-white mb-4">
                <input
                  type="text"
                  id="formControlLg"
                  className="form-control form-control-lg"
                />
                <label className="form-label" for="formControlLg">
                  Search
                </label>
              </div>

              <ul className="Icons fa-ul">
                <li className="mb-3">
                  <span className="fa-li">
                    <FontAwesomeIcon icon={faHome} />
                  </span>
                  <span className="ms-2 ">Egypt, NY 112, Street</span>
                </li>
                <li className="mb-3">
                  <span className="fa-li ">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  <span className="ms-2 email">mkosper1@gmail.com</span>
                </li>
                <li className="mb-3">
                  <span className="fa-li">
                    <FontAwesomeIcon icon={faPhone} />
                  </span>
                  <span className="ms-2 ">+ 20 01111208422</span>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">Opening hours</h5>

              <table className="table text-center text-white">
                <tbody className="font-weight-normal">
                  <tr>
                    <td>Mon - Thu:</td>
                    <td>8am - 9pm</td>
                  </tr>
                  <tr>
                    <td>Fri - Sat:</td>
                    <td>8am - 1am</td>
                  </tr>
                  <tr>
                    <td>Sunday:</td>
                    <td>9am - 10pm</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="text-center p-3 copy">
          <Link className="text-white " href="https://mdbootstrap.com/">
            © 2025 Copyright: Mohamed Kosper
          </Link>
        </div>
      </footer>
    </>
  );
}
export default Footer;
