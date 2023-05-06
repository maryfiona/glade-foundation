
import './Footer.css';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';




const Footer = () => {
  useEffect(() =>{
    AOS.init();
  },[])
  return (
    <>
      <footer  className=" text-center text-lg-start  foooo">
        <div className="container-fluid p-4 foo ">
          <div className="row">
            <div><h2  data-aos="fade-left" className="sheee">contact</h2></div>
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5  data-aos="fade-left" className="text-uppercase mb-3">Phones:</h5>
              <ul  data-aos="fade-left" className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-dark">(123) 456 -6780</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">(123) 456 -6781
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">(123) 456 -6782</a>
                </li>
                
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5  data-aos="fade-right" className="text-uppercase mb-0 mb-3">Emails:</h5>
              <ul   data-aos="zoom-out"className="list-unstyled">
                <li>
                  <a href="#!" className="text-dark">emanuel@glade.com</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">adewale@glade.com</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0 " >
              <h5 href="/"  data-aos="fade-left" className="text-uppercase mb-3">Locations:</h5>
              <ul  data-aos="zoom-right" className="list-unstyled mb-0">
                <li>
                  <p className="text-dark">28 Jackson Blvd 1020 </p>
                </li>
                <li>
                  <p className="text-dark">Chicago IL</p>
                </li>
                <li>
                  <p className="text-dark">22 Oak Street</p>
                </li>
                <li>
                  <p className="text-dark"> Brooklyn, NY 11216</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center p-3 fooo">
        (c) 2023 glade foundation
          <a className="text-dark " href="/">(c) Designed by CodeTECHS</a>
        </div>
      </footer>

    </>
  )
}
export default Footer;