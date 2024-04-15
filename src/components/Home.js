import React from "react";
import { HomeLander } from "./HomeLander";
import onlineImg from "../assists/onlineImg.webp";
import intercourseImg from "../assists/intercourseImg.webp";
import settingImg from "../assists/settingImg.jpg";

export const Home = () => {
   return (
      <>
         <HomeLander />
         <section>
            <div className="container py-5 d-flex gap-3 home-section">
               <div className=" d-flex gap-4">
                  <div className="card-1">
                     <img src={settingImg} alt="settingimg" />
                  </div>
                  <div>
                     <h4>Innovative Courses</h4>
                     <p>
                        Explore wide-range of innovative and essential courses
                     </p>
                  </div>
               </div>

               <div className=" d-flex gap-4">
                  <div className="card-1 ">
                     <img src={onlineImg} alt="onlineimg" />
                  </div>
                  <div>
                     <h4>Top Instructors</h4>
                     <p>
                        Learn from the best experts and professors of the
                        subjects
                     </p>
                  </div>
               </div>
               <div className="d-flex gap-4">
                  <div className="card-1">
                     <img src={intercourseImg} alt="intercourseimg" />
                  </div>
                  <div>
                     <h4>Online Education</h4>
                     <p>Allow you to learn and experience anywhere, anytime</p>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};
