import React from "react";
import Card from './Card';
import info from '../info.js';
import "../style2.css";


function createCard(info){
  return <Card 
    id={info.id}
    key={info.id}
    name={info.name}
    img={info.imgURL}
    tel={info.phone}
  />
}
function About() {

  return (
    
    
    <div className="about">
     
{/* 
        <div class="row align-items-center my-5"> */}
          {/* <div class="col-lg-7"> */}
            <div>
              <h1 className="heading">Rent Things The Easier Way
              </h1>
              <span class="Box">{info.map(createCard)}</span>
            </div>
            
            {/* <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://lh3.googleusercontent.com/wLBkHn3jz7V6zQty6jFLnRBhzbTn39Oj6Z3ZuvSv9VDdSm9mcxNnGD6IhVImY7orvUdYKA=s157"
              alt=""
            />
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://lh3.googleusercontent.com/5Vs-uvphFVMSjazIEzAiAsinsw7Ti-d57Bnkg_733h69R0Z2NcBcn15KEqFW-5UN3-qxD0I=s85"
              alt=""
            />
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://lh3.googleusercontent.com/dIYEf1_wuTTk6P0uJvO6w8cWu8X_NimLWJqpUqasYto0hEmahb9SDHmtlNwpQaK-VpOBsQ=s85"
              alt=""
            /> */}
          </div>
        // </div>
      // </div>
  );
}

export default About;
