import React from "react";
import { Card } from "react-bootstrap";
import { Back } from "./Back";

const items = [
   {
      id: 1,
      image: require("../assists/cardiac.jpg"),
      name: "Cardiac Technology",
   },
   {
      id: 2,
      image: require("../assists/cardio.webp"),
      name: "Cardio Pulmonary",
   },
   {
      id: 3,
      image: require("../assists/operation.jpeg"),
      name: "Operation theatre & Anesthesia",
   },
   {
      id: 4,
      image: require("../assists/physician.jpg"),
      name: "Physician Assistant",
   },
   {
      id: 5,
      image: require("../assists/dialysis.jpeg"),
      name: "Dialysis",
   },
   {
      id: 6,
      image: require("../assists/radiology.webp"),
      name: "Radiology & Imaging Technology",
   },
   {
      id: 7,
      image: require("../assists/medical lab.webp"),
      name: "Medical Lap Technology",
   },
   {
      id: 8,
      image: require("../assists/critical.jpg"),
      name: "Critical Care",
   },
   {
      id: 9,
      image: require("../assists/optometry.jpeg"),
      name: "Optometry",
   },
   {
      id: 10,
      image: require("../assists/emergency.webp"),
      name: "Accident & Emergency Care",
   },

   {
      id: 12,
      image: require("../assists/respiratory.webp"),
      name: "Respiratory therapy",
   },
   {
      id: 13,
      image: require("../assists/neuro.jpg"),
      name: "Neuro Electro physiology",
   },
];

export const Alied = () => {
   return (
      <div className=" engin-page bg-light">
         <header className="height-75">
            <div className="container pt-3">
               <Back />
            </div>
            <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-dark">
               <h1 className="text-center fw-semibold py-4">
                  Our Education Courses
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
