import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGraduate, faPhone } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Service } from "./Service";
import { Courses } from "./Courses";
import { Arts } from "./Arts";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Engineering } from "./Engineering";
import { Paramedical } from "./Paramedical";
import { Agri } from "./Agri";
import { Alied } from "./Alied";
import { Diploma } from "./Diploma";
import { Education } from "./Education";
import { Medical } from "./Medical";

export const AppBar = () => {
   return (
      <>
         <BrowserRouter>
            <Navbar expand="lg" className="bg-body-tertiary">
               <Container>
                  <Navbar.Brand href="#home">
                     <h2 className="text-primary">
                        <span className="d-flex gap-1">
                           <FontAwesomeIcon icon={faUserGraduate} />
                           Admission Helpline
                        </span>
                     </h2>
                  </Navbar.Brand>
                  <Navbar.Toggle
                     aria-controls="basic-navbar-nav"
                     className=""
                  />
                  <Navbar.Collapse
                     id="basic-navbar-nav"
                     className="justify-content-end text-center"
                  >
                     <Nav className="nav-tag fw-bold">
                        <Nav.Link as={Link} to="/">
                           Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/courses">
                           Courses
                        </Nav.Link>
                        <Nav.Link as={Link} to="/service">
                           Services
                        </Nav.Link>
                     </Nav>

                     <Button variant="primary" as={Link} to="/contact">
                        <span
                           className="d-flex align-items-center gap-2"
                           style={{ color: "#fff" }}
                        >
                           <FontAwesomeIcon icon={faPhone} />
                           contact
                        </span>
                     </Button>
                  </Navbar.Collapse>
               </Container>
            </Navbar>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/courses" element={<Courses />} />
               <Route path="/arts" element={<Arts />} />
               <Route path="/engineering" element={<Engineering />} />
               <Route path="/diploma" element={<Diploma />} />
               <Route path="/education" element={<Education />} />
               <Route path="/medical" element={<Medical />} />
               <Route path="/paramedical" element={<Paramedical />} />
               <Route path="/alied" element={<Alied />} />
               <Route path="/agri" element={<Agri />} />
               <Route path="/service" element={<Service />} />

               <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
         </BrowserRouter>
      </>
   );
};
