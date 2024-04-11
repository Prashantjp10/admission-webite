import React from "react";
import { Card } from "react-bootstrap";
import { Back } from "./Back";

const items = [
   {
      id: 1,
      image: require("../assists/thamizh.jpg"),
      name: "B.A -Tamil",
   },
   {
      id: 2,
      image: require("../assists/english.jpg"),
      name: "B.A - English",
   },
   {
      id: 3,
      image: require("../assists/bcom.jpg"),
      name: "B.Com",
   },
   {
      id: 4,
      image: require("../assists/bcom-ca-.jpg"),
      name: "B.Com - CA",
   },
   {
      id: 5,
      image: require("../assists/B.-Com-pa.jpg"),
      name: "B.Com - PA",
   },
   {
      id: 6,
      image: require("../assists/b&i.jpg"),
      name: "B.Com - B & I",
   },
   {
      id: 7,
      image: require("../assists/BBA.jpeg"),
      name: "BBA",
   },
   {
      id: 8,
      image: require("../assists/BCA.jpg"),
      name: "BCA",
   },
   {
      id: 9,
      image: require("../assists/bcom-it.jpeg"),
      name: "B.Com - IT",
   },
   {
      id: 10,
      image: require("../assists/b.sc-It.jpeg"),
      name: "B.Sc - IT",
   },

   {
      id: 12,
      image: require("../assists/bsc-maths.png"),
      name: "B.Sc - MATHEMATICS",
   },
   {
      id: 13,
      image: require("../assists/bscche.jpg"),
      name: "B.Sc - CHEMISTRY",
   },
   {
      id: 14,
      image: require("../assists/bsc-ai.jpeg"),
      name: "B.Sc - CS(AI & DS)",
   },
   {
      id: 15,
      image: require("../assists/bsccs.jpeg"),
      name: "B.Sc - CS",
   },
   {
      id: 16,
      image: require("../assists/bsc-mb.jpeg"),
      name: "B.Sc - MICROBIOLOGY",
   },
   {
      id: 17,
      image: require("../assists/cdf ).jpeg"),
      name: "B.Sc - CDF",
   },
   {
      id: 18,
      image: require("../assists/bsc-cyper.jpeg"),
      name: "B.Sc - CYPER SECURITY",
   },
   {
      id: 19,
      image: require("../assists/msc-cs.jpeg"),
      name: "M.Sc - CS",
   },
   {
      id: 20,
      image: require("../assists/msc-micro.jpeg"),
      name: "M.Sc - MICROBIOLOGY",
   },
   {
      id: 21,
      image: require("../assists/phd-com.jpeg"),
      name: "Ph.D - COMMERCE",
   },
   {
      id: 22,
      image: require("../assists/phd-man.png"),
      name: "Ph.D - MANAGEMENT",
   },
   {
      id: 23,
      image: require("../assists/phd-cs.jpeg"),
      name: "Ph.D - COMPUTER SCIENCE",
   },
   {
      id: 24,
      image: require("../assists/phd-eng.jpeg"),
      name: "Ph.D - ENGLISH",
   },
   {
      id: 25,
      image: require("../assists/phd-micro.jpeg"),
      name: "Ph.D - MICROBIOLOGY",
   },
];

export const Arts = () => {
   return (
      <div className="">
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

                        <Card.Title className="text-dark mt-2 py-2 px-2 overflow-auto">
                           <p>{item.name}</p>
                        </Card.Title>
                     </Card>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};
