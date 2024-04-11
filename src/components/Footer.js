import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faPaperPlane,
   faPhoneVolume,
   faEnvelope,
   faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
   return (
      <>
         <div className="Footer bg-dark">
            <div className="container ">
               <div className="row text-center ">
                  <div className="col-md-6 col-lg-3 col-12 ft-1">
                     <h3>
                        <span>Admission Center</span>
                     </h3>
                     <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Laborum ea quo ex ullam laboriosam magni totam,
                        facere eos iure voluptate.
                     </p>
                  </div>
                  <div className="col-md-6 col-lg-3 col-12 ft-2">
                     <h5>Quick Links</h5>
                     <ul>
                        <li className="nav-item">
                           <a className="" href="/">
                              Home
                           </a>
                        </li>
                        <li className="nav-item">
                           <a className="" href="/service">
                              Services
                           </a>
                        </li>

                        <li className="nav-item">
                           <a className="" href="/contact">
                              Contact
                           </a>
                        </li>
                        <li className="nav-item">
                           <a className="" href="/courses">
                              Courses
                           </a>
                        </li>
                     </ul>
                  </div>
                  <div className="col-md-6 col-lg-3 col-12 ft-3">
                     <h5>Quick Links</h5>
                     <p>
                        <FontAwesomeIcon icon={faPhoneVolume} /> 91+ 8111071081
                     </p>
                     <p>
                        <FontAwesomeIcon icon={faEnvelope} />
                        highereduoffialtn@gmail.com
                     </p>
                     <p>
                        <FontAwesomeIcon icon={faLocationDot} />
                        Tamilnadu.
                     </p>
                  </div>
                  <div className="col-lg-3 col-md-6 news-letter">
                     <h5 className=" mb-3">Newsletter</h5>
                     <p style={{ fontsize: "1.06rem" }}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt.
                     </p>
                     <form action="#">
                        <div className="input-group mb-3">
                           <input
                              className="form-control"
                              type="text"
                              placeholder="Recipient's username"
                              aria-label="Recipient's username"
                              aria-describedby="button-addon2"
                           />
                           <button
                              className="btn btn-primary"
                              id="button-addon2"
                              type="button"
                           >
                              <FontAwesomeIcon icon={faPaperPlane} />
                           </button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
         <div className="Last-footer bg-primary text-light">
            <p>&copy; Copyrights Reserved </p>
         </div>
      </>
   );
};
