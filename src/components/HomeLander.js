import React from "react";
import { Button, Carousel } from "react-bootstrap";
import staffroom from "../assists/staffroom.jpg";
import graduates from "../assists/graduates.jpg";
// import medical from "../assists/medical.jpg";
import world from "../assists/world.jpg";

export const HomeLander = () => {
   return (
      <div className="lander-height">
         {" "}
         <Carousel>
            <Carousel.Item interval={1000}>
               <div className="c-item">
                  <img
                     className="d-block w-100 c-img"
                     src={staffroom}
                     alt="First slide"
                  />
               </div>
               <Carousel.Caption className="slider-caption top-0 mt-5">
                  <div className="slider-content mt-5 ">
                     <h5 className="text-primary">
                        Welcome To Admission Helpline
                     </h5>
                     <h4 className="py-2 ">
                        We Provide Students are Joining in Best Collegs.
                     </h4>
                     <Button>Read More</Button>
                  </div>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
               <div className="c-item">
                  <img
                     className="d-block w-100 c-img"
                     src={graduates}
                     alt="Second slide"
                  />
               </div>
               <Carousel.Caption className="slider-caption top-0 mt-5">
                  <div className="slider-content mt-5">
                     <h5 className="text-primary">
                        Welcome To Admission Helpline
                     </h5>
                     <h4 className="py-2 ">
                        We Provide Students are Joining in Best Collegs.
                     </h4>
                     <Button>Read More</Button>
                  </div>
               </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
               <div className="c-item">
                  <img
                     className="d-block w-100 c-img"
                     src={world}
                     alt="Third slide"
                  />
               </div>
               <Carousel.Caption className="slider-caption top-0 left-0 mt-5 ">
                  <div className="slider-content mt-5">
                     <h5 className="text-primary">
                        Welcome To Admission Helpline
                     </h5>
                     <h4 className="py-2 ">
                        We Provide Students are Joining in Best Collegs.
                     </h4>
                     <Button>Read More</Button>
                  </div>
               </Carousel.Caption>
            </Carousel.Item>
         </Carousel>
      </div>
   );
};
