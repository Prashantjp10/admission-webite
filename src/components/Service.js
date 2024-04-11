// import { faMoneyBillTransfer } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";

export const Service = () => {
   const items = [
      {
         id: 1,
         name: "Sri Ramchandra university,Chennai",
         category: "university",
      },
      {
         id: 2,
         name: "VIT university,vellore",
         category: "university",
      },
      {
         id: 3,
         name: "SRM university,Chennai",
         category: "university",
      },
      {
         id: 4,
         name: "Saveetha university,Chennai",
         category: "university",
      },
      {
         id: 5,
         name: "Hindustan university,Chennai",
         category: "university",
      },
      {
         id: 6,
         name: "Bharath university,Chennai",
         category: "university",
      },
      {
         id: 7,
         name: "Vinayaga Mission university,salem",
         category: "university",
      },
      {
         id: 8,
         name: "Karpagam university,coimbatore",
         category: "university",
      },
      {
         id: 9,
         name: "Sathyabama university,Chennai",
         category: "university",
      },
      {
         id: 10,
         name: "Meenkashi university,Chennai",
         category: "university",
      },
      {
         id: 11,
         name: "Vels university,Chennai",
         category: "university",
      },
      {
         id: 12,
         name: "Sri Balaji Vidyapeeth university,pondicherry",
         category: "university",
      },
      {
         id: 13,
         name: "Dr.MGR Educational and Research university,Chennai",
         category: "university",
      },
      {
         id: 14,
         name: "Prist university,Chennai",
         category: "university",
      },
      {
         id: 15,
         name: "Vel Tech university,Chennai",
         category: "university",
      },
      {
         id: 16,
         name: "chettinad university,Chennai",
         category: "university",
      },
      {
         id: 17,
         name: "PSG college of technology,Coimbatore",
         category: "engineering",
      },
      {
         id: 18,
         name: "kumaraguru college of technology,Coimbatore",
         category: "engineering",
      },
      {
         id: 19,
         name: "R.V.S Group of Institutions",
         category: "engineering",
      },
      {
         id: 20,
         name: "Sri krishna Group of Institutions",
         category: "engineering",
      },
      {
         id: 21,
         name: "Sri Ramakrishna Group of Institutions",
         category: "engineering",
      },
      {
         id: 22,
         name: "SRM Group of Institutions",
         category: "engineering",
      },
      {
         id: 23,
         name: "Sathyabama Group of Institutions",
         category: "engineering",
      },
      {
         id: 24,
         name: "RMK & RMD Group of Institutions",
         category: "engineering",
      },
      {
         id: 25,
         name: "Panimalar Group of Institutions",
         category: "engineering",
      },
      {
         id: 26,
         name: "Venkateshwara Group of Institutions",
         category: "engineering",
      },
      {
         id: 27,
         name: "Karpagam Group of Institutions",
         category: "engineering",
      },
      {
         id: 28,
         name: "SNS Group of Institutions",
         category: "engineering",
      },
      {
         id: 29,
         name: "Hindustan Group of Institutions",
         category: "engineering",
      },
      {
         id: 30,
         name: "KSR Group of Institutions",
         category: "engineering",
      },
      {
         id: 31,
         name: "Mahendra Group of Institutions",
         category: "engineering",
      },
      {
         id: 32,
         name: "Vivekanandha Group of Institutions",
         category: "engineering",
      },
      {
         id: 33,
         name: "Nehru Group of Institutions",
         category: "engineering",
      },
      {
         id: 34,
         name: "Paavai Group of Institutions",
         category: "engineering",
      },
      {
         id: 35,
         name: "Nandha Group of Institutions",
         category: "engineering",
      },
      {
         id: 36,
         name: "Kumarasamy college of Engineering",
         category: "engineering",
      },
      {
         id: 37,
         name: "Sona college of technology",
         category: "engineering",
      },
      {
         id: 38,
         name: "Kongu Engineering College",
         category: "engineering",
      },
      {
         id: 39,
         name: "Sathyabama Group of Institutions",
         category: "engineering",
      },
   ];

   const [data, setData] = useState(items);

   const filterType = (category) => {
      setData(
         items.filter((item) => {
            return item.category === category;
         })
      );
   };

   return (
      <div className="container  service-content">
         <header className="height-75 pt-5">
            <div className="container h-100 d-flex flex-column align-items-center justify-content-center service-img ">
               <h1 className="text-center fw-semibold">Our Services</h1>
               <p className="text-center w-75 mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam odio eos distinctio ducimus! Modi quaerat dolores illo
                  accusamus maxime cupiditate culpa minus animi repellat autem!
               </p>
            </div>
         </header>
         <div className="row g-4 py-5">
            <div className="d-flex gap-3">
               <Button
                  onClick={() => {
                     setData(items);
                  }}
               >
                  All
               </Button>
               <Button onClick={() => filterType("engineering")}>
                  Engineering
               </Button>
               <Button onClick={() => filterType("university")}>
                  University
               </Button>
            </div>
            {data.map((item, index) => (
               <div key={index} className="col-lg-3 col-md-6">
                  <Card className="d-flex flex-column align-items-center justify-content-center py-3  text-center  text-light">
                     <Card.Title className="fs-5 text-dark mt-2 py-2 px-2 overflow-auto">
                        {item.name}
                     </Card.Title>
                  </Card>
               </div>
            ))}
         </div>
      </div>
   );
};
