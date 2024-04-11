import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import pngwing from "../assists/pngwing.png";
import engineering from "../assists/engineering.png";
import agri from "../assists/agri.png";
import alied from "../assists/alied.png";
import paramedical from "../assists/paramedical.png";
import medical from "../assists/medical.png";
import education from "../assists/education.png";
import diploma from "../assists/diploma.png";

export const Courses = () => {
   return (
      <>
         <div className="courses-page">
            <header className="height-75 pt-5">
               <div className="container h-100 d-flex flex-column align-items-center justify-content-center course-img ">
                  <h1 className="text-center fw-semibold">Our Courses</h1>
                  <p className="text-center w-75 mb-5">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Magnam odio eos distinctio ducimus! Modi quaerat dolores
                     illo accusamus maxime cupiditate culpa minus animi repellat
                     autem!
                  </p>
               </div>
            </header>
            <div className="container py-5">
               <div className="row g-4">
                  <div className="col-lg-3 col-md-6 mb-3">
                     <Card className="d-flex  align-items-center justify-content-center py-3 px-3 text-center ">
                        <Card.Img
                           src={pngwing}
                           style={{ height: "120px", width: "120px" }}
                        />

                        <Card.Title className="fs-5 text-dark mt-2">
                           Arts & Science
                        </Card.Title>

                        <Button
                           variant="primary"
                           className="mt-2"
                           as={Link}
                           to="/arts"
                        >
                           Departments
                        </Button>
                     </Card>
                  </div>
                  <div className="col-lg-3 col-md-6 mb-3">
                     <Card className="d-flex flex-column align-items-center justify-content-center py-3 px-3 text-center ">
                        <Card.Img
                           src={agri}
                           style={{ height: "120px", width: "120px" }}
                        />

                        <Card.Title className="fs-5 text-dark mt-2">
                           Agriculture
                        </Card.Title>

                        <Button
                           variant="primary"
                           className="mt-2"
                           as={Link}
                           to="/agri"
                        >
                           Departments
                        </Button>
                     </Card>
                  </div>
                  <div className="col-lg-3 col-md-6 mb-3">
                     <Card className="d-flex flex-column align-items-center justify-content-center py-3 px-3 text-center ">
                        <Card.Img
                           src={alied}
                           style={{ height: "120px", width: "120px" }}
                        />

                        <Card.Title className="fs-5 text-dark mt-2">
                           Allied Health Science
                        </Card.Title>

                        <Button
                           variant="primary"
                           className="mt-2"
                           as={Link}
                           to="/alied"
                        >
                           Departments
                        </Button>
                     </Card>
                  </div>
                  <div className="col-lg-3 col-md-6 mb-3">
                     <Card className="d-flex flex-column align-items-center justify-content-center py-3 px-3 text-center ">
                        <Card.Img
                           src={engineering}
                           style={{ height: "120px", width: "120px" }}
                        />

                        <Card.Title className="fs-5 text-dark mt-2">
                           Engineering
                        </Card.Title>

                        <Button
                           variant="primary"
                           className="mt-2"
                           as={Link}
                           to="/engineering"
                        >
                           Departments
                        </Button>
                     </Card>
                  </div>
                  <div className="col-lg-3 col-md-6 mb-3">
                     <Card className="d-flex flex-column align-items-center justify-content-center py-3 px-3 text-center ">
                        <Card.Img
                           src={education}
                           style={{ height: "120px", width: "120px" }}
                        />

                        <Card.Title className="fs-5 text-dark mt-2">
                           Education
                        </Card.Title>

                        <Button
                           variant="primary"
                           className="mt-2"
                           as={Link}
                           to="/education"
                        >
                           Departments
                        </Button>
                     </Card>
                  </div>
                  <div className="col-lg-3 col-md-6 mb-3">
                     <Card className="d-flex flex-column align-items-center justify-content-center py-3 px-3 text-center ">
                        <Card.Img
                           src={diploma}
                           style={{ height: "120px", width: "120px" }}
                        />

                        <Card.Title className="fs-5 text-dark mt-2">
                           Diploma & ITI
                        </Card.Title>

                        <Button
                           variant="primary"
                           className="mt-2"
                           as={Link}
                           to="/diploma"
                        >
                           Departments
                        </Button>
                     </Card>
                  </div>
                  <div className="col-lg-3 col-md-6 mb-3">
                     <Card className="d-flex flex-column align-items-center justify-content-center py-3 px-3 text-center ">
                        <Card.Img
                           src={medical}
                           style={{ height: "120px", width: "120px" }}
                        />

                        <Card.Title className="fs-5 text-dark mt-2">
                           Medical
                        </Card.Title>

                        <Button
                           variant="primary"
                           className="mt-2"
                           as={Link}
                           to="/medical"
                        >
                           Departments
                        </Button>
                     </Card>
                  </div>
                  <div className="col-lg-3 col-md-6 mb-3">
                     <Card className="d-flex flex-column align-items-center justify-content-center py-3 px-3 text-center ">
                        <Card.Img
                           src={paramedical}
                           style={{ height: "120px", width: "120px" }}
                        />

                        <Card.Title className="fs-5 text-dark mt-2">
                           Paramedical
                        </Card.Title>

                        <Button
                           variant="primary"
                           className="mt-2"
                           as={Link}
                           to="/paramedical"
                        >
                           Departments
                        </Button>
                     </Card>
                  </div>
               </div>
            </div>

            <div className="faq-section bg-light">
               <div className="container d-flex flex-column align-items-center ">
                  <h2 className="text-center text-capitalize mt-4 mb-5">
                     Frequently asked questions
                  </h2>
                  <p className="text-center mb-5">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Fugiat numquam rem expedita similique necessitatibus dolore
                     magnam natus sit ipsa, quae neque accusantium placeat
                     laudantium mollitia, reprehenderit alias incidunt, delectus
                     obcaecati cupiditate sed omnis repudiandae eos! Quasi unde
                     veritatis labore quibusdam.
                  </p>
                  <Accordion defaultActiveKey="" flush>
                     <Accordion.Item eventKey="0">
                        <Accordion.Header>First question ?</Accordion.Header>
                        <Accordion.Body>
                           Lorem, ipsum dolor sit amet consectetur adipisicing
                           elit. Molestiae ab deserunt eaque nostrum voluptate,
                           facilis ratione quo ducimus quod qui eius nobis quam
                           temporibus similique fugit? Molestias, illo, maxime
                           nulla aliquid ut pariatur corrupti aspernatur dolor
                           assumenda quos officia eos?
                        </Accordion.Body>
                     </Accordion.Item>
                     <Accordion.Item eventKey="1">
                        <Accordion.Header>Second question ?</Accordion.Header>
                        <Accordion.Body>
                           Lorem, ipsum dolor sit amet consectetur adipisicing
                           elit. Molestiae ab deserunt eaque nostrum voluptate,
                           facilis ratione quo ducimus quod qui eius nobis quam
                           temporibus similique fugit? Molestias, illo, maxime
                           nulla aliquid ut pariatur corrupti aspernatur dolor
                           assumenda quos officia eos?
                        </Accordion.Body>
                     </Accordion.Item>
                     <Accordion.Item eventKey="2">
                        <Accordion.Header>Third question ?</Accordion.Header>
                        <Accordion.Body>
                           Lorem, ipsum dolor sit amet consectetur adipisicing
                           elit. Molestiae ab deserunt eaque nostrum voluptate,
                           facilis ratione quo ducimus quod qui eius nobis quam
                           temporibus similique fugit? Molestias, illo, maxime
                           nulla aliquid ut pariatur corrupti aspernatur dolor
                           assumenda quos officia eos?
                        </Accordion.Body>
                     </Accordion.Item>
                     <Accordion.Item eventKey="3">
                        <Accordion.Header className="mb-3">
                           Fourth question ?
                        </Accordion.Header>
                        <Accordion.Body className="mb-3">
                           Lorem, ipsum dolor sit amet consectetur adipisicing
                           elit. Molestiae ab deserunt eaque nostrum voluptate,
                           facilis ratione quo ducimus quod qui eius nobis quam
                           temporibus similique fugit? Molestias, illo, maxime
                           nulla aliquid ut pariatur corrupti aspernatur dolor
                           assumenda quos officia eos?
                        </Accordion.Body>
                     </Accordion.Item>
                  </Accordion>
               </div>
            </div>
         </div>
      </>
   );
};
