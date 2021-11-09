import React from "react";
import { useState } from 'react';


function Home() {
  const [currentValue, setCurrentValue] = useState('restaurant')

  const changeValue = (newValue) => {
    setCurrentValue(newValue)
  }
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5 bg-image d-flex justify-content-center align-items-center">
          <div class="col-lg-17">
            <div class="col-lg-16">
              <h1 class=" mb-4 display-4 font-weight-bolder row justify-content-center">Business Listing</h1>
               <div class=" mb-4 row justify-content-center font-weight-bold"> Explore the great places !!!</div>
                 <div class="mb-3 col-md-0  row justify-content-center font-weight-bold">Let’s discover some great stuff & places for entertainment, eat & shop</div>
                  <form class="mb-4 row justify-content-center">
                    <select
                  onChange={(event) => changeValue(event.target.value)}
                  value={currentValue}
                    >
                  <option value="restaurant">Restaurant</option>
                  <option value="spa">Beauty & Spa</option>
                  <option value="fitness">Fitness</option>
                  <option value="shopping">Shopping</option>
                  <option value="stay">Stay</option>
                  <option value="automotive">Automotive</option>
                </select>
              </form>
              <div class=" row justify-content-center"><button>SEARCH</button></div>
            </div>

            {/* <img
              class="img-fluid rounded mb-4 mb-lg-0"
               src="https://cdn.dribbble.com/users/2718135/screenshots/5462563/ia_0076_culture_trip_wellness_guide_to_the_city2_1x.jpg?compress=1&resize=400x300" 
              alt=""
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
