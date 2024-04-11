import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import emailjs from "@emailjs/browser";

export const Contact = () => {
   const [fname, setFname] = useState("");
   const [lname, setLname] = useState("");
   const [mail, setMail] = useState("");
   const [msg, setMsg] = useState("");
   const [num, setNum] = useState("");
   const [clgName, setClgName] = useState("");
   const [address, setAddress] = useState("");

   const handlesubmit = (e) => {
      e.preventDefault();

      // Admis@2k24
      const serviceId = "service_lbfvdex";
      const templateId = "template_88vrwcw";
      const publicKey = "AsD5fxWxjuxmCu5nf";
      const templateParams = {
         from_fname: fname,
         from_lname: lname,
         mail: mail,
         to_name: "Admission HelpLine",
         num: num,
         clgName: clgName,
         address: address,
         message: msg,
      };
      emailjs
         .send(serviceId, templateId, templateParams, publicKey)
         .then((res) => {
            console.log("Email sent successfully", res);
            setFname("");
            setLname("");
            setMail("");
            setNum("");
            setAddress("");
            setMsg("");
         })
         .catch((err) => {
            console.error("err sending email:", err);
         });
   };

   return (
      <div className="contact-page">
         <header className="height-75">
            <div className="container h-100 d-flex flex-column align-items-center justify-content-center contact-img">
               <h1 className="text-center fw-semibold py-4">Get In Touch</h1>
               <p className="text-center w-75 mb-3">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Vitae pariatur qui quos aspernatur, voluptatem autem possimus
                  esse quo consequatur omnis, soluta consectetur ullam ipsum
                  cum!
               </p>
            </div>
         </header>

         <div className="container my-5 d-flex justify-content-center">
            <Form id="contact-form" onSubmit={handlesubmit}>
               <Row className="mb-3">
                  <Col sm={12} md={6} className="mb-3 mb-md-0">
                     <Form.Label>First Name</Form.Label>
                     <Form.Control
                        placeholder="First name"
                        value={fname}
                        onChange={(e) => setFname(e.target.value)}
                     />
                  </Col>
                  <Col sm={12} md={6}>
                     <Form.Label>Last Name</Form.Label>
                     <Form.Control
                        placeholder="Last name"
                        value={lname}
                        onChange={(e) => setLname(e.target.value)}
                     />
                  </Col>
               </Row>

               <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                     type="email"
                     placeholder="Enter email"
                     value={mail}
                     onChange={(e) => setMail(e.target.value)}
                  />
                  <Form.Text className="text-muted">
                     We'll never share your email with anyone else.
                  </Form.Text>
               </Form.Group>

               <Form.Group className="mb-3">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                     placeholder="Your address"
                     value={address}
                     onChange={(e) => setAddress(e.target.value)}
                  />
               </Form.Group>

               <Row className="mb-3">
                  <Col sm={12} md={6} className="mb-3 mb-md-0">
                     <Form.Label>Mobile No</Form.Label>
                     <Form.Control
                        placeholder="Your Mobile Number"
                        value={num}
                        onChange={(e) => setNum(e.target.value)}
                     />
                  </Col>
                  <Col sm={12} md={6} className="mb-3 mb-md-0">
                     <Form.Label>Preferred College Name</Form.Label>
                     <Form.Control
                        placeholder="College Name"
                        value={clgName}
                        onChange={(e) => setClgName(e.target.value)}
                     />
                  </Col>
               </Row>

               <Form.Group className="mb-3">
                  <Form.Label>Enter Your Course Details </Form.Label>
                  <Form.Control
                     placeholder="Enter your course Details"
                     value={msg}
                     onChange={(e) => setMsg(e.target.value)}
                  />
               </Form.Group>

               <Button variant="primary btn-lg" type="submit">
                  Submit
               </Button>
            </Form>
         </div>
      </div>
   );
};
