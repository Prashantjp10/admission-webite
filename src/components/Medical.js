import React from "react";
import { Card } from "react-bootstrap";
import {Back } from "./Back"
const items = [
   {
      id: 1,
      image: require("../assists/mbbs.webp"),
      name: "MBBS",
   },
   {
      id: 2,
      image: require("../assists/veterinary.webp"),
      name: "Veterinary",
   },
   {
      id: 3,
      image: require("../assists/bds.webp"),
      name: "BDS",
   },
   {
      id: 4,
      image: require("../assists/siddha.webp"),
      name: "Siddha",
   },
   {
      id: 5,
      image: require("../assists/homoeopathy.webp"),
      name: "Homeopathy",
   },
   {
      id: 6,
      image: require("../assists/Ayurveda.webp"),
      name: "Ayurveda",
   },
   {
      id: 7,
      image: require("../assists/yoga.jpg"),
      name: "Naturopathy & Yoga",
   },
];

export const Medical = () => {
   return (
      <div className=" engin-page bg-light">
         <header className="height-75">
            <div className="container pt-3">
               <Back />
            </div>
            <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-dark">
               <h1 className="text-center fw-semibold py-4">
                  Our Medical Courses
               </h1>
               <p className="text-center w-75 mb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam odio eos distinctio ducimus! Modi quaerat dolores illo
                  accusamus maxime cupiditate culpa minus animi repellat autem!
               </p>
            </div>
         </header>
         <div className="container py-5 ">
            <div className="row g-4">
               {items.map((item) => (
                  <div key={item.id} className="col-lg-3 col-md-6">
                     <Card className="d-flex flex-column align-items-center justify-content-center py-3  text-center  text-light">
                        <Card.Img
                           src={item.image}
                           style={{ height: "120px", width: "200px" }}
                        />

                        <Card.Title className="fs-5 text-dark mt-2 py-2 px-2 overflow-auto">
                           {item.name}
                        </Card.Title>
                     </Card>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};
